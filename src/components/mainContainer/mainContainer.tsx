import { FlatList, StyleSheet, useWindowDimensions, View, Pressable, ImageSourcePropType } from 'react-native';
import Icons from '../icons/icons';
import { useState } from 'react';


interface SymptomsProps {
    name: string;
    id: number;
    image: ImageSourcePropType;
}

function MainContainer() {
    const { width, height } = useWindowDimensions();
    const dropImage = require('../../assets/drop.png');
    const appImage = require('../../assets/image.png');
    const sleepImage = require('../../assets/sleep.png');
    const mediImage = require('../../assets/medi.png');
    const stomachImage = require('../../assets/stomach.png');
    const plusImage = require('../../assets/plus.png');
    const lessImage = require('../../assets/icons8-subtração-60.png');
    const happy = require('../../assets/icons8-feliz-64.png');
    const exercism = require('../../assets/exercicio.png');
    const digestao = require('../../assets/icons8-digestão-50.png');
    const pain = require('../../assets/icons8-pain-32.png');
    const balao = require('../../assets/icons8-balão-80.png');
    const acne = require('../../assets/icons8-acne-50.png');
    const [isOpen, setIsOpen] = useState<boolean>(false);


    let symptoms: SymptomsProps[] = [
        { name: 'Sangramento', id: 1, image: dropImage },
        { name: 'Disposição', id: 2, image: appImage },
        { name: 'Sono', id: 3, image: sleepImage },
        { name: 'Medicação', id: 4, image: mediImage },
        { name: 'Cólica', id: 5, image: stomachImage },
        { name: 'Ver mais', id: 6, image: plusImage },
        { name: 'Exercícios', id: 7, image: exercism },
        { name: 'Digestão', id: 8, image: digestao },
        { name: 'Dores', id: 9, image: pain },
        { name: 'Inchaço', id: 10, image: balao },
        { name: 'Acne', id: 11, image: acne },
        { name: 'Ver menos', id: 12, image: lessImage },
    ];

    const symptomsToDisplay = isOpen
        ? symptoms.map(item => {
            if (item.id === 6) {
                return { id: 13, name: 'Humor', image: happy };
            }
            return item;
        })
        : symptoms.filter(item => item.id < 7);



    const toggleDropDown = (item: SymptomsProps) => {

        if (item.id === 6 || item.id === 12) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <View style={[styles.container, { width: width * 0.88 }, isOpen ? { height: height * 0.65 } : { height: height * 0.32 }]}>
            <FlatList
                numColumns={3}
                columnWrapperStyle={styles.contentColumn}
                style={styles.list}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
                data={symptomsToDisplay}
                renderItem={({ item }) => (
                    <Pressable onPress={() => toggleDropDown(item)}>
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
    },
});

export default MainContainer;
