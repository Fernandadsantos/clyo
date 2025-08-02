import { StatusBar, StyleSheet, Text, useColorScheme, useWindowDimensions, View } from 'react-native';
import ProfileShortcut from '../../components/profileShortcut/profileShortcut';

function Home() {
    const isDarkMode = useColorScheme() === 'dark';
    const { width, height } = useWindowDimensions();

    return (
        <View style={[styles.container, { width: width, height: height }]}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={[styles.header, { gap: width / 6 }]}>
                <View >
                    <ProfileShortcut image={null} firstLetter='J' />
                </View>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Olá, Judiscleia</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 30,
        backgroundColor: "#FFF",
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',

    }
});

export default Home;
