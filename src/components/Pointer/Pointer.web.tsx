import React from 'react';
import { styles } from './Pointer.styles';

const Pointer: React.FC = () => {
  return (
    <img
      src={require('../../../assets/PointerIcon.svg')}
      width={80}
      height={80}
      style={{ ...styles.root, ...styles.web }}
    />
  );
};

export default Pointer;
