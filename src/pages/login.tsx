import {SafeAreaView, Text, TextInput, View, Image, Button, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

function LoginScreen() {

    const navigation = useNavigation();

    function handleLogin() {
        navigation.navigate('Home');
    }
    function handleCadastro() {
        navigation.navigate('Cadastro');
    }
    function handleNovasenha() {
        navigation.navigate('Novasenha');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.imagem} source={require('../../assets/notas.png')} />
                <Text style={styles.titulo}>Korea Notes</Text>
            </View>

            <View style={styles.formContainer}>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Insira seu email"
                            placeholderTextColor="#9CA3AF"
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.senhaContainer}>
                        <Text style={styles.label}>Senha</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Insira a sua senha"
                            placeholderTextColor="#9CA3AF"
                        />
                    </View>
                    <Text style={styles.forgotPassword} onPress={handleNovasenha}>Esqueceu a senha?</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Entrar" color='#9925be' onPress={handleLogin} />
                </View>
                <Text style={styles.cadastroText} onPress={handleCadastro}>Ainda não possui uma conta? Clique aqui</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 25, // FALAR no final
    },
    logoContainer: {
        alignItems: 'center', // centralizar a imagem
    },
    imagem:{
        width:70,
        height: 70,  
    },
    titulo: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 50,
        color: '#be2596',
    },
    formContainer: {
        marginTop: 20,
    },
    label: {
        fontWeight: '500',
        color: '#6c25be',
        fontWeight: 'bold',
    },
    inputContainer: {
        marginTop: 8,
    },
    input: {
        paddingVertical: 10,
        color: '#1F2937',
        backgroundColor: '#ffffff',
        shadowColor: '#ef4343',
    },
    senhaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    forgotPassword: {
        fontWeight: '600',
        color: '#be2596',
    },
    buttonContainer: {
        marginTop: 12,
    },
    button: {
        color: '#9925be',
    },
    cadastroText: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 14,
        color: '#4F46E5',
    },
});

export default LoginScreen;
