import React from 'react';
import { Alert, Button, View } from 'react-native';
import styles from './Styles';

const BotaoSalvarContato = (props) => {
    Alert.alert(JSON.stringify(props))
    return (
        <View style={styles.containerBotao}>
            <Button
                onPress={() => {
                    var contato = { nome: props.nome, telefone: props.telefone }
                    props.agenda.push(contato)
                }}
                title="Salvar"
                color="#309cb8"

                accessibilityLabel="Botão para salvar um contato na agenda"
            />
        </View>
    )
};

export default BotaoSalvarContato;