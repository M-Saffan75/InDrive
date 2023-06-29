import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOURS } from './Theme'

const Support = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.support_name}>Support</Text>
    </View>
  )
}

export default Support

const styles = StyleSheet.create({

    support_name: { 
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