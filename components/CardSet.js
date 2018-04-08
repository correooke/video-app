import React from 'react';
import { View, Text } from 'react-native';

const Items = ['Item 1', 'Item 2', 'Item 3'];

const ShowItem = (item) => (
    <Text>{item}</Text>
);

const CardSet = () => (
    <View>
        {
            // ES6 "función Map"
            // Item1, Item2, Item3 
            Items.map(ShowItem)
        }
    </View>
);

export default CardSet;