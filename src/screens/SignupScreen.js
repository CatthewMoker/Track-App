import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return ( 
    <View style={styles.container}>
        <Spacer>
            <Text h3> Sign up for Tracker</Text>
        </Spacer>
        <Spacer>
            <Input 
            label="Email"
            value={email}
            autoCapitalize="none"
            onChangeText={setEmail}
            />
        </Spacer>
        <Spacer>
            <Input 
            secureTextEntry
            label="Password"
            value={password}
            autoCapitalize="none"
            onChangeText={setPassword}
            />
        </Spacer>
        <Spacer>
            <Button title="Sign Up" />
        </Spacer>
    </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SignupScreen;