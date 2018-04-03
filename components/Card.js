import React from 'react';
import PropTypes from 'prop-types';
import { View, 
        Text, 
        Image, 
        TouchableHighlight,
        StyleSheet } from 'react-native';

        // Titulo, 
        // urlImagen,
        // descripcion
const Card = ({ title, image, description }) => {

    // ejecución de función. 
    const imageSource = {
        uri: image
    };
    const onPressButton = () => {
        console.log("Se presionó el botón");
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title} >
                {title}
            </Text>
            <Image style={styles.mainImage} 
                source={imageSource} />
            <Text style={styles.description} >
                {description}
            </Text> 
            <TouchableHighlight
                style={styles.button}
                underlayColor="#EEE"
                onPress={onPressButton} >
                <Text 
                    style={styles.buttonText} >
                    Ver más
                </Text>
            </TouchableHighlight>
        </View> 
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#0F0',
        padding: 10,
    },
    title: {
        fontSize: 30
    },
    mainImage: {
        height: 190,
    },
    button: {
        height: 30,
        marginTop: 10,
        backgroundColor: "#999",
    }, 
    buttonText: {
        fontSize: 20,
        color: "#222",
    },
    description: { 
        marginLeft: 10,
        fontSize: 13,
        color: "#EEE",
    }
});

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
}


export default Card;