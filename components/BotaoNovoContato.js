import React from 'react';
import { Button, View } from 'react-native';
import InputAgenda from './InputAgenda';

const BotaoNovoContato = (props) => {
    return(
    <Button
        onPress={() => {
            <View>
                <InputAgenda
                    agenda={props.agenda}
                />
            </View>
            
        }}
        title="Novo contato"
        color="#309cb8"

        accessibilityLabel="Botão para criar um novo contato na agenda"
    />
    )
};

export default BotaoNovoContato;