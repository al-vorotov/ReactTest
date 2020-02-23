import React from 'react';
import cx from 'classnames';
import './styles.css';

export interface Props {
  color: string;
  isSelected: boolean;
  className?: string;
  onClick(): void;
}

const ThemeItem: React.FC<Props> = ({ color, isSelected, onClick, className }: Props): React.ReactElement => {
  return (
    <div
      onClick={onClick}
      className={cx('ThemeItem', { 'ThemeItem-selected': isSelected }, className)}
      style={{ backgroundColor: color }}
    />
  );
};

export default React.memo(ThemeItem);
