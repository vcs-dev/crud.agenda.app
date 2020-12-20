import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import InputAgenda from './components/InputAgenda';
import styles from './components/Styles';
import BotaoAtualizarContato from './components/BotaoAtualizarContato';
import { useLayoutEffect } from 'react';

let agenda = [
  {
    nome: "Jao",
    telefone: "921929192"
  }
]

const ItemLista = ({ contato, navigation }) => (
  <View style={styles.itemLista}>
    <Text style={styles.tituloLista}
      onPress={
        () => navigation.navigate("Detalhes do contato", contato)
      }>{contato.nome}</Text>
  </View>
);

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Novo contato"
        onPress={() => navigation.navigate('Novo contato')}
      />
      <View style={{ margin: 1 }}>
        {agenda.length > 0 ? <Button
          onPress={() => {
            navigation.navigate('Lista de contatos', { refresh: ListarContatosScreen })
          }}
          title="Exibir contatos"
          accessibilityLabel="Botão para salvar um contato na agenda"
        /> : null}
      </View>
    </View>
  );
}

function DetalheContatosScreen({ route, navigation }) {
  const contato = route.params;
  const posicao = agenda.indexOf(contato);

  return (
    <View style={styles.container}>
      <InputAgenda
        nome={contato.nome}
        telefone={contato.telefone}
      />
      <BotaoAtualizarContato 
        nome={InputAgenda.nome}
        telefone={InputAgenda.telefone}
        agenda={agenda}
        posicao={posicao}
      />
    </View>
  );
}

function ListarContatosScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <ItemLista
      contato={item}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={agenda}
        renderItem={renderItem}
        keyExtractor={item => item.telefone}
      />
    </View>
  );
}

function NovoContatoScreen({ navigation }) {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  return (
    <View style={styles.container}>
      <View style={{ padding: 40 }}>
        <TextInput
          style={styles.inputContato}
          placeholder="Nome"
          onChangeText={nome => setNome(nome)}
          defaultValue={nome}
        />
        <TextInput
          style={styles.inputContato}
          placeholder="Telefone"
          onChangeText={telefone => setTelefone(telefone)}
          defaultValue={telefone}
        />
        <View style={styles.containerBotao}>
          <Button
            onPress={() => {
              agenda.push({ nome: nome, telefone: telefone })
              if (agenda.length > 0) {
                HomeScreen
              }
            }}
            title="Salvar"
            accessibilityLabel="Botão para salvar um contato na agenda"
          />
        </View>
        <View style={styles.containerBotao}>
          <Button
            onPress={() => {
              navigation.navigate('Agenda - Home', { refresh: HomeScreen });
            }}
            title="Voltar"
            accessibilityLabel="Botão para voltar para a home"
          />
        </View>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Agenda - Home" component={HomeScreen} />
        <Stack.Screen name="Novo contato" component={NovoContatoScreen} />
        <Stack.Screen name="Lista de contatos" component={ListarContatosScreen} />
        <Stack.Screen name="Detalhes do contato" component={DetalheContatosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

