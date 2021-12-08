import {WP, size, colors} from '../../../utilities';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center'},
  inPutmainContainer: {
    height: WP('40'),
    width: WP('95%'),
    marginTop: WP('5'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WP('5'),
    borderBottomWidth: WP('0.1'),
    backgroundColor: 'transparent',
    borderBottomColor: colors.lightGrey,
    justifyContent: 'space-between',
  },
  titleTextContainer: {
    height: WP('35'),
    width: WP('30'),
    backgroundColor: 'transparent',
  },
  titleTextStyle: {
    fontWeight: 'bold',
    marginTop: WP('5'),
    textAlign: 'center',
    fontSize: size.large,
    color: colors.drakBlack,
  },
  textInputStyle: {
    height: WP('35'),
    width: WP('50'),
    paddingTop: WP('3'),
    fontSize: size.large,
  },
  calenderMainContainer: {
    width: WP('95%'),
    paddingTop: WP('2'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: WP('4'),
    paddingHorizontal: WP('5'),
    borderBottomWidth: WP('0.1'),
    backgroundColor: 'transparent',
    borderBottomColor: colors.lightGrey,
  },
  calenderTextContainer: {
    height: WP('12'),
    width: WP('29'),
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  calenderTextStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: size.large,
    color: colors.drakBlack,
  },
  bottomButtonContainer: {
    width: WP('95%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: WP('5'),
    paddingHorizontal: WP('20'),
    borderBottomWidth: WP('0.1'),
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    borderBottomColor: colors.lightGrey,
  },
  calenderButton: {
    width: WP('20'),
    height: WP('12'),
    marginLeft: WP('5'),
    paddingLeft: WP('10'),
    borderRadius: WP('2'),
    backgroundColor: 'black',
  },
  saveButtonStyle: {
    height: WP('12'),
    borderRadius: WP('2'),
    backgroundColor: 'black',
    paddingHorizontal: WP('5'),
  },
  cancelButtonStyle: {
    height: WP('12'),
    borderRadius: WP('2'),
    backgroundColor: 'black',
    paddingHorizontal: WP('5'),
  },
});

export default styles;
