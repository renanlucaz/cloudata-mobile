import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import Toast from "react-native-toast-message"
import { router } from "expo-router"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { styles } from "./styles"
import { useLoginMutation } from "@/src/features/Auth/auth"
import { useDispatch, useSelector } from "react-redux"
import { login } from "@/src/features/Auth"
import { RootState } from "@/src/store"

export default function Login() {
    const dispatch = useDispatch()
    const isUserLogged = useSelector((state: RootState) => state.auth.isLogged)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [userLogin] = useLoginMutation();

    const handleChangeEmail = (value: string) => {
        setEmail(value)
    }

    const handleChangePassword = (value: string) => {
        setPassword(value)
    }

    const handleUserLogin = () => {
        setLoading(true)
        const payload = { email, password }

        userLogin(payload).unwrap()
            .then(data => {
                dispatch(login(data))
                setLoading(false)
            }).catch(() => {
                Toast.show({
                    type: 'error',
                    text1: 'Ocorreu um erro:',
                    text2: 'Usuário ou senha incorretos!',
                    position: "bottom",
                    text1Style: {
                        fontSize: 16
                    },
                    text2Style: {
                        fontSize: 14
                    }
                });
                setLoading(false)
            });
    }

    useEffect(() => {
        if (isUserLogged) {
            router.replace("/dashboard")
        }
    }, [isUserLogged])

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Cloudata</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.loginTitle}>Login</Text>
                <Text style={styles.loginDescription}>Faça seu login com e-mail e senha</Text>
                <View style={styles.formFields}>
                    <Input title="E-mail" value={email} onChangeText={handleChangeEmail} keyboardType="email-address" />
                    <Input title="Senha" value={password} onChangeText={handleChangePassword} secureTextEntry={true} />
                    <Button title="Login" isLoading={loading} onPress={handleUserLogin} />
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