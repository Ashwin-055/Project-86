import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';

export default class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage: 'image_1',
      dropdownHeight: 40,
    };
  }

  render() {
    let preview_images = {
      image_1: require('../assets/image_1.jpg'),
      image_2: require('../assets/image_3.jpg'),
      image_3: require('../assets/image_6.jpg'),
      image_4: require('../assets/image_5.jpg'),
      image_5: require('../assets/image_7.jpg'),
    };
    console.log(this.state.previewImage);
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>New Post</Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <Image
            source={preview_images[this.state.previewImage]}
            style={styles.previewImage}></Image>
          <ScrollView>
            <View
              style={{
                height: RFValue(this.state.dropdownHeight),
                width: '95%',
                alignSelf: 'center',
                marginBottom: this.state.dropdownHeight == 170 ? 50 : 5,
              }}>
              <DropDownPicker
                items={[
                  { label: 'Image 1', value: 'image_1' },
                  { label: 'Image 2', value: 'image_2' },
                  { label: 'Image 3', value: 'image_3' },
                  { label: 'Image 4', value: 'image_4' },
                  { label: 'Image 5', value: 'image_5' },
                ]}
                defaultValue={this.state.previewImage}
                open={this.state.dropdownHeight == 170 ? true : false}
                onOpen={() => {
                  this.setState({ dropdownHeight: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight: 40 });
                }}
                style={{
                  backgroundColor:
                    this.state.dropdownHeight == 170
                      ? '#3953d5'
                      : 'transparent',
                  borderWidth: 1,
                  borderColor: 'white',
                }}
                textStyle={{
                  color: this.state.dropdownHeight == 170 ? 'black' : 'white',
                }}
                onSelectItem={(item) =>
                  this.setState({
                    previewImage: item.value,
                  })
                }
              />
            </View>

            <TextInput
              style={styles.inputFont}
              onChangeText={(title) => this.setState({ title })}
              placeholder={'Title'}
              placeholderTextColor="white"
            />

            <TextInput
              style={[
                styles.inputFont,
                styles.inputTextBig,
              ]}
              onChangeText={(caption) => this.setState({ caption })}
              placeholder={'Caption'}
              multiline={true}
              numberOfLines={4}
              placeholderTextColor="white"
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  inputFont: {
    height: RFValue(40),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
    width: '95%',
    marginTop: RFValue(10),
    alignSelf: 'center',
    justifyContent:'center'
  },
  inputTextBig: {
    padding: RFValue(5),
  },
});
