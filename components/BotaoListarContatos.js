import React from 'react';
import { Button, FlatList, View } from 'react-native';

const BotaoListarContatos = (props) => {
    return (
        <Button
            onPress={() => {
                var listaNomes = []
                for (const key in props.agenda) {
                    listaNomes.push(key.nome);
                }
                <View>
                    <FlatList>
                        data={listaNomes}
                    </FlatList>
                    renderItem={({item}) => <Text>{item.key}</Text>}
                </View>
            }}
            title="Listar contatos"
            color="#309cb8"
            accessibilityLabel="Botão para listar contatos da agenda"
        />
    )
};

export default BotaoListarContatos;