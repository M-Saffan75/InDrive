import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOURS } from './Theme'

const Edit_Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Edit_Profile_name}>Edit_Profile</Text>
    </View>
  )
}

export default Edit_Profile

const styles = StyleSheet.create({

    Edit_Profile_name: { 
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