import {StyleSheet} from 'react-native';
import {colors, size, WP} from '../../../utilities';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
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
  saveButtonContStyle: {
    paddingVertical: WP('2'),
    paddingHorizontal: WP('20'),
    backgroundColor: colors.darkGrey,
    alignSelf: 'center',
    marginTop: WP('10'),
    marginBottom: WP('5'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WP('2'),
  },
  saveButtonTextStyle: {
    fontSize: size.large,
    fontWeight: 'bold',
    color: colors.white,
  },
  buttonContainer: {
    width: WP('90'),
    height: WP('12'),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: WP('10'),
    backgroundColor: colors.drakBlack,
    borderRadius: WP('2'),
    marginBottom: WP('5'),
  },
  btnTitleStyle: {fontWeight: 'bold', color: colors.white},
});
export default styles;
