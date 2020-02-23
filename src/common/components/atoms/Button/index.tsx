import React from 'react';
import cx from 'classnames';
import './styles.css';

export interface Props {
  children: React.ReactNode;
  type?: 'submit' | 'cancel';
  isDisabled?: boolean;
  className?: string;
  onClick(): void;
}

export default React.memo(
  ({ type = 'submit', isDisabled = false, children, className, onClick }: Props): React.ReactElement<Props> => {
    return (
      <button
        disabled={isDisabled}
        onClick={onClick}
        className={cx('Button', {
        ['Button-disabled']: !isDisabled,
        ['Button-submit']: type === 'submit',
        ['Button-cancel']: type === 'cancel',
      })}
      >
        {children}
      </button>
    );
  },
);
