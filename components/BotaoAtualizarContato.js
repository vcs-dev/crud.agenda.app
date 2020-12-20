import React from 'react';
import { useState } from 'react';
import { Alert, Button, View } from 'react-native';
import styles from './Styles';

const BotaoAtualizarContato = (props, input) => {
    return (
        <View style={styles.containerBotao}>
            <Button
                onPress={() => {
                    Alert.alert(JSON.stringify(input))
                    props.agenda[props.posicao] = {nome: input.nome, telefone: input.telefone}
                }}
                title="Atualizar"
                color="#309cb8"
                accessibilityLabel="Botão para atualizar um contato na agenda"
            />
        </View>
    )
};

export default BotaoAtualizarContato;