import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, } from 'react-native'

const LoginScreen = ({navigation}) => {
    const [PhoneNo, setPhoneNo] = useState('0558691496')
    const [Pin, setPin] = useState('')

    const login =()=>{
        if(PhoneNo==='0558691496' && Pin==='12345'){
            navigation.navigate('Home')
        }else{
            alert('Invalid Pin or Phone number. Try Again')
        }
    }

    return (
        <View style={{flex:1}}>
            <ImageBackground source={require('../assets/covid.jpg')} style={styles.ImageBackground} >
                <View style={styles.darken}>
                    <Text style={styles.title}>COVERS</Text>
                    <Text style={{color:'white',fontSize:15, fontWeight:'bold'}}>(COVID-19 EMERGENCY RESPONSE SOLUTION)</Text>
                    <Text style={{color:'white'}}>
                        Join the effort by well meaning Africans using technology to slow down
                        and eventually halt the spread of  COVID-19. 
                    </Text>
                    <View style={{marginTop:20}}>
                        <TextInput style={styles.TextInput} placeholder='Phone Number'
                                    keyboardType={'numeric'} value={PhoneNo}
                                    onChangeText={(val)=>{setPhoneNo(val)}} />
                        <TextInput style={styles.TextInput} placeholder='Pin'
                                    secureTextEntry={true} 
                                    keyboardType={'numeric'} value={Pin}
                                    onChangeText={(val)=>{setPin(val)}}/>
                        <TouchableOpacity style={styles.button} onPress={login}>
                            <Text style={{color:'white'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    darken:{
        flex:1,
        backgroundColor:'rgba(0,0,0,.3)',
        paddingHorizontal:15,
        paddingVertical:80 
    },
    ImageBackground:{
        flex:1,
        resizeMode:'cover',
       
    },
    TextInput:{
        padding:8,
        backgroundColor:'white',
        marginBottom:10,
        borderRadius:3
        
    },
    button:{
        paddingVertical:12,
        backgroundColor:'grey',
        alignItems:'center',
        borderRadius:5
    }, 
    title:{
        color:'white',
        fontSize:60, 
        textAlign:'center',
        fontWeight:'bold',
    }
})
