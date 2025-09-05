import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';
import CardComponent from '../card/cardComponent';

function CardInsight() {
    const { width, height } = useWindowDimensions();

    return (
        <View  >
            <CardComponent width={width * 0.88} height={height * 0.1} type='outlined'>
                <View style={styles.card_content}>
                    <View style={styles.iconContainer}>
                        <Icon name="lightbulb" size={20} color="#301F58" iconStyle='solid' />
                    </View>
                    <View>
                        <Text style={[styles.text_card, { width: width * 0.7 }]}>A funcionalidade de Insights ainda não está disponível</Text>
                    </View>
                    {/* <View>
                        <Icon name="arrow-right" size={25} color="#875AEC" iconStyle='solid' />
                    </View> */}
                </View>
            </CardComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    card_content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 16
    },
    text_card: {
        fontSize: 15,
        fontWeight: '600'
    },
    iconContainer: {
        backgroundColor: "#dfd0f8ff",
        height: 38,
        width: 38,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CardInsight;
