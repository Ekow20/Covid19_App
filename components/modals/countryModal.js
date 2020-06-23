import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Modal, FlatList, TouchableOpacity, Image } from 'react-native'
import {SimpleLineIcons} from '@expo/vector-icons'
import {request} from 'graphql-request'

const query = `{
    countries {
        country
        countryInfo{ 
            flag
        }
    }
}`

const CountryModal = ({CountryOptions, setCountryOptions, setCountryVisited}) => {
    const [Countries, setCountries] = useState([])
    useEffect(() => {
        request('https://covid19-graphql.netlify.app/', query)
        .then((data)=>{
           setCountries(data.countries)
        })
        .catch((err)=>{console.log(err)})
    }, [])
    
    return (
        <Modal visible={CountryOptions} >
             <View style={{flex:0.5, padding:10, alignItems:'flex-end',paddingHorizontal:20}}>
                <SimpleLineIcons name='close' size={25} 
                                onPress={()=>{setCountryOptions(false)}} />
            </View>
            
            <View style={{flex:11}}>
                <FlatList 
                    keyExtractor={(item)=>item.country}
                    data={Countries}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={()=>{
                            setCountryVisited(item.country)
                            setCountryOptions(false)
                        }}>
                            <View style={styles.ImageSection}>
                                <Image source={{uri:item.countryInfo.flag}} style={styles.Image} />
                                <Text style={{fontSize:18}}>{item.country} </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
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
