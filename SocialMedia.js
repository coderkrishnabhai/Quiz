import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const SocialMedia = () => {
  return (
    <View>
      <View>
        <Text style={styles.socialtext}>My Social Media</Text>
      </View>
      
      <ScrollView horizontal>
      <View style={styles.insta}>
        <Text style={{color:"#AE1438" , marginTop:5}}>Insta i'd </Text>
        <Text style={{color:"#2B2B52" , alignItems:"center" , justifyContent:"center"}}>krish_the_coder</Text>

      </View>
      <View style={[styles.insta,{backgroundColor:"#25CCF7"}] }>
        <Text style={{color:"#AE1438" , marginTop:5}}>Twitter</Text>
        <Text style={{color:"#E74292" , alignItems:"center" , justifyContent:"center"}}>DevKrishAndroid</Text>

      </View>
      <View style={[styles.insta ,{backgroundColor:"#DFAF2B"}]}>
        <Text style={{color:"#2F363F" , marginTop:5}}>Youtube</Text>
        <Text style={{color:"#2B2B52" , alignItems:"center" , justifyContent:"center"}}>Sikho_Trading</Text>

      </View>
      <View style={styles.insta}>
        <Text style={{color:"#2F363F" , marginTop:5}}>FaceBook</Text>
        <Text style={{color:"#2B2B52" , alignItems:"center" , justifyContent:"center"}}>Krishna Mandal</Text>

      </View>
      
      </ScrollView>
      
    </View>
  )
}
const styles = StyleSheet.create({
    socialtext:{
        fontSize:20,
        marginHorizontal:10,     
        color:"#E74292",
        fontWeight:"600"
    },
    insta:{
        width:150,
        height:80,
       backgroundColor:"#01CBC6",
       margin:10,
       borderRadius:8,
       alignItems:"center",
       justifyContent:"center"
        
    }
})

export default SocialMedia