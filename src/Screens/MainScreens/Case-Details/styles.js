import {StyleSheet} from 'react-native';
import {colors, size, WP} from '../../../utilities';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  scrollViewStyle: {
    width: WP('90'),
    height: '100%',
    backgroundColor: colors.xxlight,
  },
  titleContainer: {
    width: WP('90'),
    padding: WP('2'),
    alignSelf: 'center',
    backgroundColor: colors.drakBlack,
  },
  titleTextStyle: {
    fontSize: size.h6,
    fontWeight: 'bold',
    color: colors.white,
  },
  caseDetailContainer: {
    width: WP('90'),
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  courtDetailContainer: {
    padding: WP('1'),
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  courtNameBoldTextStyle: {
    fontSize: size.xlarge,
    fontWeight: 'bold',
    color: colors.drakBlack,
  },
  courtNameNormalTextStyle: {
    fontSize: size.large,
    fontWeight: 'normal',
    color: colors.drakBlack,
  },
  courtTypeMainContainer: {
    width: WP('90'),
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  courtTypeContainer: {
    width: WP('45'),
    backgroundColor: 'transparent',
    paddingVertical: WP('2'),
  },
  typeTextStyle: {
    paddingHorizontal: WP('2'),
    fontSize: size.xlarge,
    fontWeight: 'bold',
  },
  civilTextStyle: {
    paddingVertical: WP('1'),
    paddingHorizontal: WP('3'),
    backgroundColor: 'blue',
    alignSelf: 'flex-start',
    marginLeft: WP('2'),
    borderRadius: WP('5'),
    marginTop: WP('2'),
  },
  caseFilingDateStyle: {
    paddingVertical: WP('1'),
    paddingHorizontal: WP('3'),
    alignSelf: 'flex-start',
    marginLeft: WP('2'),
    borderRadius: WP('5'),
    marginTop: WP('2'),
  },
});
export default styles;
