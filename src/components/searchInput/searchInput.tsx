import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';
import { TextInput } from 'react-native-paper';

function SearchInput() {
    const [textIntput, setTextInput] = useState<string>("");

    return (
        <View style={styles.container}>
            <TextInput
                mode='outlined'
                placeholder='Título'
                value={textIntput}
                onChangeText={text => setTextInput(text)}
                style={styles.input}
                outlineStyle={{ borderColor: "#E0E0E0", borderWidth: 1, borderRadius: 30 }}
                placeholderTextColor={"#0f0f0fff"}
            />
            <Pressable style={styles.iconInput}>
                <Icon
                    name="magnifying-glass"
                    size={20} color="#373638" iconStyle='solid'
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: "#e8def8",
        paddingLeft: 10,
        fontSize: 18
    },
    iconInput: {
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingRight: 20
    }

});

export default SearchInput;
