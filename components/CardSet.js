import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';

const CardSet = ({ items }) => (
    <View>
        {
            items.map((item, i) => <Card 
                                        key={i} 
                                        title={item.title}
                                        image={item.image}
                                        description={item.description}></Card>)
        }
    </View>
);

CardSet.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape(
            { 
                title: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string,
            })).isRequired,               

};

export default CardSet;