import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOURS } from './Theme'

const City = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>City</Text>
    </View>
  )
}

export default City

const styles = StyleSheet.create({

    city : {
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