import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOURS } from './Theme'

const Safety = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.safety_name}>Safety</Text>
    </View>
  )
}

export default Safety

const styles = StyleSheet.create({

    safety_name : {
        color:COLOURS.black,
    },

    container: { 
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLOURS.white,
    },
})