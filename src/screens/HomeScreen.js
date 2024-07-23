import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

const HomeScreen = (props) => {
    const [data, setData] = useState(undefined)
    const getApiData = async () => {
        // api call 
        const url = "https://jsonplaceholder.typicode.com/photos"
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }
    useEffect(() => {
        getApiData()
    }, [])
    const handlePress = (title, url) => {
        props.navigation.navigate('Detail', { title, url });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item.title, item.url)} style={styles.card}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.url }}
                        />
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            >

            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    card: {
        backgroundColor: "white",
        borderRadius: 8,
        overflow: "hidden",
        marginBottom: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    image: {
        width: '100%',
        height: 150,
    },
    text: {
        fontSize: 16,
        padding: 10,
        textAlign: 'center',
    },
});

export default HomeScreen;
