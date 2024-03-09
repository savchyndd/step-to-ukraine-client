import React from 'react';
import styles from './Button.module.scss';

const Button = ({
  label,
  onClick,
  additionalClassName,
  styleToSvg,
}: {
  label?: string | undefined;
  onClick?: () => void;
  additionalClassName?: string;
  styleToSvg?: string;
}) => {
  const buttonClass = additionalClassName
    ? `${styles[additionalClassName]}`
    : styles.button_default;

  const svgStyle = styleToSvg
    ? `${styles[styleToSvg]}`
    : styles.button_default_svg;

  return (
    <button className={buttonClass} onClick={onClick}>
      <span>{label}</span>
      <span className={svgStyle}></span>
    </button>
  );
};

export default Button;

// імпорт з такими пропсами
// <Button
//   label="надпис на кнопці"
//   onClick={handleClick}  - передаєш функцію, яку має виконувати кнопа
//   additionalClassName="назва стилю" для кнопок є два стилі, тут вказуєш назву того, що тобі потрібно
// />
