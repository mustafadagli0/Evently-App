import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from './firebaseConfig';
import Loading from './src/components/Loading';

import { 
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  Image
 } from 'react-native';
 




export default function App() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");    
    const [isloading, setIsLoading] = useState("");

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => { console.log("Login successful");
                setIsLoading(true);

             })
            .catch((error) => { console.error("Login failed", error); });
    };









  return (
   
     
          <KeyboardAvoidingView
   
    style={{ flex: 1 }}> 

        <View style={styles.container}>
          <Image
          style={{width:100,height:100,marginTop:-100, marginBottom:20}}
          source={require('./assets/user-interface_2609282.png')}
          />




            <Text style={{color:'black'}}>Email</Text>
            <TextInput
            style={styles.textInput}
            onChangeText={(email) => {setEmail(email)}}
            value={email}
            autoCapitalize='none'
              placeholder="Enter your Name"
              keyboardType='default'
              />
              <Text style={{color:'black'}}>Password</Text>
              <TextInput
              style={styles.textInput}
              onChangeText={(password) => setPassword(password)}
              value={password}
              autoCapitalize='none'
              placeholder="Enter your Email"
              keyboardType='default'
              />
             

            <Pressable style={({pressed}) => [{
              backgroundColor: pressed ? "white" : "blueviolet",
              
            },styles.Button]}
            onPress={()=>{
              console.log(email);
              console.log(password);
              handleLogin();
               
            }}
            >
              <Text style={styles.textButton}>LOGİN</Text>
            </Pressable>
           {isloading ? <Loading style={{position:'absolute'}}/> : null}




          </View>      
    </KeyboardAvoidingView>

    
      
    
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  Button:{
    marginTop:20,
    borderWidth:2,
    borderColor:'white',
    width:200,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
  },
  textButton:{
    color:'white',
    fontSize:20,
  } 
   

});
