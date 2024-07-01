import { View, Text ,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AppHader from './components/AppHader'
import SocialMedia from './components/SocialMedia'
import MyFriend from './components/MyFriend'



const App = () => {
  return (
    <View >
      <ScrollView>
        <AppHader></AppHader>
        <SocialMedia></SocialMedia>
        <MyFriend></MyFriend>
      </ScrollView>
   
    </View>
  )
}
// const styles = StyleSheet.create({
//   background:{
//     backgroundColor:"#8395A7"
//   }

// })



export default App
