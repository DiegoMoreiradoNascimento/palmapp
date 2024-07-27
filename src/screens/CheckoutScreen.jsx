import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { selectOrder } from "../../redux/currentOrderSlice";
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from "../../components/Button";
import { OrderItemInCheckout } from "../../components/OrderItemInCheckout";

export const CheckoutScreen = ({ navigation: { navigate, goBack }, route }) => {
    const { order } = useSelector(selectOrder);
    console.log(order);
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => goBack()}>
                    <MaterialIcons name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={[styles.titleHeader, { flex: 1 }]}>Produtos</Text>
                <View style={{ flex: 1 }} />
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={order}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <OrderItemInCheckout key={item.id} item={item} />
                    )}
                />
            </View>
            <View style={{ borderTopWidth: 1, borderTopColor: '#9E9E9E', padding: 20 }}>
                <Text style={{ marginBottom: 20, fontWeight: '700', fontSize: 17 }}>Total - R$ {Number(order.reduce((total, produto) => total + produto.amount, 0)).toFixed(2)}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '40%' }}>
                        <Button title={'Adicionar'} bgColor={'green'} onPress={() => {
                            navigate('ProductsSelect', { numTable: route.params.numTable });

                        }} />
                    </View>
                    {order.length > 0 && <View style={{ width: '40%' }}>
                        <Button title={'Enviar Pedido'} bgColor={'green'} onPress={() => console.log(order)} />
                    </View>}
                </View>
            </View>
        </View>
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
    }
});