import React from 'react';
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
        uri: 'https://www.revistawelldone.cl/wp-content/uploads/2017/12/avengersinfinitywar-1494357736132_1280w.jpg'
    };
    const onPressButton = () => {
        console.log("Se presionó el botón");
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title} >
                CARD (EJEMPLO)!
            </Text>
            <Image style={styles.mainImage} 
                source={imageSource} />
            <Text style={styles.description} >
                Descripción de ejemplo de video
                largo
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
        height: 300,
        width: 300,
        backgroundColor: '#0F0',
    },
    title: {
        fontSize: 30
    },
    mainImage: {
        height: 150,
        width: 280,
        marginLeft: 10, 
        noexiste: true,
    },
    button: {
        height: 30,
        width: 280,
        marginLeft: 10,
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
})
export default Card;