import {StyleSheet} from 'react-native';
import {HP, WP, size, colors} from '../../../utilities';

const styles = StyleSheet.create({
  safeAryViewStyle: {flex: 1, backgroundColor: '#fff'},
  backgroundImgContStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  backgroundImgStyle: {
    height: WP('100%'),
    width: WP('100%'),
    opacity: 0.1,
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: WP('10'),
  },
  titleTextStyle: {
    fontSize: size.h1,
    textAlign: 'center',
    color: colors.drakBlack,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: WP('90'),
    height: WP('12'),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: WP('10'),
    backgroundColor: colors.drakBlack,
    borderRadius: WP('2'),
  },
  btnTitleStyle: {fontWeight: 'bold', color: colors.white},
});
export default styles;
