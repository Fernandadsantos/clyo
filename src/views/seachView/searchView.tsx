import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import SearchInput from '../../components/searchInput/searchInput';
// import Btn from '../../components/btn/btn';
// import { useState } from 'react';

function SearchView() {
    const { height } = useWindowDimensions();
    // const [activeButtonId, setActiveButtonId] = useState<string | null>("btn1");
    // const BTN_CONFIG = [
    //     { id: 'btn1', text: 'Fóruns' },
    //     { id: 'btn2', text: 'Conteúdos' },
    // ];

    return (
        <View style={[styles.container, { height: height - 60 }]}>
            <SearchInput />
            {/* <View style={styles.btns}>
                {
                    BTN_CONFIG.map((btn) => (
                        <View key={btn.id}>
                            <Btn
                                text={btn.text}
                                height={40}
                                width={120}
                                isActive={activeButtonId === btn.id}
                                onPress={() => setActiveButtonId(btn.id)}
                            />
                        </View>
                    ))
                }
            </View> */}
            {
                <View style={styles.msg}>
                    <Text style={styles.msgText}>Esta função ainda não está disponível :/</Text>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        backgroundColor: "#e8def8",
        paddingLeft: 10,
        fontSize: 18
    },
    iconInput: {
        position: 'absolute'
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 25,
        gap: 20,
        alignItems: 'center',
    },
    msg: {
        alignItems: 'center',
        margin: 'auto'
    },
    msgText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#301F58'
    }

});

export default SearchView;
