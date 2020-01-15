import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet, Dimensions } from 'react-native';

export const Button = (props) => {


    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={Style.button}> { props.label }</Text>
        </TouchableHighlight>
    );  
}


export const ButtonDouble = (props) => {

    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={ Style.buttonDouble}> { props.label }</Text>
        </TouchableHighlight>
    );  
}
export const ButtonOperations = (props) => {

    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={ Style.buttonOperations}> { props.label }</Text>
        </TouchableHighlight>
    );  
}

const Style = StyleSheet.create({
    button: {
        fontSize: 35,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        paddingTop: 25,
        paddingRight: 10,
        backgroundColor: '#626561',
        color: 'white',
        textAlign: 'center',
        borderWidth: 0.2,
        borderColor: '#18191d',
    },

    buttonOperations: {
        color: 'white',
        width: Dimensions.get('window').width / 4,
        fontSize: 35,
        height: Dimensions.get('window').width / 4,
        paddingTop: 25,
        paddingRight: 10,
        backgroundColor: '#fe9f09',
        textAlign: 'center',
        borderWidth: 0.2,
        borderColor: '#18191d',
    },

    buttonDouble: {
        width: Dimensions.get('window').width / 4 * 2,
        fontSize: 35,
        height: Dimensions.get('window').width / 4,
        paddingTop: 25,
        paddingRight: 10,
        backgroundColor: '#fe9f09',
        color: 'white',
        textAlign: 'center',
        borderWidth: 0.2,
        borderColor: '#18191d',
    }
  });
