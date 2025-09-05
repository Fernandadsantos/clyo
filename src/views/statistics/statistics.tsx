
import { StyleSheet, Text, View } from 'react-native';

function Statistics() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>A função de estatísticas ainda não está disponível.</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 'auto',
        marginVertical: 'auto'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
        color: '#4e3588ff'
    },

});

export default Statistics;
