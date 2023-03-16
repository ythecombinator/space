import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export const useAxe = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const axe = require('@axe-core/react');
      axe(React, ReactDOM, 1000);
    }
  }, []);
};
