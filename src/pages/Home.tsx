import {Text, View, Button, StyleSheet} from "react-native";

function HomeScreen() {
    return (
        <View>
            <Text>Crie anotações para proteger infromações importantes como: Documentos, RG, CPF, Senhas de cartões etc...</Text>
            <View style={styles.buttonContainer}>
                <Button title="Criar Anotações"/>
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
