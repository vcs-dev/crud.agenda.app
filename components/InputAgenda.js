import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from './Styles';
import BotaoSalvarContato from './BotaoSalvarContato';
import BotaoAtualizarContato from './BotaoAtualizarContato';
import BotaoExcluirContato from './BotaoExcluirContato';

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
            {props.operacao === "criar" ?
                <BotaoSalvarContato
                    nome={nome}
                    telefone={telefone}
                    agenda={props.agenda}
                /> : null}
            {props.operacao === "editar" ?
                <BotaoAtualizarContato
                    nome={nome}
                    telefone={telefone}
                    agenda={props.agenda}
                    posicao={props.posicao}
                />
                : null}
            {props.operacao === "editar" ?
                <BotaoExcluirContato
                    nome={nome}
                    telefone={telefone}
                    agenda={props.agenda}
                    posicao={props.posicao}
                /> : null}
        </View>
    );
}

export default InputAgenda;

