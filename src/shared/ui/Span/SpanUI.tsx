import React from 'react';

interface SpanProps {
  type: 'small' | 'medium' | 'large';
  color: string;
  children: React.ReactNode;
}

const SpanUI: React.FC<SpanProps> = ({ type, color, children }) => {
  const typeStyles: { [key in SpanProps['type']]: React.CSSProperties } = {
    small: {
      fontSize: '12px',
      fontWeight: 'normal',
      color: color,
      margin: '10px'
    },
    medium: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: color,
      margin: '12px'
    },
    large: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: color,
      margin: '15px'
    },
  };

  const spanStyle = {
    ...typeStyles[type]
  };

  return (
    <span style={spanStyle}>
      {children}
    </span>
  );
};

export default SpanUI;