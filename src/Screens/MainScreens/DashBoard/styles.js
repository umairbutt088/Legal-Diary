import {HP, WP, colors} from '../../../utilities';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  mapViewContStyle: {
    padding: WP('5'),
    width: WP('90'),
    backgroundColor: 'transparent',
    marginBottom: WP('5'),
    borderColor: colors.darkGrey,
    borderWidth: WP('0.2'),
    borderRadius: WP('3'),
  },
});

export default styles;
