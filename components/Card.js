import React from 'react';
import { View, 
        Text, 
        StyleSheet } from 'react-native';

const Card = () => {
    // ejecución de función. 

    return (
        <View style={styles.container}>
            <Text style={styles.title} >
                CARD (EJEMPLO)!
            </Text>
        </View> 
    )
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 300,
        backgroundColor: '#F00',
    },
    title: {
        fontSize: 30
    }
})
export default Card;