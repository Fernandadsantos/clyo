
import { Text, useWindowDimensions, View } from 'react-native';
import CardComponent from '../card/cardComponent';

// interface BtnProps {
//     text: string;
//     height: number;
//     width: number;
//     isActive: boolean;
//     onPress: () => void;
// }

function ContentCard() {
    const { width, height } = useWindowDimensions();

    return (
        <View >
            <CardComponent width={width * 0.87} height={height * 0.4}>
                <Text>texto</Text>
            </CardComponent>
        </View >
    );
}

// const styles = StyleSheet.create({
//     btn: {
//         borderRadius: 8,
//     }

// });

export default ContentCard;
