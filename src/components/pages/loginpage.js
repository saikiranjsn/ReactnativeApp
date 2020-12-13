import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TextInput, Dimensions, TouchableOpacity } from 'react-native';

export default class LoginPage extends Component {

  render(){
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3d5aff" barStyle="light-content"/>
      <View style={{flex:1,justifyContent:"center",backgroundColor:"#3d5aff"}}>
        <Text style={{color:"white",marginLeft:20,fontSize:20}}>Login</Text>
      </View>
      <View style={{flex:13,backgroundColor:"#fafafa",alignItems:"center"}}>
      <Image source={require('./images/logo.png')} style={{height:150,width:150}}></Image>
      <TextInput style={styles.inputBox} placeholder="Email" underlineColorAndroid="rgba(10,10,10,0.5)"></TextInput>
      <TextInput style={styles.inputBox} placeholder="Password" underlineColorAndroid="rgba(10,10,10,0.5)" secureTextEntry={true}></TextInput>
      <View style={{marginLeft:Dimensions.get('window').width-100,marginVertical:10}}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.LoginbuttonText}>Login</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.forgotpassword}>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate("PasswordChanger")}}>
        <Text style={{marginTop:10,color:"rgba(0,0,255,1)"}}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems:"center",justifyContent: "center",marginTop:20}}>
      <TouchableOpacity onPress={() => {this.props.navigation.navigate("SignUp")}} style={{padding:13,backgroundColor: "#3d5aff",width:Dimensions.get('window').width-20}}>
        <Text style={styles.LoginbuttonText}>Register Here</Text>
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
