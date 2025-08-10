import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator color={'white'} size={'large'} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'absolute',
        backgroundColor:'tomato',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontWeight:'bold',
        fontSize:16,
        color:'white',
        marginTop:10,
    }



})