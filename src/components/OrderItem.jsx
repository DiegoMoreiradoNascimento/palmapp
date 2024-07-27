import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const OrderItem = ({ item, setDataToBeSent }) => {
    const [quantity, setQuantity] = useState(1);
    const [observation, setObservation] = useState('');

    useEffect(() => {
        setDataToBeSent({
            id: item.id,
            name: item.name,
            quantity: quantity,
            price: item.price,
            amount: (quantity * item.price),
            observation: observation
        });
    }, [quantity, observation]);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };
    const totalPrice = item.price * quantity;

    return (<>
        <View style={styles.container}>
            <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.price}>Preço: R$ {Number(item.price).toFixed(2)}</Text>
                <Text style={styles.totalPrice}>Total: R$ {Number(totalPrice).toFixed(2)}</Text>
            </View>
            <View style={styles.quantityContainer}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: 'red' }]} onPress={handleDecreaseQuantity}>
                    <Text style={styles.txtBtn}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity style={[styles.btn, { backgroundColor: 'green' }]} onPress={handleIncreaseQuantity}>
                    <Text style={styles.txtBtn}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
        <TextInput style={styles.input} multiline={true} numberOfLines={2} placeholder="Digite uma observação..." onChangeText={(text) => setObservation(text)} />
    </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        marginTop: 5,
        color: '#666',
    },
    btn: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    txtBtn: {
        color: '#FFF'
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    quantityText: {
        marginHorizontal: 10,
    },
    totalPrice: {
        marginTop: 5,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#666',
        borderRadius: 5,
        padding: 20,
        marginTop: 20
    }
});

export default OrderItem;
