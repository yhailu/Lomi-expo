import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';

import { MonoText } from '../components/StyledText';


export default class Profile extends Component {
  _onPressButton(){
    Alert.alert('Edit profile logic will be handled through spring-boot')
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Tigist Hailu</Text>
              <Text style={styles.info}>Public Health Ambassador / Manager at CHOP</Text>
              <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
                <MonoText style={styles.codeHighlightText}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</MonoText>
              </View>
              <Button
                onPress={this._onPressButton}
                title="Edit Profile"
              />

            </View>
        </View>
      </View>
    );
  }
}





const styles = StyleSheet.create({
  name:{
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    },
  header:{
    backgroundColor: 'steelblue',
    height:200,
  },

  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },

  avatar: {
    flexDirection:'row',
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  body:{
    marginTop:60,
  },
  bodyContent: {
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    marginTop:10
  },
  description:{
    fontSize:16,
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
});
