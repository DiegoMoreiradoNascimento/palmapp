import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { NewTableScreen } from "./screens/NewTableScreen";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { ProductsSelectScreen } from "./screens/ProductsSelectScreen";
import { CheckoutScreen } from "./screens/CheckoutScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Navigator>
            <Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Screen name="Login" component={LoginScreen} />
        </Navigator>
    );
}


const AuthStack = () => {
    return (
        <Navigator>
            <Screen name="NewTable" component={NewTableScreen} options={{ headerShown: false }} />
            <Screen name="ProductsSelect" component={ProductsSelectScreen} options={{ headerShown: false }} />
            <Screen name="Checkout" component={CheckoutScreen} options={{ headerShown: false }} />
        </Navigator>

    );
};

export const Router = () => {
    const { logged } = useSelector(selectUser);
    return (
        <NavigationContainer>
            {
                logged ? <AuthStack /> : <AppStack />
            }
        </NavigationContainer>
    );
};