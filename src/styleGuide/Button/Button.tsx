import React, { FC } from 'react';
import './style.scss';

const Button: FC<{
  type?: JSX.IntrinsicElements['button']['type'];
  className?: string;
  primary?: boolean;
  onClick: () => void;
}> = ({
  children,
  primary = false,
  className = '',
  type = 'button',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className} ${primary ? 'primary' : ''}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
