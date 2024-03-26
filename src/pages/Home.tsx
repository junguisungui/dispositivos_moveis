import {Text, View, Button, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

function HomeScreen() {
    const navigation = useNavigation();

    function handleAnotacoes() {
        navigation.navigate('Anotacoes');
    }

    return (
        <View>
            <Text>Crie anotações para proteger infromações importantes como: Documentos, RG, CPF, Senhas de cartões etc... <br /></Text>
            <View style={styles.buttonContainer}>
                <Button color='#9925be' title="Criar Anotações"/>
            </View>
            <View style={styles.buttonContainer}>
                <Button color='#9925be'  title="Suas Anotações" onPress={handleAnotacoes}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 12,
    },
});
export default HomeScreen;
