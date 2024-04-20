import React from 'react';

interface ButtonProps {
  type: 'default' | 'active' | 'hover';
  text: string;
  width: string;
  height: string;
  textStyle: 'regular' | 'medium' | 'semibold' | 'bold' | 'extaBold';
}

const ButtonUI: React.FC<ButtonProps> = ({ type, text, width, height, textStyle }) => {
  
    const buttonStyles: { [key in ButtonProps['type']]: React.CSSProperties } = {
        default: {
            backgroundColor: 'gray',
            color: 'white',
            borderRadius: '5px'
        },
        active: {
            backgroundColor: '#B0F2AA',
            color: 'black',
            borderRadius: '5px'
        },
        hover: {
            backgroundColor: 'blue',
            color: 'white',
            borderRadius: '5px'
        },
    };

    const defaultTextStyle: { [key in ButtonProps['textStyle']]: React.CSSProperties } = {
        regular: {
            fontSize: '10px'
        },
        medium: {
            fontSize: '18px'
        },
        semibold: {
            fontSize: '36px'
        },
        bold: {
            fontSize: '44px'
        },
        extaBold: {
            fontSize: '54px'
        }
    };

    const handleClick = () => {
       console.log('Button clicked');
    };
    
    const mergedTextStyle = defaultTextStyle[textStyle];
    const buttonStyle = {margin: '5px', ...buttonStyles[type], width, height};

    return (
        <button style={{...buttonStyle, ...mergedTextStyle}} onClick={handleClick}>
            {text}
        </button>
    );
};

export default ButtonUI;