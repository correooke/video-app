import React from 'react';
import { ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';

const CardSet = ({ items }) => (
    <ScrollView>
        {
            items.map((item, i) => <Card 
                                        key={i} 
                                        title={item.title}
                                        image={item.image}
                                        description={item.description}></Card>)
        }
    </ScrollView>
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