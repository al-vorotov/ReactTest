import React, { useLayoutEffect } from 'react';
import Loader from '../Loader';
import './styles.css';

export default React.memo(() => {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  useLayoutEffect(() => {
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <div className="FullscrinLoader">
      <Loader size="large" />
    </div>
  );
});
