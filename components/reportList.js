import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const ReportList = ({Reports}) => {
    return (
        <FlatList 
                data={Reports}
                renderItem={({item})=>(
                            <View style={styles.item}>
                                <View style={styles.itemTop}>
                                    <Text style={{fontWeight:'bold'}}>{item.Status} </Text>
                                    <Text>{item.Date} </Text>
                                </View>
                                <Text>{item.Description} </Text>
                                <Text>{item.Contact} </Text>
                            </View>
                        )}
                   />
    )
}

export default ReportList

const styles = StyleSheet.create({
    item:{
        paddingHorizontal:10,
        paddingVertical:25,
        borderBottomColor:'grey',
        borderBottomWidth:0.5,
    },
    itemTop:{
        marginBottom:6,
        flexDirection:'row', 
        justifyContent:'space-between'
    }
})
