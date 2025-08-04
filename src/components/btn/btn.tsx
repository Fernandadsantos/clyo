
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

interface BtnProps {
    text: string;
    height: number;
    width: number;
    isActive: boolean;
    onPress: () => void;
}

function Btn({ text, height, width, isActive, onPress }: BtnProps) {
    const textColor = isActive ? "#875aec" : "#fff";
    const backColor = isActive ? "#e8def8" : "#875aec";

    return (
        <View >
            <Button mode="elevated"
                style={[styles.btn, { height: height, backgroundColor: backColor, width: width }]}
                onPress={() => onPress()}
                textColor={textColor}
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
