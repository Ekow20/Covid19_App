import React,{useState} from 'react'
import { StyleSheet, Text, View, Dimensions,Modal } from 'react-native'
import {Ionicons, FontAwesome} from '@expo/vector-icons'
import Profile from './modals/profile'
const { width}= Dimensions.get('window')

const Header = ({route}) => {
    const [OpenProfile, setOpenProfile] = useState(false)
    return (
        <View style={{flex:1, width:width-40, paddingTop:10}}>
            <View style={styles.iconSec}>
                <FontAwesome name='user-circle' size={27} color='grey' onPress={()=>{setOpenProfile(true)}} />
                <Ionicons name='ios-notifications-outline' size={30} />
            </View>
            <Text style={styles.HeaderText}>{getHeaderTitle(route)}</Text>
            <Modal visible={OpenProfile} animationType='slide' animated={true}>
                <Profile setOpenProfile={setOpenProfile} />
            </Modal>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    iconSec:{
        flexDirection: 'row',
        justifyContent: 'space-between',
       
    },
    HeaderText:{
        fontSize:25,
        fontWeight:'bold'
        },
   
})

const getHeaderTitle = (route)=>{
    const routeName = route.state? route.state.routes[route.state.index].name :'Home'
    switch(routeName){
        case 'Home':
            return 'Home';
        case 'Report':
            return 'Case Report'
        case 'Vitals':
            return 'Vitals'
        case 'Settings':
            return 'Settings'
    }
}