import { View,Image, Text, KeyboardAvoidingView ,TextInput, Pressable, ActivityIndicator } from 'react-native'
import React,{useState} from 'react';
import signinStyle from './SigninStyle';
import CloudLogo from '../../assets/Images/CloudLogo.png';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../UI/Button';
import { supabase } from '../../supabase';

export default function SignupScreen({navigation}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [Confpass, setConfPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

  const signUpUser = async ()=>{
    
    setLoading(true);

    if(name==='',email===''|| pass==='', Confpass===''){
      setError("Input can't be empty");
      setLoading(false);
      return;
    }

    if(pass!==Confpass){
      setError("Input can't be empty");
      setLoading(false);
      setConfPass('');
      return;
    }

    try{
      const {user, error} = await supabase.auth.signUp({
      name:name,
      email:email,
      password:pass
    });
   
    if(error){
      throw error;
    }

    // const userData = {
    //   name: name,
    //   email: email,
      // location: userLocation,
      // Add more fields as needed
    // };

    const { data, err } = await supabase
      .from('profile')
      .insert({ 
        username: name,
        email: email,
      });
    
      if (err) {
        throw error;
      }

    if(data.user.role == 'authenticated'){
        setLoading(false);
        setName('');
        setEmail('');
        setPass('');
        setConfPass('');
      navigation.navigate("Thankyou",{type:'signup'});
     
    }}
    catch(error){
      setError(error.message);
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView style={signinStyle.signinView}>

          <View style={signinStyle.CloudLogo}>
            <Image source={CloudLogo} style={{width:'100%', height:'100%'}} />
          </View>
  
          {error!=='' ? 
         <Text style={{color:'red', fontSize:16, fontFamily:'PoppinsMedium', marginHorizontal:20}}>{error}</Text>:
          
          <Text style={signinStyle.signinHeading}>
            {loading ? 
            <ActivityIndicator color='#000' size={32} />:
            'Welcome!'}</Text>}

          
        <View style={signinStyle.inputView}>
            <TextInput 
            style={signinStyle.input}
            placeholder='Full Name'
            value={name}
            onChangeText={(text)=>setName(text)}
            
            />

            <TextInput 
            style={signinStyle.input}
            placeholder='Email'
            value={email}
            onChangeText={(text)=>setEmail(text)}
            
            />
         
            <View style={signinStyle.passView}>
                
            <TextInput 
            style={signinStyle.input}
            placeholder='Password'
            value={pass}
            onChangeText={(text)=>setPass(text)}
            secureTextEntry={!showPassword}
            />
       
            <Pressable style={signinStyle.eye} onPress={()=>setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? "eye":"eye-off"} size={24} color="black" />
            </Pressable>

            </View>

            <View style={signinStyle.passView}>
                
            <TextInput 
            style={signinStyle.input}
            placeholder='Confirm Password'
            value={Confpass}
            onChangeText={(text)=>setConfPass(text)}
            secureTextEntry={!showPassword}
            />
       
            <Pressable style={signinStyle.eye} onPress={()=>setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? "eye":"eye-off"} size={24} color="black" />
            </Pressable>

            </View>

        </View>

  
       <Button onPress={signUpUser}>Signup</Button>



<View style={signinStyle.dontAccount}>
    <Text style={signinStyle.text}>Do not have an account?</Text>
    <Pressable style={signinStyle.swichBtn} onPress={()=>navigation.navigate("Signin")}>
        <Text style={signinStyle.text}>Signup</Text>
    </Pressable>
</View>

<Text></Text>
  <Text style={signinStyle.signinHeading}> ClicknBuy</Text>
   

    </KeyboardAvoidingView>
  )
}