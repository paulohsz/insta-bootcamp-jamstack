import React from 'react';
import { useTheme } from 'styled-components';
import ReactDOMServer from 'react-dom/server';

// eslint-disable-next-line react/prop-types
export default function Bubbles({ mode }) {
  const strokeColor = (mode === 'dark') ? '#030506' : '#FFFFFF';
  const fill = (mode === 'dark') ? '#181F22' : '#F2F2F2';
  return (
    <svg width="459" height="596" viewBox="0 0 459 596" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="275.5" cy="463.5" r="261.5" fill={fill} stroke={strokeColor} />
      <circle cx="374" cy="277" r="213" fill={fill} stroke={strokeColor} strokeWidth="64" />
      <circle cx="170" cy="170" r="138" fill={fill} stroke={strokeColor} strokeWidth="64" />
    </svg>

  );
}

Bubbles.url = () => {
  const { mode } = useTheme().colors;
  const BubblesSVG = ReactDOMServer.renderToStaticMarkup(<Bubbles mode={mode} />);

  return `data:image/svg+xml;base64,${Buffer.from(BubblesSVG).toString('base64')}`;
};
