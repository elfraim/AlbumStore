import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
   const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle} >
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: '#A1887F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000', //iOS shadow
        shadowOffset: { width: 0, height: 2 }, //iOS shadow
        shadowOpacity: 0.2, //iOS shadow
        elevation: 3, //Android shadow
        position: 'relative'
    },

    textStyle: {
        fontSize: 20,
        color: 'white'
    }
};

export default Header;
