import React from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'
import {SimpleLineIcons} from '@expo/vector-icons'

const CountryModal = ({CountryList, setCountryList}) => {
    
    
    return (
        <Modal visible={CountryList} >
             <View style={{flex:0.5, padding:10, alignItems:'flex-end',paddingHorizontal:20}}>
                <SimpleLineIcons name='close' size={25} 
                                onPress={()=>{setCountryList(false)}} />
            </View>
            {/*
            <View style={{flex:11}}>
                <FlatList 
                    keyExtractor={(item)=>item.country}
                    data={data}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={()=>{
                            updateCountry(item.country)
                            setShowModal(false)
                        }}>
                            <View style={styles.ImageSection}>
                                <Image source={{uri:item.countryInfo.flag}} style={styles.Image} />
                                <Text style={{fontSize:18}}>{item.country} </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View> */}
            <Text>countries</Text>
    
    </Modal>
    )
}

export default CountryModal

const styles = StyleSheet.create({
    Image:{
        width:25,
        height:18,
        paddingHorizontal:10,
        marginRight:8
    },
    ImageSection:{
        flexDirection:'row',
        alignItems:'center', 
        padding:8,
        borderBottomColor:'rgb(218, 218, 218)',
        borderBottomWidth:0.3
    },
})
