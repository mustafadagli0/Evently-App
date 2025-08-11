import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebaseConfig';
import Loading from '../components/Loading';
import SignUpPage from './SignUpPage';
import { useNavigation } from '@react-navigation/native';


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
 




 const LoginPage = () => {

    

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");    
    const [isloading, setIsLoading] = useState("");
    const navigation = useNavigation();

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
          source={require('../../assets/user-interface_2609282.png')}
          />




            <Text style={{color:'black'}}>Email</Text>
            <TextInput
            style={styles.textInput}
            onChangeText={(email) => {setEmail(email)}}
            value={email}
            autoCapitalize='none'
              placeholder="Enter your Email"
              keyboardType='default'
              />
              <Text style={{color:'black'}}>Password</Text>
              <TextInput
              style={styles.textInput}
              onChangeText={(password) => setPassword(password)}
              value={password}
              autoCapitalize='none'
              placeholder="Enter your Password"
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
            <Pressable style={({pressed}) => [{
              backgroundColor: pressed ? "white" : "blueviolet",
              
            },styles.Button]}
            onPress={()=>{
              navigation.navigate('SignUp');
            }}
            >
            <Text style={styles.textButton}>Sign Up</Text>
            </Pressable>
           {isloading ? <Loading style={{position:'absolute'}}/> : null}

            



          </View>      
    </KeyboardAvoidingView>

    
      
    
 
  );
}

export default LoginPage;

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
    height: 40,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  Button:{
    marginTop:10,
    borderWidth:2,
    borderColor:'white',
    width:'35%',
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
  },
  textButton:{
    color:'white',
    fontSize:18,
  } 
   

});
