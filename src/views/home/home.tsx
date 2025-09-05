import { StatusBar, StyleSheet, Text, useColorScheme, useWindowDimensions, View, ScrollView, Pressable } from 'react-native';
import MainContainer from '../../components/mainContainer/mainContainer';
import CardInsight from '../../components/cardInsight/cardInsight';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import CircularProgress from '../../components/circularProgress/circularProgress';


function Home() {
    const isDarkMode = useColorScheme() === 'dark';
    const { width, height } = useWindowDimensions();
    const navigation = useNavigation<any>();
    const currentDay = 1;
    const totalCycleDays = 35;
    const progress = (currentDay / totalCycleDays) * 100;

    return (
        <View style={[styles.container, { width: width, height: height - 78 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <View style={[styles.header, { marginTop: 40 }]}>
                    <Pressable style={{ position: 'absolute', width }} onPress={() => navigation.navigate("Perfil", {})}>
                        <Avatar.Text size={45} label="J" />
                    </Pressable>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginHorizontal: "auto" }}>Olá, Judiscleia!</Text>
                </View>
                <View style={styles.cycle}>
                    <CircularProgress
                        size={200}
                        strokeWidth={20}
                        progress={progress}
                        backgroundColor="#e8dff5"
                        progressColor="#6750A4"
                    >
                        <Text style={styles.progressText}>Dia {currentDay} do ciclo</Text>
                    </CircularProgress>
                </View>
                <View>
                    <Text style={styles.textContainer}>Como você está se sentindo hoje?</Text>
                    <MainContainer />
                </View>
                <View>
                    <CardInsight />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
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
        paddingBottom: 10,
    },
    progressText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#6a1b9a',
    },
});

export default Home;
