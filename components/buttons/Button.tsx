import clsxm from 'lib/clsxm';
import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'primary' | 'secondary' | 'primary-outlined' | 'secondary-outlined';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Button is disabled or not
   */
  isDisabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */


export const Button = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  isDisabled = false,
  ...props
}: ButtonProps) => {
  const variants = variant === 'primary' ? clsxm([
    !isDisabled ? 'bg-primary text-white' : 'bg-disabled text-textDisabled',
  ]) :
  variant === 'secondary' ? clsxm([
    !isDisabled ? 'bg-secondary text-white' : 'bg-disabled text-textDisabled',
  ]) :
  variant === 'primary-outlined' ? clsxm([
    !isDisabled ? 'bg-white text-primary border border-solid border-primary' : 'bg-disabled text-textDisabled',
  ]) :
  variant === 'secondary-outlined' && clsxm([
    !isDisabled ? 'bg-white text-secondary border border-solid border-secondary' : 'bg-disabled text-textDisabled',
  ])
  return (
    <button
      type="button"
      className={[clsxm(
        'button inline-flex items-center justify-center font-semibold',
        'rounded',
        isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
        'transition duration-100'), `storybook-button--${size}`, variants].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
