import React from 'react';
import { Alert, Button, View } from 'react-native';
import styles from './Styles';

const BotaoSalvarContato = (props) => {
    return (
        <View style={styles.containerBotao}>
            <Button
                onPress={() => {
                    props.agenda.push({ nome: props.nome, telefone: props.telefone })
                    Alert.alert("Contato salvo com sucesso")
                }}
                title="Salvar"
                color="#309cb8"
                accessibilityLabel="Botão para salvar um contato na agenda"
            />
        </View>
    )
};

export default BotaoSalvarContato;