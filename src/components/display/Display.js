import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Display extends Component {
 
    render() {
    
        return(
            <View style= { Style.display  }> 
                <Text style={ Style.text } numberOfLines={ 1 }> 
                    { this.props.value }
                </Text >
            </View>
        );
    }
}

const Style = StyleSheet.create({
    text: {
        fontSize: 90,
        color: 'white',
    },
    display: {
        flex: 1,
        // padding: 20,
        justifyContent: "center",
        alignItems:"flex-end",
        borderColor: '#888',
        backgroundColor: '#464646',
        maxHeight: '40%'
    },
});