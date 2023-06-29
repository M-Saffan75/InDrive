import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOURS } from './Theme'

const Request_History = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Request_History_name}>Request_History</Text>
    </View>
  )
}

export default Request_History

const styles = StyleSheet.create({

    Request_History_name: { 
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