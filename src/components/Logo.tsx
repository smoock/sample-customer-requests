import * as React from 'react';

const SvgMidtypeLogoCombined = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 676 176" {...props}>
    <defs>
      <linearGradient
        x1="75.448%"
        y1="5.095%"
        x2="24.624%"
        y2="93.82%"
        id="midtype-logo-combined_svg__a"
      >
        <stop stopColor="#5F49D7" offset="0%" />
        <stop stopColor="#3123AE" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h676v176H0z" />
      <text
        transform="translate(182)"
        fill="#3123AE"
        fontFamily="neue-haas-grotesk-display, NHaasGroteskDSPro-65Md, Neue Haas Grotesk Display Pro"
        fontSize={127.059}
        fontWeight={500}
      >
        <tspan x={21.304} y={130.706} fontWeight={600}>
          {'Midtype'}
        </tspan>
      </text>
      <g transform="translate(1)">
        <circle fill="#FFF" cx={88.529} cy={88.529} r={76.765} />
        <path
          d="M88.53 172.353c-46.295 0-83.824-37.53-83.824-83.824S42.235 4.706 88.529 4.706c46.295 0 83.824 37.529 83.824 83.823 0 46.295-37.53 83.824-83.824 83.824zM74.758 43.029l-45.347 78.543 7.574 4.373 45.346-78.543-7.573-4.373zM92.43 53.232l-32.39 56.102 7.573 4.373 32.39-56.102-7.573-4.373zm16.41 9.474L63.494 141.25l7.574 4.373 45.346-78.543-7.573-4.373zm30.628-12.237L94.122 129.01l7.574 4.373 45.347-78.543-7.574-4.372z"
          fill="url(#midtype-logo-combined_svg__a)"
        />
      </g>
    </g>
  </svg>
);

interface IProps {
  width?: number;
}

const Logo: React.FC<IProps> = props => {
  const w = props.width || 120;
  const h = w / 3.75;
  return <SvgMidtypeLogoCombined width={`${w}px`} height={`${h}px`} />;
};

export default Logo;
