import React from 'react';
import styled from 'styled-components';

const ColorCircle = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${(props) => (props.color ? props.color : '')};
  border: ${(props) =>
    props.selected
      ? '4px solid rgba(0,0,0, 0.5)'
      : '1.5px solid rgba(0,0,0,0.2)'};
  margin-right: 0.25rem;

  &:last-child {
    margin: 0;
  }
`;

const Colors = ({ color, selectedColor, setSelectedColor }) => {
  const getColor = () => {
    switch (color) {
      case 'white':
        return '#fff';
      case 'black':
        return '#222';
      case 'red':
        return '#d83030';
      case 'pink':
        return '#ffcfd7';
      case 'green':
        return '#68bb68';
      case 'blue':
        return '#4343f3';
      case 'gold':
        return '#ffc859';
    }
  };

  const changeColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <ColorCircle
      color={getColor()}
      selected={color === selectedColor}
      onClick={() => changeColor(color)}
      aria-label={color}
    />
  );
};

export default Colors;
