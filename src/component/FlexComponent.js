import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native'

export default class FlexComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.fristrow}></View>
            <View style={styles.secoundrow}></View>
            <View style={styles.thridrow}></View>
            </View>
        );
    }
};
const styles= StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:"column",
        backgroundColor: '#2f2d2d',
    },
    fristrow:{
        flex: 1,
        backgroundColor: "#e93e43"
    },
    secoundrow:{
        flex: 2,
        backgroundColor: "#f5a942"
    },
    thridrow:{
        flex: 3,
        backgroundColor: "#51c27e"

    },
}); 
