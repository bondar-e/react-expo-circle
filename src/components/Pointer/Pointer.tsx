import PointerIcon from 'assets/PointerIcon.svg';
import { colors } from 'theme';
import { styles } from './Pointer.styles';

const Pointer = () => {
  return <PointerIcon width={50} height={50} fill={colors['primary-200']} style={[styles.root, styles.native]} />;
};

export default Pointer;
