import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from '@react-native-vector-icons/fontawesome6';

interface CardParams {
    title: string;
    subtitle: string;
}

function OptionCard({ title, subtitle }: CardParams) {
    const { width, height } = useWindowDimensions();

    return (
        <View >
            <Card mode='elevated' style={[styles.card, { width: width * 0.81, height: height * 0.12 }]}>
                <Card.Content style={styles.text_card}>
                    <View style={{ gap: 5 }}>
                        <Text style={{ color: "#301F58", fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
                        <Text style={{ color: "#301F58", fontSize: 14, fontWeight: '500', width: width * 0.68 }}>{subtitle}</Text>
                    </View>
                    <View>
                        <Icon name="arrow-right" size={20} color="#301F58" iconStyle='solid' />
                    </View>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#E8DEF8",
        justifyContent: 'center'
    },
    text_card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default OptionCard;
