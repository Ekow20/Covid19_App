import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ButtonGroup, Card} from 'react-native-elements'

const SeverityOpts = ({title, level, setLevel})=>{
    const buttons = ['0', '1', '2', '3', '4',]
    return(
        <Card title={title}>
            <View >
                <ButtonGroup 
                selectedIndex={level}
                buttons={buttons}
                onPress={(selectedIndex)=>setLevel(selectedIndex)}
                selectedButtonStyle={{backgroundColor:'grey'}}
                textStyle={{color:'black'}}
                innerBorderStyle={{width:0}}
                
                buttonStyle={{
                    backgroundColor:'white',
                    height:37,
                    width:37,
                    borderRadius:50,
                    marginHorizontal:5,
                    borderWidth:0.5,
                    borderColor:'grey'
                }}
                containerStyle={{borderWidth:0, }}
            />
            <View style={{flexDirection:'row', justifyContent:'space-between',
                          paddingHorizontal:15}}>
                <Text>None</Text>
                <Text>Mild</Text>
                <Text>Mid</Text>
                <Text>Semi</Text>
                <Text>High</Text>
            </View>
            </View>
        </Card>
    )
}

export default SeverityOpts

const styles = StyleSheet.create({
    
})
