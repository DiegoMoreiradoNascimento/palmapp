import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/userSlice";
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from "../../components/Button";
import { useState } from "react";
import { TableMap } from '../../components/TableMap';
import { Select } from "../../components/Select";

export const NewTableScreen = ({ navigation: { navigate } }) => {
    const [numTable, setNumTable] = useState(null);

    const dispatch = useDispatch();
    const { name } = useSelector(selectUser);

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleLogout}>
                    <MaterialIcons name="logout" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Nova Mesa</Text>
                <TouchableOpacity onPress={() => console.log('Atualizar')}>
                    <MaterialIcons name="update" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.headerInfo}>
                <Text>{name}</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.inlineBetween}>
                    <View style={{ width: '15%' }}>
                        <Text>Mesa</Text>
                    </View>
                    <View style={{ width: '45%' }}>
                        <TextInput style={styles.input} placeholder="Número" keyboardType="numeric" onChangeText={(text) => setNumTable(text)} />
                    </View>
                    <View style={{ width: '20%' }}>
                        <Button title={'Ok'} bgColor={'green'} onPress={() => {
                            navigate('ProductsSelect', { numTable });
                        }} disabled={!numTable} />
                    </View>
                </View>
                <Select
                    title={'Filtrar Mesas'}
                    options={[
                        { id: 1, name: 'Todas Mesas' },
                        { id: 2, name: 'Mesas Ativas' }
                    ]} onChangeSelect={(id) => console.log(id)} />
                <TableMap />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#9E9E9E',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        paddingHorizontal: 15

    },
    titleHeader: {
        fontSize: 17,
        fontWeight: '700',
    },
    headerInfo: {
        borderBottomWidth: 1,
        borderBottomColor: '#9E9E9E',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CCC',
        paddingVertical: 3
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        gap: 20,
        paddingTop: 20
    },
    inlineBetween: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
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
        textAlign: 'center'
    }
});