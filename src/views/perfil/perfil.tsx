
import { FlatList, Image, ImageProps, StyleSheet, Text, useWindowDimensions, View, Pressable, ScrollView } from 'react-native';
import CardComponent from '../../components/card/cardComponent';
import Icon from '@react-native-vector-icons/fontawesome6';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

interface CardPerfil {
    name: string;
    id: number;
    icon: ImageProps;
    state: boolean;
}

function Perfil() {
    const navigation = useNavigation<any>();
    const { width, height } = useWindowDimensions();
    const icon1 = require("../../assets/Settings.png");
    const icon2 = require("../../assets/Icon(12).png");
    const icon3 = require("../../assets/Icon(4).png");
    const icon4 = require("../../assets/Icon(5).png");
    const icon5 = require("../../assets/Icon(6).png");
    const icon6 = require("../../assets/Icon(7).png");
    const icon7 = require("../../assets/Icon(9).png");
    const icon8 = require("../../assets/Icon(8).png");
    const icon9 = require("../../assets/Icon(13).png");
    const icon10 = require("../../assets/Icon(10).png");

    const symptoms: CardPerfil[] = [
        { name: 'Configurações', id: 1, icon: icon1, state: false },
        { name: 'Assinatura', id: 2, icon: icon2, state: false },
        { name: 'Tratamentos', id: 3, icon: icon3, state: true },
        { name: 'Consultas', id: 4, icon: icon4, state: true },
        { name: 'Insights', id: 5, icon: icon5, state: false },
        { name: 'Dispositivos', id: 6, icon: icon6, state: false },
        { name: 'Tema', id: 7, icon: icon7, state: false },
        { name: 'Políticas de uso', id: 8, icon: icon8, state: false },
        { name: 'Ajuda', id: 9, icon: icon9, state: false },
        { name: 'Sair', id: 10, icon: icon10, state: true },
    ];


    return (
        <View style={[styles.container, { width: width, height: height - 78 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Icon
                        name="question"
                        size={20} color="#373638" iconStyle='solid'
                    />
                </View>
                <View style={styles.image}>
                    <Avatar.Image size={150} source={require("../../assets/Avatar(1).png")} style={styles.imageAvatar} />
                    <Text style={styles.title}>Judiscleia</Text>
                    <Text style={styles.subtitle}>Ela/Dela</Text>
                </View>
                <View style={[styles.card, { width: width * 0.9 }]}>
                    <FlatList
                        numColumns={2}
                        columnWrapperStyle={styles.contentColumn}
                        style={styles.list}
                        contentContainerStyle={styles.content}
                        showsVerticalScrollIndicator={false}
                        data={symptoms}
                        renderItem={({ item }) => (
                            <Pressable onPress={() => navigation.navigate(item.name === 'Sair' ? "Login" : item.name, {})}>
                                <CardComponent width={165} height={90} marginV={5} backgroundColor='#E8DEF8' type="contained">
                                    <View style={[styles.cardContent, !item.state === true ? { opacity: 0.3 } : { opacity: 1 }]}>
                                        <Image source={item.icon} width={15} height={15} />
                                        <Text style={styles.textCard}>{item.name}</Text>
                                    </View>
                                </CardComponent>
                            </Pressable>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        alignSelf: 'flex-end',
        backgroundColor: "#E8DEF8",
        borderRadius: 20,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    image: {
        alignSelf: 'center',
        marginTop: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        color: "#696666"
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentColumn: {
        gap: 15
    },
    content: {
        marginVertical: "auto",
        alignItems: 'center',
    },
    list: {
        marginTop: 20
    },
    cardContent: {
        gap: 15,
        padding: 16
    },
    textCard: {
        fontSize: 14,
        fontWeight: '500'
    },
    imageAvatar: {}

});

export default Perfil;
