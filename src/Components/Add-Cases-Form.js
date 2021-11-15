import React, {useState} from 'react';
import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import {colors, size, WP} from '../utilities';
import CustomTextInput from './TextInput';
import DropDownPicker from 'react-native-dropdown-picker';
import {Icon} from 'react-native-elements';

const GeneralForm = ({heading, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContStyle}>
        <Text style={styles.headingTextStyle}>{heading}</Text>
      </View>
      <View style={styles.caseTitleTextMainCont}>
        <Text style={{fontSize: size.small, color: '#000', fontWeight: 'bold'}}>
          Case Title :
        </Text>
        <CustomTextInput
          inputContStyle={{
            width: WP('55'),
            height: WP('7'),
            paddingVertical: 0,
            borderRadius: 1,
            marginTop: WP('-2'),
          }}
          placeholder="Title"
        />
      </View>
      <View style={styles.courtNameContainer}>
        <Text style={{fontSize: size.small, color: '#000', fontWeight: 'bold'}}>
          Case Title :
        </Text>
        <DropDownPicker
          zIndex={500}
          multiple={true}
          // disableBorderRadius={true}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          containerStyle={{
            width: WP('42'),
            height: WP('8'),
          }}
          style={{height: WP('8'), borderColor: colors.lightGrey}}
        />
        <TouchableOpacity
          style={styles.plusSignContainer}
          onPress={() => setModalVisible(true)}>
          <Icon
            name="plus"
            type="material-community"
            style={{height: WP('6')}}
          />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        // setModalVisible={!modalVisible}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            height: WP('100'),
            width: WP('50'),
            backgroundColor: 'red',
            alignSelf: 'center',
            marginTop: WP('60'),
          }}>
          <TouchableOpacity
            style={{
              height: WP('10'),
              width: WP('30'),
              backgroundColor: 'green',
            }}
            onPress={() => setModalVisible(false)}></TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default GeneralForm;

const styles = StyleSheet.create({
  mainContainer: {
    height: WP('70'),
    width: WP('90'),
    borderWidth: WP('0.5'),
    borderColor: colors.darkGrey,
    borderRadius: WP('2'),
    backgroundColor: '#EDEFF1',
    marginTop: WP('5'),
  },
  headingContStyle: {
    height: WP('8'),
    width: WP('30'),
    backgroundColor: colors.darkGrey,
    marginTop: WP('-4'),
    marginLeft: WP('5'),
    justifyContent: 'center',
  },
  headingTextStyle: {
    fontSize: size.large,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
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
  courtNameContainer: {
    height: WP('10'),
    width: WP('90'),
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: WP('5'),
  },
  plusSignContainer: {
    height: WP('8'),
    width: WP('8'),
    borderRadius: WP('50'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
