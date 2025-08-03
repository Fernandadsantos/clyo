import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import { ReactNode } from 'react';

interface CardParams {
    children: ReactNode;
    width: number;
    height: number;
    type?: 'elevated' | 'outlined' | 'contained' | undefined;
}

function CardComponent({ children, width, height, type }: CardParams) {

    return (
        <View >
            <Card mode={type} style={[
                styles.card,
                { width: width, height: height }
            ]}>
                <Card.Content style={styles.text_card}>
                    {
                        children ??
                        (
                            children
                        )
                    }
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#E8DEF8",
        justifyContent: 'center',
        margin: 'auto',
        marginVertical: 20
    },
    text_card: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default CardComponent;
