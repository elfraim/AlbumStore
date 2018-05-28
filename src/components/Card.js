import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#DDD',
        borderBottomWidth: 0,
        elevation: 2, //Android shadow
        shadowColor: '#000', //iOS Shadow
        shadowOffset: { width: 0, height: 2 }, //iOS Shadow
        shadowOpacity: 0.1, //iOS Shadow
        shadowRadius: 2, //iOS Shadow
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export default Card;
