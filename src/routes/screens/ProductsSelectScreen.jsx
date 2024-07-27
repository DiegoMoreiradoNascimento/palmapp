import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from './../../components/Button';
import { ProductSearch } from './../../components/ProductSearch'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../redux/productsSlice";
import OrderItem from "../../components/OrderItem";
import { addProduct } from "../../redux/currentOrderSlice";

export const ProductsSelectScreen = ({ navigation: { goBack, navigate }, route }) => {

    const dispatch = useDispatch();
    const { data: { products } } = useSelector(selectProducts);
    const [selectedProductId, setSelectedProductId] = useState('');

    const [currentProduct, setCurrentProduct] = useState(null);
    const [dataToBeSent, setDataToBeSent] = useState({});

    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => goBack()}>
                    <MaterialIcons name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={[styles.titleHeader, { flex: 1 }]}>Produtos</Text>
                <View style={{ flex: 1 }} />
            </View>
            <View style={styles.headerInfo}>
                <Text>Mesa {route.params.numTable}</Text>
            </View>
            <View style={styles.content}>
                <View style={[styles.inlineBetween, { marginBottom: 20 }]}>
                    <View style={{ width: '50%' }}>
                        <TextInput style={styles.input} placeholder="Código do Produto" textAlign="center" keyboardType="numeric" value={`${selectedProductId}`} onChangeText={(text) => setSelectedProductId(text)} />
                    </View>
                    <View style={{ width: '20%' }}>
                        <Button title={'Ok'} bgColor={'green'} onPress={() => {
                            const prod = products.find(product => product.id == selectedProductId);
                            if (prod) {
                                setCurrentProduct(prod);
                            } else {
                                alert('Produto não encontrado!')
                            }
                        }} />
                    </View>
                    <View style={{ width: '20%' }}>
                        <ProductSearch goBack={goBack} onSelect={(id) => {
                            setSelectedProductId(id);
                            setCurrentProduct(products.find(product => product.id === id));
                        }} />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: currentProduct ? 'space-between' : 'flex-end', marginBottom: 20 }}>

                    {currentProduct ?
                        (<>
                            <View>
                                <OrderItem key={currentProduct.id} item={currentProduct} setDataToBeSent={setDataToBeSent} />
                            </View>
                            <Button
                                title={'Incluir'}
                                bgColor={'green'}
                                onPress={() => {
                                    setDataToBeSent({ ...dataToBeSent })
                                    dispatch(addProduct(dataToBeSent));
                                    setCurrentProduct(null);
                                    setSelectedProductId('');
                                    navigate('Checkout', { numTable: route.params.numTable });
                                }}
                            />
                        </>)
                        :
                        <>
                            <Button
                                title={'Ver Resumo'}
                                bgColor={'green'}
                                onPress={() => {
                                    navigate('Checkout', { numTable: route.params.numTable });
                                }}
                            />
                        </>

                    }
                </View>
            </View >
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
        paddingHorizontal: 15,

    },
    titleHeader: {
        fontSize: 17,
        fontWeight: '700',
        textAlign: 'center',
    },
    headerInfo: {
        borderBottomWidth: 1,
        borderBottomColor: '#9E9E9E',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CCC',
        paddingVertical: 3,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    inlineBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        height: 50,
        backgroundColor: '#F8F9FA',
        paddingHorizontal: 15,
        width: '100%',
        fontSize: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 5,
    }
});
