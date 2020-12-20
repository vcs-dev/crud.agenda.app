import React from 'react';
import { Alert, Button, View } from 'react-native';
import styles from './Styles';

const BotaoExcluirContato = (props) => {
    return (
        <View style={styles.containerBotao}>
            <Button
                onPress={() => {
                    props.agenda.splice(props.posicao, 1);
                    Alert.alert('Contato excluído com sucesso');
                }}
                title="Excluir contato"
                color="#309cb8"
                accessibilityLabel="Botão para excluir contato"
            />
        </View>
    )
};

export default BotaoExcluirContato;