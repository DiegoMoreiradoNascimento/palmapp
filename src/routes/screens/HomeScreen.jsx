import { View } from 'react-native';
import { Button } from '../../components/Button';
export const HomeScreen = ({ navigation: { navigate } }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
            <Button
                title={'Iniciar'}
                onPress={() => navigate('Login')}
            />
        </View>
    );
};
