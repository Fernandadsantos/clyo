import { StyleSheet, Text, View } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';

interface CardConsulationsProps {
    height: number;
    width: number;
    title: string;

}

function CardConsulations({ height, width }: CardConsulationsProps) {

    return (
        <View style={[styles.container, { width: width, height: height }]}>
            <View>
                <Text>Consulta ginecológica </Text>
            </View>
            <View>
                <Icon
                    name="calendar"
                    size={30} color="#6750A4"
                    iconStyle='solid'
                />
                <Text>Data: </Text>
                <Text>Horário: </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dfd1f7ff",
        borderRadius: 10,
        marginHorizontal: 'auto',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },

});

export default CardConsulations;
