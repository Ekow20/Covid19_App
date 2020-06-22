import React, {useState} from 'react'
import { StyleSheet, Text, View, CheckBox, TextInput, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import modalStyles from './modalStyles'

const MakeReport = ({setModalOpen, setReports}) => {
    const [Self, setSelf] = useState(true)
    const [Other, setOther] = useState(false)
    const [Location, setLocation] = useState('')
    const [Landmark, setLandmark] = useState('')
    const [Contact, setContact] = useState('')
    const [Description, setDescription] = useState('')
    const getDate=()=>{
        const date = new Date().getDate()
        const month = new Date().getMonth()+1
        const year = new Date().getFullYear()
        return(date+'/'+month+'/'+year)
    }
    
    const setStatus=()=>{
        if(Self===true && Other===false){
            setOther(true)
            setSelf(false)
        }else{
            setOther(false)
            setSelf(true)
        }
    }

    const submitReport = ()=>{
        setReports((prevReports)=>{
            return(
            [
                {Status:Self===true?'Self':'Other', Description:Description, Contact:Contact,
                 Date:getDate(), Location:Location, Landmark:Landmark},
                 ...prevReports
            ]
        )
         })
         setModalOpen(false)
    }

    return (
        <View style={modalStyles.container}>
            <View style={modalStyles.header}>
                <Text style={{fontSize:25, fontWeight:'bold'}} >Make Report</Text>
                <Ionicons name='ios-close' size={35} onPress={()=>{setModalOpen(false)}} />
            </View>

            <View style={{flex:10, }}>
                <Text style={modalStyles.textBold}>Who are you reporting</Text>
                <View style={{flexDirection:'row',  }}>
                    <View style={modalStyles.checkboxContainer}>
                        <CheckBox value={Self} onValueChange={setStatus}/>
                        <Text>Self</Text>
                    </View>
                    <View style={modalStyles.checkboxContainer}>
                        <CheckBox value={Other} onValueChange={setStatus} />
                        <Text>Other Individual</Text>
                    </View>                    
                </View>

                <Text style={modalStyles.textBold}>Location or Digital Address</Text>
                <TextInput style={modalStyles.TextInput}
                            onChangeText={(val)=>{setLocation(val)}}
                            placeholder='eg.GA-492-74'/>

                <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
                    <View style={{flex:5.5}}>
                        <Text style={modalStyles.textBold}>Nearest Landmark</Text>
                        <TextInput style={modalStyles.TextInput} 
                                    onChangeText={(val)=>{setLandmark(val)}}
                                    placeholder='eg.Goil Fuel Station'/>
                    </View>
                    <View style={{flex:0.5}}></View>
                    <View style={{flex:4}}>
                        <Text style={modalStyles.textBold}>Alternate Contact</Text>
                        <TextInput style={modalStyles.TextInput}
                                    placeholder='Contact Number'
                                    onChangeText={(val)=>{setContact(val)}}
                                    keyboardType={'numeric'}
                                    />
                    </View>
                </View>

                <Text style={modalStyles.textBold}>Description</Text>
                <TextInput style={modalStyles.TextInput}
                           placeholder='Type Something'
                           multiline
                           numberOfLines={4}
                           onChangeText={(val)=>{setDescription(val)}}       
                    />
                
                <TouchableOpacity style={modalStyles.button} onPress={submitReport} >
                    <Text>Report Case</Text>
                </TouchableOpacity>

            </View>
        </View>
    )}

    export default MakeReport

    const styles = StyleSheet.create({
       
      
    })