import React from "react"
import { View , Text} from "react-native"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { styles } from "./styles"

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Cloudata</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.loginTitle}>Login</Text>
                <Text style={styles.loginDescription}>Faça seu login com e-mail e senha</Text>
                <View style={styles.formFields}>
                    <Input title="E-mail" value="123" />
                    <Input title="Senha" value="123" />
                    <Button title="Login" onPress={() => {}} />
                </View>
                <View style={styles.terms}>
                    <Text style={styles.termsText}>
                        Clicando em entrar você concorda com nossos 
                        <Text style={styles.termsTextBold}> Termos de Serviço </Text> 
                        e <Text style={styles.termsTextBold}>Políticas de Privacidade</Text>.
                    </Text>
                </View>
            </View>
        </View>
    )
}