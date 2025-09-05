
import { Text, useWindowDimensions, View, StyleSheet } from 'react-native';
import CardComponent from '../card/cardComponent';
import Icon from '@react-native-vector-icons/fontawesome6';
import { Avatar } from 'react-native-paper';
import ReadMore from '@fawazahmed/react-native-read-more';

function ContentCard() {
    const { width } = useWindowDimensions();

    return (
        <View >
            <CardComponent width={width * 0.87} justifyContent="flex-start">
                <View style={styles.card}>
                    <View style={[styles.header, { width: width * 0.79 }]}>
                        <View style={styles.infosHeader}>
                            <View>
                                <Avatar.Text size={45} label="A" style={{ backgroundColor: "#E8DEF8" }} color='#000' />
                            </View>
                            <View>
                                <Text>Ana Luíza</Text>
                                <Text>Ginecologista</Text>
                            </View>
                        </View>
                        <Icon
                            name="ellipsis-vertical"
                            size={20} color="#373638" iconStyle='solid'
                        />
                    </View>
                    <View style={[styles.player, { width: width * 0.87 }]}>
                        <Icon
                            name="play"
                            size={20} color="#373638" iconStyle='solid'
                        />
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.title}>Sintomas de SOP</Text>
                        <Text style={styles.subtitle}>Sindromes hormonais</Text>
                        <ReadMore
                            seeMoreStyle={{ color: '#875aec' }}
                            seeLessStyle={{ color: '#875aec' }}
                            seeLessText="Ler menos"
                            seeMoreText="Ler mais"
                            numberOfLines={3}
                            style={styles.descriptionReadMore}>
                            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
                        </ReadMore>
                    </View>
                </View>
            </CardComponent>
        </View >
    );
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    infosHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    player: {
        height: 168,
        justifyContent: 'center',
        backgroundColor: '#E8DEF8',
        alignItems: 'center'
    },
    description: {
        paddingVertical: 15,
        paddingLeft: 20
    },
    title: {
        fontSize: 18,
        fontWeight: "500"
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "400",
        color: "#49454F",
        paddingBottom: 10
    },
    descriptionReadMore: {
        fontWeight: '400'
    }

});

export default ContentCard;
