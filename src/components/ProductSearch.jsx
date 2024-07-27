import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from './Button';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../redux/productsSlice';

export const ProductSearch = ({ goBack, onSelect }) => {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [inputSearchVisible, setInputSearchVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { data: { categories, products } } = useSelector(selectProducts);

    useEffect(() => {
        if (selectedCategory) {
            filter(selectedCategory)
        } else {
            setFilteredProducts([]);
        }
    }, [selectedCategory]);

    const filter = (categoryId) => {
        setFilteredProducts(products.filter(product => product.categoryId === categoryId));
    };

    return (
        <>
            <Button title={<MaterialIcons name="search" size={24} color="white" />} bgColor={'grey'} onPress={() => setModalIsVisible(true)} />
            <Modal visible={modalIsVisible}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => setModalIsVisible(false)}>
                    <MaterialIcons name="chevron-left" size={20} color="black" />
                </TouchableOpacity>
                <Text style={[styles.titleHeader, { flex: 1 }]}>Produtos</Text>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => setInputSearchVisible(true)}>
                    <Text style={{ fontWeight: '700', textAlign: 'right' }}>Buscar</Text>
                </TouchableOpacity>
            </View>
            {inputSearchVisible
                &&
                <View style={styles.inputSearchContainer}>
                    <TextInput placeholder='Digite algo...' style={{ paddingVertical: 10, paddingHorizontal: 20, borderBottomColor: '#9E9E9E', borderBottomWidth: 1 }} />
                    <MaterialIcons name="search" size={24} color="black" />
                </View>}
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: '40%', borderRightWidth: 1, borderColor: '#9E9E9E' }}>
                    <TouchableOpacity
                        style={[{
                            color: 'black', padding: 10, borderBottomWidth: 1, borderColor: '#9E9E9E',
                        }, { backgroundColor: selectedCategory ? '#fff0' : '#999' }]}

                        onPress={() => setSelectedCategory(null)}>
                        <Text>Todos</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={categories}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <TouchableOpacity style={[{ color: 'black', padding: 10 }, { backgroundColor: selectedCategory === item.id ? '#999' : '#fff0' }]}
                            onPress={() => setSelectedCategory(item.id)}
                        ><Text>{item.name}</Text></TouchableOpacity>}
                        ItemSeparatorComponent={() => <View style={{ borderTopWidth: 1, borderColor: '#9E9E9E' }} />}
                    />
                </View>
                <View style={{ width: '60%' }}>
                    <FlatList
                        data={filteredProducts.length > 0 ? filteredProducts : products}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <TouchableOpacity style={{ color: 'black', padding: 10 }} onPress={() => {
                            onSelect(item.id);
                            setModalIsVisible(false);
                        }}><Text>{item.name}</Text></TouchableOpacity>}
                        ItemSeparatorComponent={() => <View style={{ borderTopWidth: 1, borderColor: '#9E9E9E' }} />}
                    />
                </View>
            </View>
        </Modal >
        </>
    );
};

const styles = StyleSheet.create({
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
        textAlign: 'center'
    },
    inputSearchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingEnd: 20
    }
});