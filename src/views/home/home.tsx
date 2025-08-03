import { StatusBar, StyleSheet, Image, Text, useColorScheme, useWindowDimensions, View } from 'react-native';
import ProfileShortcut from '../../components/profileShortcut/profileShortcut';
import MainContainer from '../../components/mainContainer/mainContainer';
import CardInsight from '../../components/cardInsight/cardInsight';

function Home() {
    const isDarkMode = useColorScheme() === 'dark';
    const { width, height } = useWindowDimensions();

    return (
        <View style={[styles.container, { width: width, height: height }]}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={[styles.header]}>
                <View style={{ position: 'absolute', width }}>
                    <ProfileShortcut image={null} firstLetter='J' />
                </View>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginHorizontal: "auto" }}>Olá, Judiscleia!</Text>
            </View>
            <View style={styles.cycle}>
                <Image source={require("../../assets/cycle.png")} width={width} height={height} />
            </View>
            <View>
                <Text style={styles.textContainer}>Como você está se sentindo hoje?</Text>
                <MainContainer />
            </View>
            <View>
                <CardInsight />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        backgroundColor: "#FFF",
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
    },
    cycle: {
        alignSelf: "center",
        marginVertical: 40
    },
    textContainer: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: 'center',
        paddingBottom: 10
    }
});

export default Home;
