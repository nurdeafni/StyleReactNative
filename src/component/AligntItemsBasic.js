import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native'

export default  class AlignItemsBasic extends Component{
    render(){
        return(
            //Try setting 'alignItems' to 'flex-start', 'flex-end', 'center'
            <View style={styles.container}>
                <Text style={styles.headerStyle}> alignItems: 'flex-center'</Text>
                <View style={[{flexDirection: 'column', alignItems: 'flex-start'}, styles.elementsContainer]}>
                    <View style={styles.red}/>
                    <View style={styles.yellow}/>
                    <View style={styles.gren}/>
                   </View>
                </View>
        );
    }
}
const styles={
    gren:{
        backgroundColor: '#32B76C',
        height: 50,
        width: 60
    },
    yellow:{
        backgroundColor: '#FAA030',
        height: 50,
        width: 100
    },
    red:{
        backgroundColor: '#EE2C38',
        height: 50,
        width:80
    },
    container:{
        marginTop: 48,
        flex: 1
    },
    headerStyle:{
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '300',
        marginButton: 24 
    },
    elementsContainer:{
        flex: 1,
        backgroundColor: '#ecf5fd',
        marginLeft: 24,
        marginRight: 24,
        marginButton: 24
    }
}