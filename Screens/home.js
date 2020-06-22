
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native'
import {request} from 'graphql-request'

const query=`{
    country(name:"Ghana"){
        result{
          cases
          recovered
          deaths
          updated
        }
    }
}`


const Home = () => {
    const [Ghana, setGhana] = useState({})
    const [Updated, setUpdated] = useState('')
    useEffect(() => {
        request('https://covid19-graphql.netlify.app/', query)
        .then((data)=>{
            setGhana(data.country.result)
            setUpdated(data.country.result.updated)
        })
        .catch((err)=>{console.log(err)})
    }, [])
    
    console.log(Updated.slice(0,9))
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <ImageBackground source={require('../assets/covid.jpg')} style={styles.image}>
                    <View style={styles.darken}>
                        <Text style={styles.numbers}>{Ghana.cases} </Text>
                        <Text style={styles.numbersText}>Confirmed Cases</Text>
                    </View>
                </ImageBackground>
                <ImageBackground source={require('../assets/recovery.jpg')} style={styles.image}>
                    <View style={styles.darken}>
                        <Text style={styles.numbers}>{Ghana.recovered} </Text>
                        <Text style={styles.numbersText}>Recoveries</Text>
                    </View>
                </ImageBackground>
                <ImageBackground source={require('../assets/cemetery.jpg')} style={styles.image}>
                    <View style={styles.darken}>
                        <Text style={styles.numbers}>{Ghana.deaths} </Text>
                        <Text style={styles.numbersText}>Deaths</Text>
                    </View>
                </ImageBackground>
            </ScrollView>
            <View>
                <Text style={styles.boldText}>Ghana's Situation Updates</Text>
                <Text>Last Updated: {Updated.slice(0,10)} </Text>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        padding:15
    },
    image:{
        height:150,
        width:250,
        marginVertical:15,
        marginRight:20,
        
    },
    numbers:{
        fontSize:35,
        color:'white',
        fontWeight:'bold',
        textAlign:'right'
    },
    numbersText:{
        color:"white",
        paddingHorizontal:10,
        fontWeight:'bold',
        textAlign:'right'
    },
    boldText:{
        fontWeight:'bold',
        fontSize:15,
    },
    darken:{
        flex:1,
        backgroundColor:'rgba(0,0,0,.6)'
    }
})
