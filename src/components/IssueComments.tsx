import React, { useState } from 'react';
import styled from 'styled-components';
import { Query, QueryResult, Mutation, MutationFunc } from 'react-apollo';
import dateFormat from 'dateformat';

import GET_CURRENT_USER, { ICurrentUser } from '../apollo/queries/currentUser';
import CREATE_COMMENT from '../apollo/queries/createComment';
import GET_COMMENT, { ICommentQuery } from '../apollo/queries/getComment';
import { IIssue } from '../apollo/queries/issueFragment';
import Loader from './Loader';
import Button from './Button';
import Input from './Input';

const Styled = styled.div`
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  .comments-container {
    margin-top: 2.5rem;
  }
`;

const StyledAddComment = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: flex-start;

  .comment-form {
    margin-bottom: 1rem;
    width: 100%;
  }
`;

const StyledComment = styled.div`
  margin: 1.5rem 0;
  padding-left: 1rem;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  transition: 250ms all;

  &:hover {
    border-left: 1px solid rgba(0, 0, 0, 1);
  }
  .comment__meta {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.5);
  }
  .comment__text {
    margin-top: 0.5rem;
  }
  .comment__actions {
    margin-bottom: 1rem;
    font-size: 0.75rem;
  }
`;

const AddComment: React.FC<{
  issueId: string;
  parentId?: string;
  onSubmit?: () => void;
}> = props => {
  const [text, setText] = useState('');
  return (
    <StyledAddComment>
      <Query query={GET_CURRENT_USER}>
        {(query: QueryResult<ICurrentUser>) => {
          if (query.loading) {
            return <Loader />;
          }
          if (query.data && query.data.mUserInSession) {
            const { mUserInSession: user } = query.data;
            return (
              <>
                <div className="comment-form">
                  <Input
                    textarea={true}
                    value={text}
                    onChange={e => setText(e)}
                    style={{ height: 70 }}
                  />
                </div>
                <Mutation
                  mutation={CREATE_COMMENT}
                  variables={{
                    commenterId: user.id,
                    body: text,
                    issueId: props.issueId,
                    parentId: props.parentId
                  }}
                  refetchQueries={
                    props.parentId
                      ? [
                          {
                            query: GET_COMMENT,
                            variables: { id: props.parentId }
                          }
                        ]
                      : []
                  }
                >
                  {(mutation: MutationFunc) => (
                    <Button
                      onClick={() => {
                        mutation();
                        if (props.onSubmit) {
                          props.onSubmit();
                        }
                      }}
                    >
                      Add Comment
                    </Button>
                  )}
                </Mutation>
              </>
            );
          }
          return null;
        }}
      </Query>
    </StyledAddComment>
  );
};

const Comment: React.FC<{ issueId: string; commentId: string }> = props => {
  const [addCommentOpen, setAddCommentOpen] = useState(false);
  return (
    <Query query={GET_COMMENT} variables={{ id: props.commentId }}>
      {(query: QueryResult<ICommentQuery>) => {
        if (query.loading) {
          return null;
        }
        if (query.data) {
          const { comment } = query.data;
          return (
            <StyledComment>
              <div className="comment__meta">
                {comment.commenter && (
                  <span>
                    {/* <strong>{comment.commenter.private.name}</strong> on{' '} */}
                  </span>
                )}
                <span>
                  {dateFormat(comment.createdAt, 'dddd, mmmm d, yyyy, h:MM TT')}
                </span>
              </div>
              <p className="comment__text">{comment.body}</p>
              <div className="comment__actions">
                <button onClick={() => setAddCommentOpen(!addCommentOpen)}>
                  {addCommentOpen ? 'Cancel' : 'Reply'}
                </button>
              </div>
              {addCommentOpen && (
                <AddComment
                  issueId={props.issueId}
                  parentId={comment.id}
                  onSubmit={() => setAddCommentOpen(false)}
                />
              )}
              <div className="comment__children">
                {comment.childComments.nodes.map(node => (
                  <Comment
                    key={node.id}
                    commentId={node.id}
                    issueId={props.issueId}
                  />
                ))}
              </div>
            </StyledComment>
          );
        }
        return null;
      }}
    </Query>
  );
};

const IssueList: React.FC<IIssue> = props => {
  return (
    <Styled>
      <AddComment issueId={props.id} />
      <div className="comments-container">
        {props.comments.nodes.length === 0 ? (
          <h5>No comments have been submitted.</h5>
        ) : (
          <>
            <h3>Comments</h3>
            {props.comments.nodes.map(comment => (
              <Comment
                key={comment.id}
                issueId={props.id}
                commentId={comment.id}
              />
            ))}
          </>
        )}
      </div>
    </Styled>
  );
};

export default IssueList;
