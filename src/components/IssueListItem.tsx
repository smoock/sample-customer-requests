import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dateFormat from 'dateformat';

import * as styles from '../utils/styles';
import { IIssue } from '../apollo/queries/issueFragment';

const StyledIssue = styled.div`
  margin-bottom: 2rem;
  background: white;
  border-radius: ${styles.BORDER_RADIUS};
  box-shadow: ${styles.BOX_SHADOW};
  padding: 1.5rem;
  transition: 250ms transform;
  will-change: transform;

  &:hover {
    transform: translateY(-3px);
  }

  p {
    margin-bottom: 0.8rem;
  }
  .issue__title {
    display: flex;
    flex-flow: row wrap;
  }
  .issue__title div {
    margin-left: 0.5rem;
  }
`;

const StyledIssueMeta = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: gray;
  .issue__user__avatar {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-size: cover;
    background-position: center center;
    margin-right: 0.5rem;
  }
`;

export const IssueMeta: React.FC<
  IIssue & { style?: React.CSSProperties }
> = props => (
  <StyledIssueMeta style={props.style}>
    {props.reporter && (
      // <div
      //   className="issue__user__avatar"
      //   style={{ backgroundImage: `url('${props.reporter.private.photoUrl}')` }}
      // />
      <div />
    )}
    <div className="issue__meta__reporter">
      Reported{' '}
      {props.reporter && (
        <>
          by <strong>{props.reporter.id}</strong>{' '}
        </>
      )}
      on{' '}
      <strong>
        {dateFormat(props.createdAt, 'dddd, mmmm d, yyyy, h:MM TT')}
      </strong>
      .
    </div>
  </StyledIssueMeta>
);

interface IPillProps {
  color: string;
}

const StyledPill = styled.div`
  font-size: 0.8rem;
  border: 1px solid ${(props: IPillProps) => props.color};
  color: ${(props: IPillProps) => props.color};
  border-radius: 15px;
  padding: 0.2rem 0.5rem;
  display: inline-block;
`;

const Pill: React.FC<IPillProps> = props => (
  <StyledPill {...props}>{props.children}</StyledPill>
);

const Issue: React.FC<IIssue> = props => (
  <StyledIssue>
    <Link to={`/issue/${props.id}`}>
      <div className="issue__title">
        <h3>{props.summary}</h3>
        <Pill color="gray">{props.topic.name}</Pill>
      </div>
      <p>{props.body}</p>
      <IssueMeta {...props} />
    </Link>
  </StyledIssue>
);

export default Issue;
