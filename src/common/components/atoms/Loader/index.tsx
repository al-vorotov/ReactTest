import React from 'react';
import './styles.css';

export interface Props {
  size?: 'large' | 'medium' | 'small';
}

export default React.memo(
  ({ size = 'medium' }: Props): React.ReactElement<Props> => {
    return (
      <div className={`Loader Loader-${size}`}>
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  },
);
