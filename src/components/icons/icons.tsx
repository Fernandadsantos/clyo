import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

interface IconsParams {
    name: string;
    image: ImageSourcePropType;
}

function Icons({ name, image }: IconsParams) {

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Image source={image} style={{ width: 40, height: 40 }} />
            </View>
            <Text style={styles.text_icon}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    icon: {
        backgroundColor: "#875AEC",
        borderRadius: 50,
        width: 85,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_icon: {
        fontSize: 14,
        fontWeight: '500'
    }

});

export default Icons;
