import React from 'react';
import Text, { View } from 'react-native';

const TextContato = (props) => {
    return (
        <View>
            <Text>{props.nome}</Text>
            <Text>{props.telefone}</Text>
        </View>
    )
};

export default TextContato;