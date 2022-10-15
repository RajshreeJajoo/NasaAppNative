import { Button, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import { useState } from "react";
import axios from "axios";
import { Card} from 'react-native-paper';

const NasaLogin = ({ navigation }) => {

    const [id, setId] = useState();
    
    const onRandom = () => {
        axios.get(
            `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=9mfvC2LtoPfOd5fLd6U3e6Gum0Agt3r8BYcW4rWs`)
            .then((res) => {
                let len = res.data.near_earth_objects.length;
                let randomId = Math.floor(Math.random() * len);
                setId(res.data.near_earth_objects[randomId].id);

                navigation.navigate('Details', {
                    paramKey: res.data.near_earth_objects[randomId],
                })
            })
            .catch((err) => {
                navigation.navigate('ErrorPage', {
                    paramKey: err,
                })
            });
    }


    const onSumbit = () => {
        axios.get(
            `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=9mfvC2LtoPfOd5fLd6U3e6Gum0Agt3r8BYcW4rWs`)
            .then((res) => {
                navigation.navigate('Details', {
                    paramKey: res.data,
                })
            })
            .catch((err) => {
                navigation.navigate('ErrorPage', {
                    paramKey: err,
                })
            });
    };

    return (
        <SafeAreaView >
            <Card style={styles.container}>
                <View>
                    <Text style={styles.textStyle}>Nasa App</Text>
                    <TextInput style={styles.dataInput} placeholder='Enter id' value={id} keyboardType='numeric' onChangeText={(text) => setId(text)} />
                </View>
                <View style={styles.button}>
                    <Button title='Random Id' onPress={onRandom} />
                    <View style={styles.space} />
                    <Button title='Sumbit Id' onPress={onSumbit} disabled={!id} />
                    <View style={styles.space} />
                    <Button title='Reset Id' onPress={()=> setId('')} />
                </View>
            </Card>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        alignItems: 'center',
        margin: 20,
        padding: 80,
    },

    textStyle: {
        textAlign: "center",
        backgroundColor: '#ECF0F1',

    },
    dataInput: {
        borderWidth: 3,
        padding: 10,
        margin: 15
    },
    space: {
        width: 20,
        height: 20,
    },
    button: {
        flexDirection: 'row',
        paddingLeft: 15,
        marginTop: 15

    }
});

export default NasaLogin;