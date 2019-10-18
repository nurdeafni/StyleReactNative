import {StyleSheet} from 'react-native';

const profileCardColor = 'dodgerblue'
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bgImage:{
        marginTop: 50,
        alignItems: 'center',
        width: 300,
        height: 400
    },
    cardContainer:{
        borderColor: 'black', 
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        alignItems:'center',
        //backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        paddingTop: 50
    },
    cardImageContainer: {
        backgroundColor: 'white',
        borderWidth: 3,
        alignItems:'center',
        borderColor: 'black',
        width: 88,
        height: 88,
        borderRadius: 60,
        paddingTop: 1
    },
    cardImage:{
        width: 80, height: 80
    },
    cardNmae:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,
        textShadowColor: 'black',
        textShadowOffset:{
            height:2,
            weidth: 2
        },
        textShadowRadius: 3
    },
    cardOccupationContainer:{
        borderColor:'yellow',
        borderBottomWidth: 3,
    },
    cardOccupation:{
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },
    cardDescription:{
        fontStyle: 'italic',
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10
    }
    
});

export {styles}