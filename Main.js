import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import BottomNav from './routes/bottomNav'
import Header from './components/header'
import LoginScreen from './routes/loginScreen'

// test
import Home from './Screens/home'

const Stack = createStackNavigator()

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={BottomNav} 
                              options ={({route})=> ({headerTitle: ()=><Header route={route}/>,
                                        headerStyle:{height:100,} 
                            })}                              
                />
                <Stack.Screen name='Login' component={LoginScreen}
                              options={{headerShown:false}}  
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main

