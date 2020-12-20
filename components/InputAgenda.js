import React, { useState } from 'react';
import {TextInput, Text, View } from 'react-native';
import styles from './Styles';

const InputAgenda = (props) => {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')

    return (
        <View>
            <Text>Nome</Text>
            <TextInput
                style={styles.inputContato}
                placeholder="Nome"
                onChangeText={nome => setNome(nome)}
                defaultValue={props.nome}
            />
            <Text>Telefone</Text>
            <TextInput
                style={styles.inputContato}
                placeholder="Telefone"
                onChangeText={telefone => setTelefone(telefone)}
                defaultValue={props.telefone}
            />
        </View>
    );
}

export default InputAgenda;

