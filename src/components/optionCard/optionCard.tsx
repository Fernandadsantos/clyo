import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';
import CardComponent from '../card/cardComponent';

interface OptionCardParams {
    title: string;
    subtitle: string;
}

function OptionCard({ title, subtitle }: OptionCardParams) {
    const { width, height } = useWindowDimensions();

    return (
        <View >
            <CardComponent width={width * 0.81} height={height * 0.12} type='elevated'>
                <View style={{ gap: 5 }}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={[styles.subtitle, { width: width * 0.68 }]}>{subtitle}</Text>
                </View>
                <View>
                    <Icon name="chevron-right" size={20} color="#301F58" iconStyle='solid' />
                </View>
            </CardComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: "#301F58",
        fontSize: 18,
        fontWeight: 'bold'
    },
    subtitle: {
        color: "#301F58",
        fontSize: 14,
        fontWeight: '500',
    }
});

export default OptionCard;
