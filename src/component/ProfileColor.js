import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, ImageBackground} from 'react-native';
import {styles} from './StyleProfile'

export default class ProfileColor extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.bgImage} source={require('../assets/th(3).jpg')}>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardImageContainer}>
                            <Image style={styles.cardImage}
                                source={require('../assets/userID.png')}/>
                        </View>
                   
                   <Text style={styles.cardName}>Jhon Doe</Text>
                        <View style={styles.cardOccupationContainer}>
                            <Text style={styles.cardOccupation}> React Native Developer</Text>
                        </View>
                    <View>
                        <Text style={styles.caerdDescription}>
                            John is a realy great JavaScript developer. He loves using JS build React Native
                            application for iOS and Android</Text>
                    </View>
                </View>
            </ImageBackground>                    
         </View>
        );
    }
}
