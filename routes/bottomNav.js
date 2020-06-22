import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import Home from '../Screens/home'
import Report from '../Screens/report'
import Vitals from '../Screens/vitals'
import Settings from '../Screens/settings'
import {Ionicons, FontAwesome, Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const BottomNav = () => {
    return (
            <Tab.Navigator screenOptions={({route})=>(
                {tabBarIcon:({size, color})=>(getTabIcons(route, size, color))
                    }
            )}
                tabBarOptions={{activeTintColor:'black'}}
                initialRouteName='Report'
            >
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Report' component={Report}/>
                <Tab.Screen name='Vitals' component={Vitals} />
                <Tab.Screen name='Settings' component={Settings} />
            </Tab.Navigator>
    )
}

export default BottomNav
 


const getTabIcons = (route, size, color)=>{
    if(route.name === "Home"){
        return <Ionicons name='ios-home' color={color} size={size}/>
    }else if(route.name === "Report"){
        return <FontAwesome name='send' color={color} size={size}/>
    }else if(route.name === "Vitals"){
        return <Feather name='activity' color={color} size={size}/>
    }else if(route.name === "Settings"){
        return <Ionicons name='md-settings' color={color} size={size}/>
    }
}