import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import TestingSites from '../components/modals/testingSites'

const Settings = () => {
    const [OpenSitesModal, setOpenSitesModal] = useState(false)
    
    const settingsItems =[
        {title:'Self Assessment', details:'Ascertain your covid-19 risk using our screening tool', onPress:()=>{}},
        {title:'FAQs', details:'Get answers to Frequently Asked Questions', onPress:()=>{}},
        {title:'Testing Centers', details:'View testing centers near you', onPress:()=>{setOpenSitesModal(true)}},
        {title:'Personal Details', details:'View and update your persnal data', onPress:()=>{}},
        {title:'Audio', details:'Listen to audio', onPress:()=>{}},
        {title:'Privacy Policy', details:'View our privacy policy', onPress:()=>{}},
        {title:'Share', details:'Share this app with family and friends', onPress:()=>{}},
    ]

    const ItemsRender =({title, details, onPress})=>(
        <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.details}>{details}</Text>
            </View>
            <Ionicons name='ios-arrow-forward' size={20}/>
        </TouchableOpacity>
    )

    return (
        <View style={{flex:1}}>
          <FlatList 
            keyExtractor={(item)=> item.title}
            data={settingsItems}
            renderItem={({item})=>(
                    <ItemsRender title={item.title} details={item.details} onPress={item.onPress} />
            )}
          /> 
          <Modal visible={OpenSitesModal} animationType='slide' animated={true}>
                <TestingSites setOpenSitesModal={setOpenSitesModal} />
          </Modal>

        </View>
    )

    
}

export default Settings

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:0.2,
        borderBottomColor:'grey'
    },
    title:{
        fontWeight:'bold'
    },
    details:{
        fontSize:11,
    },
})



