import { StyleSheet, Text, View } from 'react-native';

interface ProfileShortcutParams {
    image: string | null;
    firstLetter: string;
}

function ProfileShortcut({ firstLetter }: ProfileShortcutParams) {

    return (
        <View style={styles.container}>
            <Text style={styles.letter}>{firstLetter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        backgroundColor: "#301F58",
        borderRadius: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    letter: {
        color: "#a180ecff",
        fontSize: 28,
        fontWeight: 'bold',
    }
});

export default ProfileShortcut;
