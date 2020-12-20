import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Button, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import InputAgenda from './components/InputAgenda';
import styles from './components/Styles';

let agenda = []

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
        color="#309cb8"
        onPress={() => navigation.navigate('Novo contato')}
      />
      <View style={{ margin: 1 }}>
        {agenda.length > 0 ? <Button
          onPress={() => {
            navigation.navigate('Lista de contatos', { refresh: ListarContatosScreen })
          }}
          title="Exibir contatos"
          color="#309cb8"
          accessibilityLabel="Botão para salvar um contato na agenda"
        /> : null}
      </View>
    </View>
  );
}

function DetalheContatosScreen({ route }) {
  const contato = route.params;
  let posicao = agenda.indexOf(contato)
  return (
    <View style={styles.container}>
      <InputAgenda
        agenda={agenda}
        nome={contato.nome}
        telefone={contato.telefone}
        operacao={"editar"}
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

  return (
    <View style={styles.container}>
      <View style={{ padding: 40 }}>
        <InputAgenda
          agenda={agenda}
          operacao={"criar"}
        />
        <View style={styles.containerBotao}>
          <Button
            onPress={() => {
              navigation.navigate('Agenda - Home', { refresh: HomeScreen });
            }}
            title="Voltar"
            color="#309cb8"
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

