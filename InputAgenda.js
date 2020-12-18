import React, { useState } from 'react';
import { Alert, Button, TextInput, View } from 'react-native';

let agenda = []

const InputAgenda = () => {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')

    return (
        <View style={{ padding: 40 }}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Nome"
                onChangeText={nome => setNome(nome)}
                defaultValue={nome}
            />
            <TextInput
                style={{ height: 40 }}
                placeholder="telefone"
                onChangeText={telefone => setTelefone(telefone)}
                defaultValue={telefone}
            />
            <Button
                onPress={() => {
                    var contato = { nome: nome, telefone: telefone }
                    contato.nome = nome;
                    contato.telefone = telefone;
                    agenda.push(contato)
                }}
                title="Salvar"
                color="#309cb8"
                
                accessibilityLabel="Botão para salvar um contato na agenda"
            />
            <Button
                onPress={() => {
                    Alert.alert(agenda.length === 0 ? "" : "Nome " + agenda[agenda.length - 1].nome + " Teletone: " + agenda[agenda.length - 1].telefone)
                }}
                title="Mostrar registro"
                color="#309cb8"
                accessibilityLabel="Botão para mostrar um registro da agenda"
            />
        </View>
    );
}

export default InputAgenda;