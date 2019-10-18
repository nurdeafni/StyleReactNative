import React, {Component} from "react";
import{
    StyleSheet,
    Text,
    View,
    Button
} from "react-native";

class ProfileActivity extends Component{
    static navigationOptions={
        title: "Profile",
        headerStyle:{
            baackgrounColor:"#73C6B6"
            }
        };
        render(){
            return(
                <View style={styles.container}>
                    <Text style={styles.headerText}>Profile Activity</Text>
                    <Button title="Go To Home" onPress={() => this.props.navigation.push("Home")}/>
                    <Text style={styles.headerStyle}>Create Nee Profile Screen</Text>
                    <Button title="Go To New Profile" onPress={()=> this.props.navigation.push("Profile")}/>
                    <Button title="Go To Back" onPress={()=> this.props.navigation.goBack()}/>

                </View>
            );
        }
    }
    const styles=StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            baackgrounColor: "F5FCFF"
        },
        headerText:{
            fontSize: 20,
            textAlign: "center",
            margin: 10,
            fontWeight: "bold"
        }
    });
