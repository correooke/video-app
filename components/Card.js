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
                underlayColor="#ff6659"
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
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 3,
    },
    title: {
        fontSize: 30,
        padding: 5,
        backgroundColor: '#9a0007',
        textAlign: 'center', 
    },
    mainImage: {
        height: 190,
    },
    button: {
        height: 38,
        marginTop: 10,
        backgroundColor: "#d32f2f",
        width: 140,
        alignSelf: 'flex-end',
        borderRadius: 3,
    }, 
    buttonText: {
        fontSize: 20,
        lineHeight: 38,
        color: "#fff", 
        textAlign: 'center',
    },
    description: { 
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20,
        fontSize: 13, 
        color: "#000",
    }
});

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
}


export default Card;