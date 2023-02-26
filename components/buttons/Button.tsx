import Icon from 'components/icon';
import clsxm from 'lib/clsxm';
import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'primary' | 'secondary' | 'link' | 'icon';
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
  const isIcon = variant === 'link';
  const variants = variant === 'primary' ? clsxm([
    !isDisabled ? 'hover:bg-primary-60 bg-primary text-white' : 'bg-white-40 text-black-20',
  ]) :
  variant === 'secondary' ? clsxm([
    !isDisabled ? 'bg-white hover:bg-primary text-primary hover:text-white border-[1.5px] border-solid border-primary' : 'bg-white text-black-20 border-[1.5px] border-solid border-white-40',
  ]) :
  variant === 'link' ? clsxm([
    !isDisabled ? 'bg-white hover:bg-primary-5 text-primary' : 'bg-white text-black-20',
  ]) :
  variant === 'icon' && clsxm([
    !isDisabled ? 'bg-white text-secondary border border-solid border-secondary' : 'bg-white-40 text-textDisabled',
  ])
  return (
    <button
      type="button"
      className={[clsxm(
        'button inline-flex items-center justify-center',
        isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
        isIcon && 'gap-[9px]',
        'transition duration-100'), `storybook-button--${size}`, variants].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {isIcon && <Icon icon="link" color='currentColor'/>}
      {label}
      {isIcon && <Icon icon="link" color='currentColor'/>}
    </button>
  );
};
