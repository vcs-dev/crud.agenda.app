import React, { useState } from 'react';
import { Alert, Button } from 'react-native';

const BotaoExcluirContato = (props) => {
    const [habilitado, setHabilitado] = useState(false);
    return (
        <Button
            onPress={() => {
                props.agenda.splice(props.agenda.indexOf(props.nomeContato), 1);
                Alert.alert('Contato ' + props.nomeContato + ' excluído com sucesso!');
                if(props.agenda.length === 0)
                    setHabilitado(false);
            }}
            title="Excluir contato"
            color="#309cb8"
            accessibilityLabel="Botão para excluir contato"
            disabled={!props.habilitado}
        />
    )
};

export default BotaoExcluirContato;