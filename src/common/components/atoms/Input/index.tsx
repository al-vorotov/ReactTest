import React from 'react';
import useBoolean from '../../../hooks/useBoolean';
import cx from 'classnames';
import './styles.css';

const checkValue = (min: number, max: number, currentValue: number) => {
  if (currentValue > max) {  return max; }
  if (currentValue < min) {  return min; }
};

export interface Props {
  label?: string;
  isValid?: boolean;
  errorMessage?: string;
  type?: 'text' | 'password' | 'number' | 'url' | 'date';
  className?: string;
  value: string;
  settings?: {
    minNumb: any;
    maxNumb: any;
  };

  onChange(value: string , isValid: any ): void;
}

const Input: React.FC<Props> = ({
  className,
  label,
  isValid,
  errorMessage,
  type = 'text',
  onChange,
    settings = { minNumb: '', maxNumb: ''},
  value,
}: Props): React.ReactElement => {
  const { value: showPassword, toggleValue } = useBoolean(false);

  return (
    <div className={cx('Input', className)}>
      {label && <div className="Input__label">{label}</div>}
      <input
        className={cx('Input__input', {
          ['Input__input-invalid']: !isValid,
          ['Input__input-password']: type === 'password',
          ['Input__input-number']: type === 'number',
        })}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, isValid)}
        type={showPassword ? 'text' : type}
        value={className === 'Input__input-number' ? checkValue(settings.minNumb, settings.maxNumb, +value ) : value}
        max={settings.maxNumb}
        min={settings.minNumb}
      />
      {type === 'password' && (
        <i
          className={cx('far', showPassword ? 'fa-eye' : 'fa-eye-slash', 'Input__show_password')}
          onClick={toggleValue}
        />
      )}
      {errorMessage && <div className="Input__error_message">{errorMessage}</div>}
    </div>
  );
};

export default React.memo(Input);
