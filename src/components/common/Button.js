import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ disabled,onPress, children }) => {
    if(disabled){
        return (
            <TouchableOpacity disabled={disabled} style={styles.buttonStyle} onPress={onPress}>
            <Text style={styles.disabledTextStyle}>{children}</Text>
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    },
    disabledTextStyle: {
        alignSelf: 'center',
        color: '#aed2f9',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
      },
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff',
      marginLeft: 5,
      marginRight: 5
    }
};

export { Button };
