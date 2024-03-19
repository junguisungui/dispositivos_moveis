import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 

import LoginScreen from "./pages/login";
import HomeScreen from "./pages/Home";
import CadastroScreen from "./pages/Cadastro";

const Stack = createNativeStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Login"}>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Cadastro' component={CadastroScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
