import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import { ReactNode } from 'react';

interface CardParams {
    children: ReactNode;
    width: number;
    height?: number;
    type?: 'elevated' | 'outlined' | 'contained' | undefined;
    marginV?: number;
    backgroundColor?: string;
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    paddingHorizontal?: number;
}

function CardComponent({ children, width, height, type, marginV, backgroundColor, justifyContent, paddingHorizontal }: CardParams) {

    return (
        <View >
            <Card mode={type} style={[
                styles.card,
                { width: width, height: height !== undefined ? height : 'auto', backgroundColor: backgroundColor !== undefined ? backgroundColor : "#fef7ff" },
                { marginVertical: marginV !== undefined ? marginV : 20 },
                { justifyContent: justifyContent !== undefined ? justifyContent : "center" }
            ]}>
                <Card.Content style={[styles.text_card, { paddingHorizontal: paddingHorizontal !== undefined ? paddingHorizontal : 0 }]}>
                    {
                        children ??
                        (
                            children
                        )
                    }
                </Card.Content>
            </Card>
        </View >
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 'auto',
    },
    text_card: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 0,
    }
});

export default CardComponent;
