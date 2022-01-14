import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  width: number;
  onClick?: () => void;
}

function Test(props :ButtonProps){
  const {width, children, onClick} = props;
  return (
    <div>
      <p>Hello</p>
    </div>
  );
};

export default Test;