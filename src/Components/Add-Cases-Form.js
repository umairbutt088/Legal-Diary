import React, {useState} from 'react';
import Modal from 'react-native-modal';
import CustomTextInput from './TextInput';
import {Icon} from 'react-native-elements';
import {colors, size, WP} from '../utilities';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const GeneralForm = ({
  heading,
  CaseTitle,
  CourtName,
  CourtType,
  CaseNo,
  Behalf,
  Date,
}) => {
  // const [modalVisible, setModalVisible] = useState(false);

  // const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };
  // const [open, setOpen] = useState(true);
  // const [value, setValue] = useState(null);
  // const [judge, setJudge] = useState([
  //   {label: 'Apple', value: 'apple'},
  //   {label: 'Banana', value: 'banana'},
  // ]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContStyle}>
        <Text style={styles.headingTextStyle}>{heading}</Text>
      </View>
      <View style={styles.caseTitleTextMainCont}>
        <View style={styles.caseTitleTextContStyle}>
          <Text style={styles.caseTitleTextStyle}>{CaseTitle}</Text>
        </View>
        <CustomTextInput
          inputContStyle={styles.caseTitleInputContStyle}
          placeholder="Title"
        />
      </View>
      <View>
        {/* Court Name Code */}
        {/* <View style={styles.courtNameContainer}>
        <Text style={styles.caseTitleTextStyle}>{CourtName}</Text>
        <DropDownPicker
          zIndex={500}
          multiple={true}
          open={open}
          value={value}
          items={judge}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setJudge}
          containerStyle={{
            width: WP('42'),
            height: WP('8'),
            zIndex: 20,
          }}
          style={{height: WP('8'), borderColor: colors.lightGrey}}
        />
        <TouchableOpacity
          style={styles.plusSignContainer}
          onPress={toggleModal}>
          <Icon
            name="plus"
            type="material-community"
            style={{height: WP('6')}}
          />
        </TouchableOpacity>
      </View> */}
        {/* case Type Code*/}
        {/* <View style={styles.courtNameContainer}>
        <Text style={styles.caseTitleTextStyle}>{CourtType}</Text>
        <DropDownPicker
          zIndex={500}
          multiple={true}
          open={open}
          value={value}
          items={judge}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setJudge}
          containerStyle={{
            width: WP('42'),
            height: WP('8'),
            zIndex: 10,
          }}
          style={{height: WP('8'), borderColor: colors.lightGrey}}
        />
        <TouchableOpacity
          style={styles.plusSignContainer}
          onPress={toggleModal}>
          <Icon
            name="plus"
            type="material-community"
            style={{height: WP('6')}}
          />
        </TouchableOpacity>
      </View> */}
        {/* <Modal isVisible={isModalVisible}>
        <View
          style={{
            height: WP('50'),
            width: WP('70'),
            backgroundColor: colors.white,
            alignSelf: 'center',
            borderRadius: WP('5'),
          }}>
          <View style={styles.modalTitleContStyle}>
            <Text style={styles.caseTitleTextStyle}>Court Name</Text>
            <Text style={[styles.caseTitleTextStyle, {fontWeight: 'normal'}]}>
              Enter a Court Name
            </Text>
          </View>
          <View>
            <CustomTextInput
              inputContStyle={styles.caseTitleInputContStyle}
              placeholder="Title"
            />
          </View>
          <View style={styles.modalButtonsContStyle}>
            <TouchableOpacity
              style={styles.cancellButtonContStyle}
              onPress={toggleModal}>
              <Text style={styles.caseTitleTextStyle}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addButtonContStyle}
              onPress={toggleModal}>
              <Text style={styles.caseTitleTextStyle}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
      </View>
      <View style={styles.caseTitleTextMainCont}>
        <View style={styles.caseTitleTextContStyle}>
          <Text style={styles.caseTitleTextStyle}>{CourtName}</Text>
        </View>
        <CustomTextInput
          inputContStyle={styles.caseTitleInputContStyle}
          placeholder="Court Name"
        />
      </View>
      <View style={styles.caseTitleTextMainCont}>
        <View style={styles.caseTitleTextContStyle}>
          <Text style={styles.caseTitleTextStyle}>{CourtType}</Text>
        </View>
        <CustomTextInput
          inputContStyle={styles.caseTitleInputContStyle}
          placeholder="Court Type"
        />
      </View>
      <View style={styles.caseTitleTextMainCont}>
        <View style={styles.caseTitleTextContStyle}>
          <Text style={styles.caseTitleTextStyle}>{CaseNo}</Text>
        </View>
        <CustomTextInput
          inputContStyle={styles.caseTitleInputContStyle}
          placeholder="Case No"
        />
      </View>
      <View style={styles.caseTitleTextMainCont}>
        <View style={styles.caseTitleTextContStyle}>
          <Text style={styles.caseTitleTextStyle}>{Behalf}</Text>
        </View>
        <CustomTextInput
          inputContStyle={styles.caseTitleInputContStyle}
          placeholder="Client Name"
        />
      </View>
      <View style={styles.caseTitleTextMainCont}>
        <View style={styles.caseTitleTextContStyle}>
          <Text style={styles.caseTitleTextStyle}>{Date}</Text>
        </View>
        <CustomTextInput
          inputContStyle={styles.caseFillingDate}
          placeholder="Filing Date"
        />
        <TouchableOpacity style={styles.calenderIconContainer}>
          <Icon name="calendar-month-outline" type="material-community" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GeneralForm;

const styles = StyleSheet.create({
  mainContainer: {
    // height: WP('70'),
    width: WP('90'),
    borderWidth: WP('0.5'),
    borderColor: colors.darkGrey,
    borderRadius: WP('2'),
    backgroundColor: '#EDEFF1',
    marginTop: WP('5'),
    paddingBottom: WP('5'),
  },
  headingContStyle: {
    height: WP('8'),
    width: WP('30'),
    backgroundColor: colors.darkGrey,
    marginTop: WP('-4'),
    marginLeft: WP('5'),
    justifyContent: 'center',
    marginBottom: WP('2'),
  },
  headingTextStyle: {
    fontSize: size.large,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    // fontFamily: 'Roboto-Black',
  },
  caseTitleTextMainCont: {
    height: WP('10'),
    width: WP('90'),
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: WP('5'),
  },
  caseTitleTextContStyle: {
    height: WP('10'),
    width: WP('25'),
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  caseTitleInputContStyle: {
    width: WP('53'),
    height: WP('7'),
    paddingVertical: 0,
    borderRadius: 1,
    marginTop: WP('-2'),
  },
  caseTitleTextStyle: {fontSize: size.small, color: '#000', fontWeight: 'bold'},
  caseFillingDate: {
    width: WP('40'),
    height: WP('7'),
    paddingVertical: 0,
    borderRadius: 1,
    marginTop: WP('-2'),
  },
  calenderIconContainer: {
    width: WP('10'),
    height: WP('7'),
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // // courtNameContainer: {
  // //   height: WP('10'),
  // //   width: WP('90'),
  // //   backgroundColor: 'transparent',
  // //   alignItems: 'center',
  // //   flexDirection: 'row',
  // //   justifyContent: 'space-between',
  // //   paddingHorizontal: WP('5'),
  // // },
  // // plusSignContainer: {
  // //   height: WP('8'),
  // //   width: WP('8'),
  // //   borderRadius: WP('50'),
  // //   alignItems: 'center',
  // //   justifyContent: 'center',
  // // },
  // // // Modal Style //
  // // modalTitleContStyle: {
  // //   padding: WP('5'),
  // //   alignItems: 'center',
  // //   justifyContent: 'center',
  // //   backgroundColor: 'transparent',
  // //   overflow: 'hidden',
  // //   // borderTopLeftRadius: WP('5'),
  // //   // borderTopRightRadius: WP('5'),
  // // },
  // modalButtonsContStyle: {
  //   height: WP('12'),
  //   width: WP('70'),
  //   alignSelf: 'baseline',
  //   backgroundColor: 'transparent',
  //   marginTop: WP('6'),
  //   flexDirection: 'row',
  //   borderBottomLeftRadius: WP('5'),
  //   borderBottomRightRadius: WP('5'),
  //   borderTopWidth: WP('0.2'),
  //   borderTopColor: colors.lightGrey,
  // },
  // cancellButtonContStyle: {
  //   width: WP('35'),
  //   backgroundColor: 'transparent',
  //   height: WP('12'),
  //   borderBottomLeftRadius: WP('5'),
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRightWidth: WP('0.2'),
  //   borderRightColor: colors.lightGrey,
  // },
  // addButtonContStyle: {
  //   width: WP('35'),
  //   backgroundColor: 'transparent',
  //   height: WP('12'),
  //   borderBottomRightRadius: WP('5'),
  //   borderLeftWidth: WP('0.2'),
  //   borderLeftColor: colors.lightGrey,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
