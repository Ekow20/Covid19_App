import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import modalStyles from './modalStyles'
import SeverityOpts from './severityOpts'

const LogVitals = ({setSymptoms, setModalOpen}) => {
   const [CoughLevel, setCoughLevel] = useState(0)
   const [TirednessLevel, setTirednessLevel] = useState(0)
   const [SoreThroatLevel, setSoreThroatLevel] = useState(0)
   const [FeverLevel, setFeverLevel] = useState(0)
   const [AchesLevel, setAchesLevel] = useState(0)
   const [Breath_Level, setBreath_Level] = useState(0)
   const getDate=()=>{
    const date = new Date().getDate()
    const month = new Date().getMonth()+1
    const year = new Date().getFullYear()
    return(date+'/'+month+'/'+year)
}
   
   const getLeveDes=(level)=>{
      if(level===0){
        return 'None'
      }else if(level===1){
        return 'Mild'
      }else if(level===2){
        return 'Mid'
      }else if(level===3){
        return 'Semi'
      }else if(level===4){
        return 'High'
      }
   }
   const submitSymptoms =()=>{
     setSymptoms((prevSymptoms)=>{
      return(
        [{record:[
            {title:'Aches', level:AchesLevel, levelDescription:getLeveDes(AchesLevel)},
            {title:'Breath Shortness', level:Breath_Level, levelDescription:getLeveDes(Breath_Level)},
            {title:'Fever', level:FeverLevel, levelDescription:getLeveDes(FeverLevel)},
            {title:'Dry Cough', level:CoughLevel, levelDescription:getLeveDes(CoughLevel)},
            {title:'Tiredness', level:TirednessLevel, levelDescription:getLeveDes(TirednessLevel)},
            {title:'Sore Throat', level:SoreThroatLevel, levelDescription:getLeveDes(SoreThroatLevel)},
          ],
        Date:getDate()
        },
        ...prevSymptoms

        ]
      )
     })
     setModalOpen(false)
   } 
    return (
        <View style={modalStyles.container}>
            <View style={modalStyles.header}>
                <Text style={modalStyles.textHeader} >Log Symptoms</Text>
                <Ionicons name='ios-close' size={35} onPress={()=>{setModalOpen(false)}} />
            </View>

            <View style={{flex:10 }}>
              <ScrollView>
              <SeverityOpts title='Dry Cough' level={CoughLevel}
                            setLevel={setCoughLevel}    
              />
              <SeverityOpts title='Tiredness' level={TirednessLevel}
                            setLevel={setTirednessLevel}    
              />
              <SeverityOpts title='Sore Throat' level={SoreThroatLevel}
                            setLevel={setSoreThroatLevel}    
              />
              <SeverityOpts title='Fever' level={FeverLevel}
                            setLevel={setFeverLevel}    
              />
              <SeverityOpts title='Aches and Pains' level={AchesLevel}
                            setLevel={setAchesLevel}    
              />
              <SeverityOpts title='Shortness of Breath' level={Breath_Level}
                            setLevel={setBreath_Level}    
              />
              <View style={{paddingHorizontal:14, marginVertical:10}}>
                <TouchableOpacity style={modalStyles.button} onPress={submitSymptoms}>
                    <Text style={{color:'white'}}>Log Vitals</Text>
                </TouchableOpacity>
              </View>
              </ScrollView>
              
               
            </View>
        </View>
    )}

    export default LogVitals

    const styles = StyleSheet.create({

    })

    