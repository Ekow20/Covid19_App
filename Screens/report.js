import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, FlatList } from 'react-native'
import MakeReport from '../components/modals/makeReport'
import ReportList from '../components/reportList'
import {Entypo} from '@expo/vector-icons'

const Report = () => {
    const [Reports, setReports] = useState([])
    const [ModalOpen, setModalOpen] = useState(false)
    const ReportScreen = ()=>{
        if (Reports.length ===0){
            return (
                <View style={{flex:1,  alignItems:'center'}}>
                    <Image source={require('../assets/unknown.png')}
                            style={styles.image} />
                    <Text>You have not made any case reports</Text>
                    <TouchableOpacity style={styles.button} onPress={()=>{setModalOpen(true)}}>
                        <Text>Make case report</Text>
                    </TouchableOpacity>
                   
                </View>
            )
        }else{
            return(
                <View style={{flex:1, }}>
                   <ReportList Reports={Reports} />
                   <TouchableOpacity style={styles.floatingbutton}>
                        <Entypo name="plus"  size={30} color="white"  onPress={()=>{setModalOpen(true)}}/>
                   </TouchableOpacity>
                </View>
            )
        }
    }
    return(
        <View style={{flex:1}}>
            <ReportScreen/>
            <Modal visible={ModalOpen}>
                <MakeReport setModalOpen={setModalOpen} setReports={setReports} />
            </Modal>
        </View>
    )
    
}

export default Report

const styles = StyleSheet.create({
    image:{
        height:100,
        width:70,
        marginTop:40,
        marginBottom: 30,
        resizeMode:'contain'
    }, 
    button:{
        paddingHorizontal: 25,
        paddingVertical:10,
        borderStyle:'dashed',
        borderRadius:1,
        borderWidth:1,
        marginTop:20
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
