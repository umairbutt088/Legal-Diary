import {StyleSheet} from 'react-native';
import {colors, WP} from '../../../utilities';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImgContStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImgStyle: {
    height: WP('100%'),
    width: WP('100%'),
    opacity: 0.1,
  },
});
export default styles;
