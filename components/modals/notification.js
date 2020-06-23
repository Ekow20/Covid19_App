import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import {request} from 'graphql-request'
import {Ionicons} from '@expo/vector-icons'

const query=`{
    broadcastMessages{
        _id
        title
        updatedAt
      }
}`

const Notification = ({setOpenNotification}) => {
    const [Notifications, setNotifications] = useState([])
    useEffect(() => {
        request('http://signalc.herokuapp.com/GraphQL', query)
        .then((data)=>{
           setNotifications(data.broadcastMessages)
        })
        .catch((err)=>{console.log(err)})
    }, [])

    
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection:'row', alignSelf:"center"}}>
                <Ionicons name='ios-close' size={35} onPress={()=>{setOpenNotification(false)}}/>
                <Text style={styles.header} >Notifications</Text>
            </View>
           
            <FlatList
                keyExtractor={(item)=>item._id} 
                data={Notifications}
                renderItem={({item})=>(
                    <View style={styles.item}>
                        <Text>{item.title} </Text>
                        <Text>{item.updatedAt} </Text>
                    </View>
                )}
            />
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        borderBottomColor:'grey',
        borderBottomWidth:0.3,
        marginVertical:10

    },
    header:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        marginLeft:25
    }
})
