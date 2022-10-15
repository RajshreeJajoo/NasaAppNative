import { Card, Title } from 'react-native-paper';
import { Text, View, SafeAreaView, Button, Linking, StyleSheet } from 'react-native';

const Error = () => {
    return (
        <SafeAreaView>
            <View>
                <Card style={styles.container}>
                    <Card.Content>
                        <Title>Error Form</Title>
                    </Card.Content>
                    <Card.Content>
                        <Text style={styles.text}>404 Error</Text>
                        <Text style={styles.text}>Data Not Found</Text>
                    </Card.Content>
                </Card>

            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
         marginTop: 250,
        alignItems: 'center',
        margin: 20,
        padding: 40,
        backgroundColor:'#D30000'

    }, text: {
        margin: 10,
    }

})
export default Error;