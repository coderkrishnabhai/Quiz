import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

const MyFriend = () => {
  return (
    <View>
      <View style={styles.MyFriend}>
        <Text style={styles.text}>MyFriend</Text>
      </View>
      <View style={{ margin: 10, }}>
        <Text style={styles.text1}>Childhood Friend</Text>
      </View>
      <ScrollView style={styles.allbox}>
        <View style={styles.box1}>
          <Image
            source={require('./assect/profit_7314637.png')}
            style={styles.image}
          >

          </Image>
          <Text>Box1</Text>
        </View>

        <View style={styles.box1}>
          <Image
            source={require('./assect/investor_10622774.png')}
            style={styles.image}
          >

          </Image>
          <Text>Box1</Text>
        </View>

        <View style={styles.box1}>
          <Image
            source={require('./assect/investor_10622774.png')}
            style={styles.image}
          >

          </Image>
          <Text>Box1</Text>
        </View>

        <View style={styles.box1}>
          <Image
            source={require('./assect/investor_10622774.png')}
            style={styles.image}
          >

          </Image>
          <Text>Box1</Text>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  MyFriend: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#E71C23",
    fontSize: 30,
    fontWeight: "bold"
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#30336B"
  },
  box1: {
    // flex:1,
    width: 150,
    height: 150,
    backgroundColor: "#ffffff",
    margin: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    // flexWrap:"wrap",
    // flexDirection:"colom"

  },
  image: {
    width: 100,
    height: 100,

  },
  allbox:{
    flex:1,
    flexWrap:"wrap",
    flexDirection:"colom"
  }
})

export default MyFriend