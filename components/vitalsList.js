import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

export default function VitalsList({Symptoms}) {
    return (
        <View>
           <FlatList
                    data={Symptoms}
                    renderItem={({item})=>(
                        <View style={styles.record}>
                            <Text>{item.Date}</Text>
                            <FlatList 
                                data={item.record}
                                renderItem={({item})=>(
                                    <View style={styles.symptom}>
                                        <Text style={styles.text}>{item.title}</Text>
                                        <Text style={styles.text}>{item.level}</Text>
                                        <Text style={styles.text}>{item.levelDescription}</Text>
                                    </View>
                                )}
                                numColumns={3}
                            />
                        </View>
                    )}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    symptom:{
        padding:10,
        margin:4,
        backgroundColor:'rgb(53, 101, 143)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:90,
        
    },
    record:{
        borderBottomWidth:0.5,
        borderBottomColor:'grey',
        paddingHorizontal:10,
        marginVertical:10,
        paddingBottom:5
    },
    text:{
        color:'white',
        textAlign:'center'
    }
})
