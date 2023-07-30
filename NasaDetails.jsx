import { Text, View, SafeAreaView, Button, Linking, StyleSheet } from 'react-native';
import * as React from 'react';
import { Card, Title } from 'react-native-paper';

const NasaDetails = ({ navigation }) => {
    const details = navigation.state.params.paramKey;
    return (
        <SafeAreaView>
            <View>
                <Card style={styles.container}>
                    <Card.Content>
                        <Title>Nasa Details for id :- {details.id}</Title>
                    </Card.Content>

                    <Card.Content style={styles.details}>
                        <Text style={styles.text}>Name :- {details.name}</Text>
                        <Text style={styles.text}>Hazardous Asteroid:- {details.is_potentially_hazardous_asteroid.toString()}</Text>
                        <Text style={styles.text}>Orbit Id :- {details.orbital_data.orbit_id}</Text>
                        <Text style={styles.button} onPress={() => Linking.openURL(details.nasa_jpl_url)} target="_blank">Click on url</Text>

                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#9167F4',
        maxWidth: 100,
        margin: 10,
        padding: 10
    },
    container: {
        marginTop: '25%',
        alignItems: 'center',
        backgroundColor: '#E5DFF1'
    },
    details: {
        margin: 30,
        alignItems: 'center',
    },
    text: {
        margin: 10,
    }
})
export default NasaDetails;