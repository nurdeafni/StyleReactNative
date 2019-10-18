import {StyleSheet} from 'react-native';

const styles=  StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bImage:{
        marginTop: 50,
        alignItems: 'center',
        width: 400,
        height: 800
    },
    cardContainer:{

        borderRadius: 20,
        alignItems:'center',
        //backgroundColor: profileCardColor,
        width: 100,
        height: 200,
        paddingTop: 50
    },cardLogoContainer: {
        
        alignItems:'center',
        width: 150,
        height: 50,
        paddingTop: 1,
        marginTop:50
    },
    cardLogo:{
        width: 200, height: 40
    },
    judul:{
        color:'black',
        fontWeight: 'bold',
        fontSize: 19,
        marginTop: 30,
        textShadowColor: 'black',
        textShadowOffset:{
            height:2,
            weidth: 2
        },
        textShadowRadius: 3
    },
    containerInput:{
        alignItems:'center',
        width: 350,
        height: 300,
        paddingTop: 50,
        marginTop:20
    },
    poto:{
        width:90, 
        height: 90,
        alignItems:'center',
        marginLeft:15,
        marginTop:300
    }
});
export {styles}