import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import modalStyles from './modalStyles'
import {request} from 'graphql-request'

const query=`{
    testingSites{
        _id
        name
        address
        placesName
        location{
            coordinates
        }
        updatedAt
    }
}`

const TestingSites = ({setOpenSitesModal}) => {
    const [Sites, setSites] = useState([])
    useEffect(() => {
        request('http://signalc.herokuapp.com/GraphQL', query)
        .then((data)=>{
           setSites(data.testingSites)
        })
        .catch((err)=>{console.log(err)})
    }, [])

    
    return (
        <View style={modalStyles.container}>
            <View style={modalStyles.header}>
                <Text style={{fontSize:25, fontWeight:'bold'}} >Testing Centers</Text>
                <Ionicons name='ios-close' size={35} onPress={()=>{setOpenSitesModal(false)}}/>
            </View>
            <View style={{flex:10}}>
                <FlatList 
                    keyExtractor={(item)=>item._id}
                    data={Sites}
                    renderItem={({item})=>(
                        <View style={styles.item}>
                            <Text style={styles.bold}>{item.name} </Text>
                            <Text>{item.address} </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

export default TestingSites

const styles = StyleSheet.create({
    item:{
        padding:10,
        borderBottomColor:'grey',
        borderBottomWidth:0.3,

    },
    bold:{
        fontWeight:'bold',
        fontSize:17,
        marginBottom:20,
     }
})
