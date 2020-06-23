import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, CheckBox,
         TextInput, TouchableOpacity,Image, ScrollView } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import modalStyles from './modalStyles'
import CountryModal from '../modals/countryModal'
import {request} from 'graphql-request'

const Profile = ({setOpenProfile}) => {
    const [Male, setMale] = useState(true)
    const [Female, setFemale] = useState(false)
    const [CountryVisited, setCountryVisited] = useState("Ghana")
    const [Age, setAge] = useState('')
    const [HealthLicense, setHealthLicense] = useState('')

    const [CountryOptions, setCountryOptions] = useState(false)
    const [Flag, setFlag] = useState('')
    const setGender=()=>{
        if(Male===true && Female===false){
            setFemale(true)
            setMale(false)
        }else{
            setFemale(false)
            setMale(true)
        }
    }
    const query=`{
        country(name:"${CountryVisited}"){
    		countryInfo{
          flag
        }     
    }
    }`

    useEffect(() => {
        request('https://covid19-graphql.netlify.app/', query)
        .then((data)=>{
            console.log(data)
            setFlag(data.country.countryInfo.flag)
        })
        .catch((err)=>{console.log(err)})
    }, [CountryVisited])

    const updateProfile=()=>{
        alert("Update Successful")
        setOpenProfile(false)
    }

    return (
        <View style={modalStyles.container}>
            <View style={modalStyles.header}>
                <Text style={{fontSize:25, fontWeight:'bold'}} >Profile</Text>
                <Ionicons name='ios-close' size={35} onPress={()=>{setOpenProfile(false)}}/>
            </View>
            
            <View style={{flex:10, }}>
                <ScrollView >
                <Text style={modalStyles.textBold}>Personal Details</Text>
                <Text>Enter Age</Text>
                <TextInput style={modalStyles.TextInput} 
                           keyboardType={'number-pad'}
                           value={Age}
                           onChangeText={(val)=>setAge(val) } />

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
                
                <TouchableOpacity onPress={()=>{setCountryOptions(true)}} style={styles.ImageSection}>     
                    <Image source={{uri:Flag}}  style={styles.Image} />
                    <Text style={{textAlign:'center'}} >{CountryVisited}</Text>
                    <CountryModal CountryOptions={CountryOptions} 
                                  setCountryOptions={setCountryOptions}
                                  setCountryVisited={setCountryVisited}
                                 />                   
                </TouchableOpacity>
               

                <View>
                    <Text style={modalStyles.textBold}>Medical Professional information</Text>
                    <Text>Applicable if you are a health worker</Text>
                </View>

                <Text>Health License Number</Text>
                <TextInput style={modalStyles.TextInput} keyboardType={'number-pad'}/>
                <TouchableOpacity style={modalStyles.button} onPress={updateProfile}>
                    <Text>Update Profile</Text>
                </TouchableOpacity>
                </ScrollView>
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
        padding:17,
        borderColor:'rgb(218, 218, 218)',
        borderWidth:0.5,
        alignSelf:'flex-start',
        alignItems:'center',
        borderRadius:10,
        marginBottom:15,
        marginTop:10
    }
   
})
