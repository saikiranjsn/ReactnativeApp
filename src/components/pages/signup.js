import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class SignUp extends Component {
  render(){
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3d5aff" barStyle="light-content"/>
      <View style={{flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",backgroundColor:"#3d5aff"}}>
        <Ionicons style={{marginLeft:10}} name="arrow-back" size={24} color="white" onPress={() => {this.props.navigation.navigate("LoginPage")}}/>
        <Text style={{color:"white",marginLeft:20,fontSize:20}}>User Registration</Text>
      </View>
      <View style={{flex:13,backgroundColor:"#fafafa",alignItems:"center"}}>
      <Image source={require('./images/logo.png')} style={{height:150,width:150}}></Image>
      <TextInput style={styles.inputBox} placeholder="Name" underlineColorAndroid="rgba(10,10,10,0.5)"></TextInput>
      <TextInput style={styles.inputBox} placeholder="Email" underlineColorAndroid="rgba(10,10,10,0.5)"></TextInput>
      <TextInput style={styles.inputBox} placeholder="Password" underlineColorAndroid="rgba(10,10,10,0.5)" secureTextEntry={true}></TextInput>
      <View style={{marginLeft:Dimensions.get('window').width-100,marginVertical:10}}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.LoginbuttonText}>Register</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  inputBox: {
    width:Dimensions.get('window').width-20,
    padding: 10,
    fontSize:20,
    marginVertical:10
  },
  LoginbuttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: "#ffffff",
    textAlign: "center",

  },
  button: {
    padding:10,
    backgroundColor: "#3d5aff",
    
  },
  forgotpassword: {
    alignItems:"center",
    justifyContent: "center"
  }

});
