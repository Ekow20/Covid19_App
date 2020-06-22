import React, {useState} from 'react'
import { StyleSheet, Text, View, CheckBox, TextInput, TouchableOpacity,Image } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import modalStyles from './modalStyles'
import CountryModal from '../modals/countryModal'

const Profile = ({setOpenProfile}) => {
    const [Male, setMale] = useState(true)
    const [Female, setFemale] = useState(false)
    const [CountryList, setCountryList] = useState(false)
    const setGender=()=>{
        if(Male===true && Female===false){
            setFemale(true)
            setMale(false)
        }else{
            setFemale(false)
            setMale(true)
        }
    }
    return (
        <View style={modalStyles.container}>
            <View style={modalStyles.header}>
                <Text style={{fontSize:25, fontWeight:'bold'}} >Profile</Text>
                <Ionicons name='ios-close' size={35} onPress={()=>{setOpenProfile(false)}}/>
            </View>

            <View style={{flex:10, }}>
                <Text style={modalStyles.textBold}>Personal Details</Text>
                <Text>Enter Age</Text>
                <TextInput style={modalStyles.TextInput} />

                <View style={{flexDirection:'row', }}>
                    <View style={modalStyles.checkboxContainer}>
                        <CheckBox value={Male} onValueChange={setGender}/>
                        <Text>Male</Text>
                    </View>
                    <View style={modalStyles.checkboxContainer}>
                        <CheckBox value={Female} onValueChange={setGender} />
                        <Text>Female</Text>
                    </View>                    
                </View>
               

                <View>
                    <Text style={modalStyles.textBold}>Travelling history</Text>
                    <Text>Select the last country you visited(if Applicable)</Text>
                </View>
                
                <TouchableOpacity onPress={()=>{setCountryList(true)}} style={styles.ImageSection}>     
                    <Image source={require('../../assets/test.jpg')} style={styles.Image} />
                    <Text >Ghana</Text>
                    <CountryModal CountryList={CountryList} setCountryList={setCountryList} />                   
                </TouchableOpacity>
               

                <View>
                    <Text style={modalStyles.textBold}>Medical Professional information</Text>
                    <Text>Applicable if you are a health worker</Text>
                </View>

                <Text>Health License Number</Text>
                <TextInput style={modalStyles.TextInput}/>
                <TouchableOpacity style={modalStyles.button}>
                    <Text>Update Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    Image:{
        width:25,
        height:18,
        paddingHorizontal:10,
        
    },
    ImageSection:{ 
        padding:15,
        borderColor:'rgb(218, 218, 218)',
        borderWidth:0.5,
        width:100,
        alignItems:'center',
        borderRadius:10,
        marginBottom:15,
        marginTop:10
    }
   
})
