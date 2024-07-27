import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export const ItemSelect = ({ item, change, selected }) => {
    return (
        <TouchableOpacity style={styles.optionContainer} onPress={() => change()}>
            <Text>{item.name}</Text>
            {selected === item.id && <MaterialIcons name="check" size={24} color="green" />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    optionContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#EEE',
        paddingHorizontal: 15
    }
});