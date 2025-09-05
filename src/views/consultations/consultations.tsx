
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@react-native-vector-icons/fontawesome6';


function Consulations() {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon
                    name="chevron-left"
                    size={20} color="#373638"
                    iconStyle='solid'
                    onPress={() => navigation.goBack('Perfil')}
                />
                <Text style={styles.title}>Consultas</Text>
            </View>
            <Text style={styles.msg}>Você ainda não tem consultas cadastradas</Text>
            {/* <CardConsulations title='consulta x' width={width * 0.85} height={height * 0.15} /> */}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    title: {
        marginHorizontal: 'auto',
        fontSize: 19,
        fontWeight: '600',
    },
    msg: {
        marginVertical: 'auto',
        marginHorizontal: 'auto',
        fontSize: 17,
        fontWeight: '400'
    }

});

export default Consulations;
