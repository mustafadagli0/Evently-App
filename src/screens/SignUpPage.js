import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { KeyboardAvoidingView, TextInput, Pressable } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Loading from '../components/Loading';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore"; 



const SignUpPage = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");    
  const [isloading, setIsLoading] = useState("");
  const navigation = useNavigation();
  const [name,setName]=useState("");
  const [gender, setGender] = useState('');
  const db = getFirestore(app);
  const auth = getAuth();

// Inside your onPress:


  return (
    
          <KeyboardAvoidingView
   
    style={{ flex: 1 }}> 

        <View style={styles.container}>
             <Text style={{color:'black'}}>Name</Text>
            <TextInput
            style={styles.textInput}
            onChangeText={(name) => {setName(name)}}
            value={name}
            autoCapitalize='none'
              placeholder="Enter your name"
              keyboardType='default'
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
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>

            <Pressable style={({pressed}) => [{
              backgroundColor: pressed ? "white" : "blueviolet",
              
            },styles.signUpButton]}
            onPress={() => {
              setIsLoading(false);
               createUserWithEmailAndPassword(auth, email, password)
              .then(async (userCredential) => {
                setIsLoading(true);
                const user = userCredential.user;
                console.log("User signed up:", user.uid);

                // Firestore'a kullanıcı bilgilerini kaydet
                await setDoc(doc(db, "users", user.uid), {
                  name: name,
                  email: email,
                  gender: gender,
                  createdAt: new Date()
                });

                // Kayıt başarılı, isLoading false yapabilir veya başka işlem yapabilirsin
                
              })
              .catch((error) => {
                alert(error.message);
                setIsLoading(false);
              });
            }}
            >
            <Text style={styles.textButton}>Sign Up</Text>
            </Pressable>
           {isloading ? <Loading style={{position:'absolute'}}/> : null}
          </View>      
    </KeyboardAvoidingView>
  )
}

export default SignUpPage;

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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    marginTop:'-30',
    height: 50,
    width: 200,
  },

  signUpButton:{
    marginTop:150,
    marginBottom:40,
    borderWidth:2,
    borderColor:'white',
    width:'50%',
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
  },
  textButton:{
    color:'white',
    fontSize:18,
  } 
})