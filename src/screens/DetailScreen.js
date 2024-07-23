import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DetailScreen = ({ navigation, route }) => {
    console.log("PROP VALUE IS", navigation)
    const title = route.params.title
    let url = route.params.url
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: url }}
            />
            <Text style={styles.text}> Title: {title} </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: 'powderblue ',
    },
    image: {
        width: '80%',
        height: 200,
        marginBottom: 20,
        marginTop:20
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
    }
})
export default DetailScreen;
