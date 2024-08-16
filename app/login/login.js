import { StyleSheet, View, Text, StatusBar, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Login() {
    return (
        <View>
            <Image source={require('../../assets/images/login.png')}/>
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to Education App</Text>
                <Text style={styles.loginLabel}>Login/Signup</Text>
                <View style={styles.button}>
                    <AntDesign name="google" size={24} color="white" style={{marginRight: 10}}/>
                    <Text>Sign in with Google</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        marginTop: -25,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        textAlign: 'center'
    },
    welcomeText: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    loginLabel: {
        marginTop: 80,
        fontSize: 20
    },
    button: {
        backgroundImage: 'linear-gradient(to right, #0C7DE4 , #12B3C9);',
        padding: 10,
        margin: 30,
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})