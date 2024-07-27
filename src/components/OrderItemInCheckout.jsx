import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectOrder, updateProduct } from "../redux/currentOrderSlice";

export const OrderItemInCheckout = ({ item }) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const { order } = useSelector(selectOrder);
    const dispatch = useDispatch();
    useEffect(() => {
        const index = order.findIndex(prod => prod.id === item.id);
        dispatch(updateProduct({
            index: index,
            quantity: quantity
        }))
    }, [quantity]);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const totalPrice = item.price * quantity;
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.price}>Preço: R$ {Number(item.price).toFixed(2)}</Text>
                <Text style={styles.totalPrice}>Total: R$ {Number(totalPrice).toFixed(2)}</Text>
                {item.observation && <Text>{item.observation}</Text>}
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
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#9E9E9E',
        paddingHorizontal: 20
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
});
