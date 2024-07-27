import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Select } from '../../components/Select';
import { Button } from "../../components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from "../../redux/userSlice";
export const LoginScreen = () => {
    const waiters = [
        { id: 1, name: 'Giovanna' },
        { id: 2, name: 'Matheus' },
        { id: 3, name: 'Isabela' },
        { id: 4, name: 'Lucas' },
        { id: 5, name: 'Lívia' },
        { id: 6, name: 'Rafael' },
        { id: 7, name: 'Sophia' },
        { id: 8, name: 'Enzo' },
        { id: 9, name: 'Valentina' },
        { id: 10, name: 'Henrique' },
        { id: 11, name: 'Ana' },
        { id: 12, name: 'João' },
        { id: 13, name: 'Lara' },
        { id: 14, name: 'Gabriel' },
        { id: 15, name: 'Amanda' },
        { id: 16, name: 'Pedro' },
        { id: 17, name: 'Beatriz' },
        { id: 18, name: 'Bruno' },
        { id: 19, name: 'Mariana' },
        { id: 20, name: 'Leonardo' }
    ];

    const [userId, setUserId] = useState(null);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
            dispatch(changeUser({ id: userId, name: waiters.find(waiter => waiter.id === userId).name }));
        }, 2000)
    };

    return (
        <>
            <View style={styles.imageContainer}>
                <Image source={require('./../../assets/logo.png')} style={styles.image} />
            </View>
            <View style={[styles.container, { height: '60%' }]}>
                <View style={styles.inputField}>
                    <Text>Garçom</Text>
                    <Select title={'Esolha um garçom'} options={waiters} onChangeSelect={(id) => setUserId(id)} />
                </View>
                <View style={styles.inputField}>
                    <Text>Senha</Text>
                    <TextInput style={styles.input} placeholder="Digite sua senha" keyboardType="numeric" />
                </View>
                <Button bgColor={'green'} title={'Entrar'} onPress={handleLogin} disabled={!userId} isLoading={isLoading} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        gap: 20
    },
    inputField: {
        width: '100%'
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
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%'
    },
    image: {
        width: 200,
        height: 200
    }
});