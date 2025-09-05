import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';

interface ModalProps {
    visible: boolean;
    hideModal: () => void;
}

function ModalSymptoms({ visible, hideModal }: ModalProps) {

    const { width, height } = useWindowDimensions();

    return (
        <View >
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={[styles.container, { width: width * 0.7, height: height * 0.3 }]}>
                    <Text>Example Modal.  Click outside this area to dismiss.</Text>
                </Modal>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff5e",
        margin: 'auto'
    },

});

export default ModalSymptoms;
