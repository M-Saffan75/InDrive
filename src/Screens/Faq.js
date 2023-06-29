import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOURS } from './Theme'

const Faq = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.faq_name}>Faq</Text>
    </View>
  )
}

export default Faq

const styles = StyleSheet.create({

    faq_name : {
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