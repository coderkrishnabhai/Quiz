import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AppHader = () => {
  return (
    <View style={styles.hader}>
      <Text style={styles.hadertext}>Krishna</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  hader: {
    flex: 1,
    alignItems: "center"

  },
  hadertext: {
    fontSize: 30,
    color: "#0A79DF",
    fontWeight: "bold",
    marginTop: 10,
  }
})

export default AppHader