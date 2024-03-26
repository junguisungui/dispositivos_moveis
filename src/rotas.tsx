import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 

import LoginScreen from "./pages/login";
import HomeScreen from "./pages/Home";
import CadastroScreen from "./pages/Cadastro";
import NovasenhaScreen from "./pages/Novasenha";
import AnotacoesScreen from "./pages/Anotacoes";

const Stack = createNativeStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Login"}>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Cadastro' component={CadastroScreen}/>
                <Stack.Screen name='Novasenha' component={NovasenhaScreen}/>
                <Stack.Screen name='Anotacoes' component={AnotacoesScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
