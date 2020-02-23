import React from 'react';
import cx from 'classnames';
import './styles.css';

export interface Props {
  type: 'success' | 'warning' | 'error';
  message: string;
  title?: string;
  className?: string;
}

const Alert: React.FC<Props> = ({ type, title, message, className }: Props) => {
  return (
    <div className={cx('Alert', `Alert-${type}`, className)}>
      {title && <div className="Alert__title">{title}</div>}
      <div className="Alert__message">{message}</div>
    </div>
  );
};

export default React.memo(Alert);
