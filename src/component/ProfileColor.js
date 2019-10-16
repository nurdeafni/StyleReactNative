import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class ProfileColor extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage}
                            source={require('../assets/userID.png')}/>
                    </View>
                </View>
            </View>
        );
    }
}
const profileCardColor = 'dodgerblue'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer:{
        borderColor: 'black', 
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        alignItems:'center',
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        paddingTop: 50
    },
    cardImageContainer: {
        backgroundColor: 'white',
        borderWidth: 3,
        alignItems:'center',
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        paddingTop: 15
    },
    cardImage:{
        width: 80, height: 80
    }
});