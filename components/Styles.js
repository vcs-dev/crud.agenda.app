import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContato: {
        height: 40,
        width: 180,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#bebebe',
        borderRadius: 4,
        margin: 1,
        padding: 5
    },
    containerBotao: {
        margin: 1
    },
    itemLista: {
        backgroundColor: '#33cccc',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    tituloLista: {
        fontSize: 32
    }
});

export default styles