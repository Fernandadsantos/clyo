import { StatusBar, StyleSheet, Text, useColorScheme, useWindowDimensions, View } from 'react-native';
import OptionCard from '../../components/optionCard/optionCard';

function Trail() {
    const isDarkMode = useColorScheme() === 'dark';
    const { width, height } = useWindowDimensions();

    return (
        <View style={[styles.container, { width: width, height: height }]}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={[styles.elipse, {
                width: width, height: height * 0.45
            }]} />
            <View style={styles.text}>
                <Text style={[styles.text_default, { fontSize: 68 }]}>Clyo</Text>
                <Text style={[styles.text_default, { fontSize: 26, width: width * 0.8, textAlign: 'center', paddingBottom: 10 }]}>Um novo olhar para o seu bem-estar</Text>
                <Text style={[styles.text_default, { fontWeight: "400", fontSize: 16 }]}>Por onde você quer começar?</Text>
            </View>
            <View style={styles.cards}>
                <OptionCard title='Entender meu ciclo' subtitle='Quero registrar informações básicas sobre meu ciclo para entendê-lo melhor' />
                <OptionCard title='Monitorar condição' subtitle='Tenho suspeita ou diagnóstico de uma condição (endometriose, SOP, etc.)' />
                <OptionCard title='Acompanhar tratamento' subtitle='Quero acompanhar mudanças enquanto sigo um tratamento hormonal' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#4F378A"
    },
    elipse: {
        backgroundColor: "#301F58",
        borderBottomEndRadius: 180,
        borderBottomStartRadius: 300,
        transform: [{ scaleX: 1.3 }],
        position: 'absolute',
    },
    text: {
        alignItems: 'center',
        marginHorizontal: 'auto',
        paddingTop: 90,
        paddingBottom: 50,
        gap: 30,
    },
    text_default: {
        color: "#fff",
        fontWeight: "bold"
    },
    cards: {
        margin: 'auto',
    }

});

export default Trail;
