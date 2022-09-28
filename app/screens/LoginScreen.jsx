import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reduxStore/actions';

const LoginScreen = () => {
  const dispatch=useDispatch()
  const [userName,setUserName] =useState('')
  const [password,setPassword] =useState('')
  // console.log(userName)
  // console.log(password)

  const handleLoginPress=()=>{
    dispatch(login(userName,password))
  }
  return (
    <View style={{padding:30}}>
      <CustomInput onChange={setUserName} placeholder='Email' textInputStyles={{borderWidth:1, borderColor:'red'}} />
      <CustomInput onChange={setPassword} placeholder='Password' textInputStyles={{borderWidth:1, borderColor:'red'}} />
      <Button title='Login' onPress={handleLoginPress}/>
    </View>
  )
}

export default LoginScreen;