import { View, Text } from 'react-native'
import React from 'react'
import AndroidSafeAreaView from '../utils/AndroidSafeAreaView';

const ProfileScreen = ({navigation}) => {
  return (
    <AndroidSafeAreaView>
      <Text>ProfileScreen</Text>
    </AndroidSafeAreaView>
  )
}

export default ProfileScreen;