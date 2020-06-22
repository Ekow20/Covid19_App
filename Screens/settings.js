import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const Settings = () => {
    return (
        <View style={{flex:1}}>
          <FlatList 
            keyExtractor={(item)=> item.title}
            data={settingsItems}
            renderItem={({item})=>(
                    <ItemsRender title={item.title} details={item.details} />
            )}
          />  
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

const ItemsRender =({title, details})=>(
    <TouchableOpacity style={styles.itemContainer}>
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.details}>{details}</Text>
        </View>
        <Ionicons name='ios-arrow-forward' size={20}/>
    </TouchableOpacity>
)

const settingsItems =[
    {title:'Self Assessment', details:'Ascertain your covid-19 risk using our screening tool'},
    {title:'FAQs', details:'Get answers to Frequently Asked Questions'},
    {title:'Testing Centers', details:'View testing centers near you'},
    {title:'Personal Details', details:'View and update your persnal data'},
    {title:'Audio', details:'Listen to audio'},
    {title:'Privacy Policy', details:'View our privacy policy'},
    {title:'Share', details:'Share this app with family and friends'},
]