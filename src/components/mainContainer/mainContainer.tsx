import { FlatList, StyleSheet, useWindowDimensions, View, Pressable } from 'react-native';
import Icons from '../icons/icons';

function MainContainer() {
    const { width, height } = useWindowDimensions();
    const dropImage = require('../../assets/drop.png');
    const appImage = require('../../assets/image.png');
    const sleepImage = require('../../assets/sleep.png');
    const mediImage = require('../../assets/medi.png');
    const stomachImage = require('../../assets/stomach.png');
    const plusImage = require('../../assets/plus.png');

    const symptoms = [
        { name: 'Sangramento', id: 1, image: dropImage },
        { name: 'Disposição', id: 2, image: appImage },
        { name: 'Sono', id: 3, image: sleepImage },
        { name: 'Medicação', id: 4, image: mediImage },
        { name: 'Cólica', id: 5, image: stomachImage },
        { name: 'Ver mais', id: 6, image: plusImage },
    ];

    return (
        <View style={[styles.container, { width: width * 0.88, height: height * 0.33 }]}>
            <FlatList
                numColumns={3}
                columnWrapperStyle={styles.contentColumn}
                style={styles.list}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
                data={symptoms}
                renderItem={({ item }) => (
                    <Pressable>
                        <Icons name={item.name} image={item.image} />
                    </Pressable>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E8DEF8",
        borderRadius: 15,
        margin: 'auto'
    },
    contentColumn: {
        gap: 30
    },
    list: {
        margin: 'auto',
    },
    content: {
        marginVertical: "auto",
        alignItems: 'center',
        rowGap: 30
    }
});

export default MainContainer;
