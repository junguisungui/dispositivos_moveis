import {Text, View, TextInput} from "react-native";

function NovasenhaScreen() {
    return (
        <View>
            <Text>Esqueceu a senha? <br />Tudo bem, estamos aqui para te ajudar!</Text>
            <View>
                    <Text>Nova senha</Text>
                    <View>
                    <TextInput
                            placeholder="Insira seu email"
                            placeholderTextColor="#9CA3AF"
                        />
                    </View>
                    <View>
                        <TextInput
                            placeholder="Insira sua nova senha"
                            placeholderTextColor="#9CA3AF"
                        />
                        <TextInput
                            placeholder="Insira sua nova senha novamente"
                            placeholderTextColor="#9CA3AF"
                        />
                    </View>
            </View>
        </View>


    );
}

export default NovasenhaScreen;
