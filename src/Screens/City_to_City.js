import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOURS } from './Theme'

const City_to_City = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Request_name}>City_to_City</Text>
    </View>
  )
}

export default City_to_City

const styles = StyleSheet.create({
  
    Request_name : {
        color:COLOURS.black
    },
    container: { 
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLOURS.white,
    },
})