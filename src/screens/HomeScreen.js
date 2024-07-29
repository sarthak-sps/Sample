import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import {addToCart} from './redux/action'
import { useDispatch } from 'react-redux';

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
    const dispatch = useDispatch()

    const handleAddToCart=(item)=>{
        console.warn(item);
        dispatch(addToCart(item))
    }

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item.title, item.url)} style={styles.card}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.url }}
                        />
                        <TouchableOpacity onPress={()=>handleAddToCart(item)}>
                            <Text style={styles.text}>Add To Cart</Text>
                        </TouchableOpacity>
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
        flex: 1,
        backgroundColor: "white",
        borderRadius: 8,
        overflow: "hidden",
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        margin: 10
    },
    image: {
        width: 200,
        height: 150,
    },
    text: {
        fontSize: 16,
        padding: 10,
        textAlign: 'center',
        color: "black",
        backgroundColor: 'steelblue'
    },
});

export default HomeScreen;
