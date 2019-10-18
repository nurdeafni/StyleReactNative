import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity,ImageBackground, TextInput, Button} from 'react-native';
import { styles } from './StyleLogin';

export default class LoginApps extends React.Component{
    state={userName: null, password: null}
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.bImage} source={require('../assets/th(2).jpg')}>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardLogoContainer}>
                        <Image style={styles.cardLogo} source={require('../assets/marginButtom: 10,')}/>
                    </View>
                    <Text style={styles.judul}>Login Apps</Text>
                    <View style={styles.containerInput}> 
                    <Text style={styles.subJudul1}>User Name</Text>
                        <TextInput
                            style={{heigh: 40, marginBottom: 10, width:300, backgroundColor:'white'}}
                            />
                    <Text style={styles.subJudul2}>Password</Text>
                        <TextInput 
                            style={{heigh: 40, marginBottom: 10, width:300, backgroundColor:'white'}}
                        />
                         <Button 
                            title="Login"
                            onPress={() => {
                            }}
                        />
                    </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableOpacity>
                        <Image style={styles.poto} source={require('../assets/facebook.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.poto} source={require('../assets/snapchat.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.poto} source={require('../assets/instagram.jpg')}/>
                                </TouchableOpacity>
                                </View>
                </ImageBackground>
                
            </View>
        );
    }
}