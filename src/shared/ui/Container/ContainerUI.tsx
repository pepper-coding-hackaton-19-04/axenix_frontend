import React from 'react';

interface ContainerProps {
  typeContainer: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const ContainerUI: React.FC<ContainerProps> = ({ typeContainer, children }) => {
  const typeContainerStyles: { [key in ContainerProps['typeContainer']]: React.CSSProperties } = {
    small: {
      borderColor: '2px solid gray',
      width: '200px',
      height: 'auto',
      backgroundColor: '#F2F2F2',
      margin: '10px'
    },
    medium: {
      borderColor: '2px solid gray',
      width: '400px',
      height: 'auto',
      backgroundColor: '#E0E0E0',
      margin: '15px'
    },
    large: {
      borderColor: '2px solid gray',
      width: '1200px',
      height: 'auto',
      backgroundColor: '#EAEAEA',
      margin: '20px'
    },
  };

  const containerStyle = {
    ...typeContainerStyles[typeContainer],
    overflow: 'auto',
    borderRadius: '20px'
  };

  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
};

export default ContainerUI;