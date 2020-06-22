import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, FlatList } from 'react-native'
import LogVitals from '../components/modals/logVitals'
import VitalsList from '../components/vitalsList'
import {Entypo} from '@expo/vector-icons'

const Vitals = () => {
    const [Symptoms, setSymptoms] = useState([])
    const [ModalOpen, setModalOpen] = useState(false)
    const VitalsScreen = ()=>{
        if (Symptoms.length ===0){
            return (
                <View style={{flex:1,  alignItems:'center'}}>
                    <Image source={require('../assets/pulse.png')}
                            style={styles.image} />
                    <Text>You have not logged your vitals yet</Text>
                    <TouchableOpacity style={styles.button} onPress={()=>{setModalOpen(true)}}>
                        <Text>Log Vitals</Text>
                    </TouchableOpacity>
                </View>
            )
        }else{
            return(
                <View style={{flex:1}}>
                   <VitalsList Symptoms={Symptoms}/>
                   <TouchableOpacity style={styles.floatingbutton}>
                        <Entypo name="plus"  size={30} color="white"  onPress={()=>{setModalOpen(true)}}/>
                   </TouchableOpacity>
                </View>
            )
        }
    }

    return(
        <View style={{flex:1}}>
            <VitalsScreen/>
            <Modal visible={ModalOpen}>
               <LogVitals setSymptoms={setSymptoms} setModalOpen={setModalOpen}/>
            </Modal>
        </View>
    )
    
    
}

export default Vitals

const styles = StyleSheet.create({
    image:{
        height:80,
        width:120,
        marginTop:40,
        marginBottom: 30
    }, 
    button:{
        paddingHorizontal: 25,
        paddingVertical:10,
        borderStyle:'dashed',
        borderRadius:1,
        borderWidth:1,
        marginTop:20,
    },
    symptom:{
        padding:10,
        margin:6,
        backgroundColor:'coral',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:90
    },
    floatingbutton:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:60,
        position: 'absolute',                                          
        bottom: 10,                                                    
        right: 10,
        height:60,
        backgroundColor:'black',
        borderRadius:100,
      }
})
