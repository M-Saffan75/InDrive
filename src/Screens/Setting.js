import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOURS } from './Theme'

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.setting_name}>Setting</Text>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({

    setting_name : {
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