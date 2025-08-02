import { useState } from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, useWindowDimensions, View } from 'react-native';
import { Button, Divider, TextInput } from 'react-native-paper';

function Register() {
    const isDarkMode = useColorScheme() === 'dark';
    const [textIntput, setTextInput] = useState("");
    const { width, height } = useWindowDimensions();

    return (
        <View style={[styles.container, { width: width * 0.9, height: height * 0.5 }]}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.text_box}>
                <Text style={[styles.text, styles.title]}>Clyo</Text>
                <View>
                    <View style={styles.subtitles}>
                        <Text style={[styles.text, styles.subtitle1]}>Crie uma conta</Text>
                        <Text style={[styles.text, styles.subtitle2]}>Entre com seu e-mail para se cadastrar</Text>
                    </View>
                    <View style={styles.text_input}>
                        <TextInput
                            mode='outlined'
                            placeholder='exemplo@gmail.com'
                            value={textIntput}
                            onChangeText={text => setTextInput(text)}
                            style={styles.input}
                            outlineStyle={{ borderColor: "#E0E0E0", borderWidth: 1, borderRadius: 10 }}
                            placeholderTextColor={"#8d8d8dff"}
                        />
                        <Button mode='contained' style={{ borderRadius: 10 }} >
                            Continue
                        </Button>
                    </View>
                    <View style={[styles.divider_item, { alignItems: 'center' }]}>
                        <Divider horizontalInset={true} style={{ height: 1, width: 100 }} />
                        <Text style={{ color: "#8d8d8dff" }}>Ou</Text>
                        <Divider horizontalInset={true} style={{ height: 1, width: 100 }} />
                    </View>
                    <View style={{ gap: 5 }}>
                        <Button mode='contained' style={styles.btn} textColor="#000">
                            Continue com Google
                        </Button>
                        <Button mode='contained' style={styles.btn} textColor="#000">
                            Continue com Apple
                        </Button>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 20 }}>
                            Ao clicar em continuar, você concorda com nossos <Text style={{ fontWeight: '700' }}>Termos de Serviço </Text>
                            e <Text style={{ fontWeight: '700' }}>Política de Privacidade</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 'auto',
        justifyContent: 'center',
        padding: 20
    },
    text_box: {
        gap: 60
    },
    subtitles: {
        gap: 10,
        paddingBottom: 20
    },
    text: {
        color: "#4F378A",
        textAlign: 'center',
    },
    title: {
        fontSize: 64,
        fontWeight: 'bold'
    },
    subtitle1: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    subtitle2: {
        fontSize: 14,
        fontWeight: '400'
    },
    text_input: {
        gap: 15,
    },
    input: {
        height: 45,
    },
    divider_item: {
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        borderRadius: 10,
        backgroundColor: "#e8def85d",
    }
});

export default Register;
