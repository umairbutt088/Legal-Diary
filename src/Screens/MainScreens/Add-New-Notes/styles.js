import {WP, size, colors} from '../../../utilities';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center'},
  inPutmainContainer: {
    width: WP('95%'),
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  titleTextContainer: {
    height: WP('12'),
    backgroundColor: 'transparent',
  },
  titleTextStyle: {
    fontSize: size.h1,
    fontWeight: 'bold',
    marginTop: WP('5'),
    textAlign: 'center',
    color: colors.drakBlack,
  },
  textInputStyle: {
    width: WP('80'),
    height: WP('105'),
    paddingTop: WP('3'),
    fontSize: size.large,
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
    height: WP('12'),
    width: WP('20'),
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
