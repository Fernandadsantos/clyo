import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Button, Snackbar, TextInput } from 'react-native-paper';
import Icon from '@react-native-vector-icons/fontawesome6';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function Login() {
    const { width, height } = useWindowDimensions();
    const navigation = useNavigation<any>();
    const [emailIntput, setEmailInput] = useState("");
    const [password, setPassword] = useState("");
    const [showInput, setShowInput] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const checkLogin = () => {

        if (emailIntput === 'exemplo@gmail.com' && password === 'exemplo123') {
            navigation.navigate("Home", {})
        }
        else {
            onToggleSnackBar()
        }
    }

    return (
        <View style={[styles.container, { width: width * 0.9, height: height * 0.5 }]}>
            <View style={styles.text_box}>
                <Text style={[styles.text, styles.title]}>Clyo</Text>
                <View>
                    <View style={styles.subtitles}>
                        <Text style={[styles.text, styles.subtitle1]}>Entre na sua conta e comece a monitorar seu ciclo</Text>
                    </View>

                    <View style={{ gap: 15 }}>
                        {
                            !showInput ?
                                (
                                    <View style={styles.text_input}>
                                        <Button mode='contained' style={{ borderRadius: 10 }} onPress={() => setShowInput(!showInput)}>
                                            Entrar com o e-mail
                                        </Button>
                                        <Button mode='contained' style={styles.btn} textColor="#000" >
                                            <Text ><Icon name='google' size={19} iconStyle='brand' />  Continue com Google</Text>
                                        </Button>
                                        <Button mode='contained' style={styles.btn} textColor="#000">
                                            <Text><Icon name='apple' size={21} iconStyle='brand' />  Continue com Apple</Text>
                                        </Button>
                                    </View>
                                )
                                :
                                <View style={styles.text_input}>
                                    <TextInput
                                        mode='outlined'
                                        placeholder='E-mail'
                                        value={emailIntput}
                                        onChangeText={text => setEmailInput(text)}
                                        style={styles.input}
                                        outlineStyle={{ borderColor: "#E0E0E0", borderWidth: 1, borderRadius: 10 }}
                                        placeholderTextColor={"#8d8d8dff"}
                                    />
                                    <TextInput
                                        mode='outlined'
                                        placeholder='Senha'
                                        secureTextEntry={true}
                                        value={password}
                                        onChangeText={text => setPassword(text)}
                                        style={styles.input}
                                        outlineStyle={{ borderColor: "#E0E0E0", borderWidth: 1, borderRadius: 10 }}
                                        placeholderTextColor={"#8d8d8dff"}
                                    />
                                    <Button mode='contained' style={{ borderRadius: 10 }} onPress={() => checkLogin()}>
                                        Entrar
                                    </Button>
                                    <Button mode='contained' style={{ borderRadius: 10 }} onPress={() => setShowInput(!showInput)} >
                                        Voltar
                                    </Button>
                                </View>
                        }
                    </View>
                </View>
            </View>
            <View style={{ position: 'absolute', paddingTop: height * 0.9, width: width * 0.9 }}>
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'Entendido',
                    }}>
                    E-mail ou senhas errados
                </Snackbar>
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
        gap: 10
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
        backgroundColor: "#e8def8d3",
        gap: 20,
        alignContent: 'center'
    }
});

export default Login;
