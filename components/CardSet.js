import React from 'react';
import { View, Text } from 'react-native';

const Items = ['Item 2', 'Item 1', 'Item 3'];

const CardSet = () => (
    <View>
        {
            Items.map((item, i) => <Text key={i}>{item}</Text>)
        }
    </View>
);

export default CardSet;