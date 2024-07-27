import { useState } from "react";
import { Dimensions, FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { ItemSelect } from "./ItemSelect";

export const Select = ({ title, onChangeSelect, options }) => {

    const [txt, setTxt] = useState(title);
    const [selected, setSelected] = useState('');
    const [visibleModal, setVisibleModal] = useState(false);


    return (
        <>
            <TouchableOpacity
                style={styles.selectField}
                onPress={() => setVisibleModal(true)}
            >
                <Text style={styles.txt} numberOfLines={1}>{txt}</Text>
                <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
            </TouchableOpacity>
            <Modal visible={visibleModal} animationType="slide">
                <View style={styles.headerSelect}>
                    <View style={[styles.itemHeader, { alignItems: 'flex-start' }]}>
                        <TouchableOpacity onPress={() => setVisibleModal(false)}>
                            <MaterialIcons name="chevron-left" size={26} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.itemHeader, { alignItems: 'center' }]}>
                        <Text>{txt}</Text>
                    </View>
                    <View style={[styles.itemHeader, { alignItems: 'flex-end' }]}>
                        <TouchableOpacity onPress={() => setVisibleModal(false)}>
                            <Text style={{ fontWeight: '900' }}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={options || []}
                    renderItem={({ item }) => <ItemSelect
                        item={item}
                        key={item.id}
                        change={() => {
                            setVisibleModal(false);
                            setTxt(item.name);
                            setSelected(item.id);
                            onChangeSelect(item.id);
                        }}
                        selected={selected}
                    />}
                    keyExtractor={item => item.id}
                />
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    selectField: {
        height: 50,
        backgroundColor: '#F8F9FA',
        paddingHorizontal: 15,
        width: '100%',
        fontSize: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 5,
    },
    headerSelect: {
        borderBottomWidth: 1,
        borderColor: '#9E9E9E',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemHeader: {
        flex: 1,
        alignItems: 'center',
    },
    txt: {
        fontSize: 16,
        color: '#555',
        width: Dimensions.get('window').width - 94
    }
});