
import { StyleSheet} from 'react-native'

const modalStyles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical:10,
    }, 
    header:{
        flex:1,
        justifyContent:'space-between',
        flexDirection:'row',
        marginBottom:10,
        
    },
    textHeader:{
        fontSize:23,
        fontWeight:'bold'
    },
    checkboxContainer:{
        flexDirection:'row',
        paddingRight:15,
        alignItems:'center',
        marginBottom:10
  },
    TextInput:{
        padding:6,
        borderWidth:1,
        borderColor:'grey',
        marginBottom:15
    },
    button:{
        paddingVertical:10,
        backgroundColor:'grey',
        alignItems:'center',
        borderRadius:5
    }, 
    textBold:{
        fontWeight:'bold',
        marginVertical:1
    }
})


export default modalStyles


