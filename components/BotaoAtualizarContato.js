import React from 'react';
import { Alert, Button, View } from 'react-native';
import styles from './Styles';

const BotaoAtualizarContato = (props) => {
    return (
        <View style={styles.containerBotao}>
            <Button
                onPress={() => {
                    props.agenda[props.posicao] = {nome: props.nome, telefone: props.telefone}
                    Alert.alert("Contato atualizado com sucesso")
                }}
                title="Atualizar"
                color="#309cb8"
                accessibilityLabel="Botão para atualizar um contato na agenda"
            />
        </View>
    )
};

export default BotaoAtualizarContato;