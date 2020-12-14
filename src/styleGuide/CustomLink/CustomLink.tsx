import React, { FC } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const CustomLink: FC<{
  to: string;
  className?: string;
  textCenter?: boolean;
}> = ({ children, to, textCenter = true, className = '' }) => {
  return (
    <Link
      to={to}
      style={{ textAlign: textCenter ? 'center' : 'left' }}
      className={`link ${className}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
