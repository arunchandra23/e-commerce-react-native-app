import { View, Text, Button } from 'react-native'
import React from 'react'
import AndroidSafeAreaView from '../utils/AndroidSafeAreaView';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Logout } from '../reduxStore/actions';

const ProfileScreen = ({navigation,Logout}) => {
  const handleLogoutPress=()=>{
    Logout()
  }
  return (
    <AndroidSafeAreaView>
      <Text>ProfileScreen</Text>

      <Button title='Logout' onPress={handleLogoutPress} />
    </AndroidSafeAreaView>
  )
}
const mapStatesToProps=(state)=>{
  return {token:state.token}
}
export default connect(mapStatesToProps,{Logout})(ProfileScreen);