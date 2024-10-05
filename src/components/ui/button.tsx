import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  size?: string; // Add this line
}

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, disabled, children, className, asChild, size }) => {
  const Component = asChild ? 'span' : 'button';
  return (
    <Component
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className} ${size}`} // Use className to apply btn-primary or btn-secondary
    >
      {children}
    </Component>
  );
};

export default Button;
