
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

interface BtnProps {
    text: string;
    height: number;
    width: number;
    isActive: boolean;
    onPress: () => void;
}

function Btn({ text, height, width, onPress }: BtnProps) {

    return (
        <View >
            <Button mode="elevated" disabled={true}
                style={[styles.btn, { height: height, backgroundColor: "#e3deecff", width: width }]}
                onPress={() => onPress()}
                textColor='#000000ff'
            >
                {text}
            </Button>
        </View >
    );
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 8,
    }

});

export default Btn;
