import { Header } from "@/src/components/Header";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";

export function NewMonitoringPage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <StatusBar style="light" />
                <Header title="Monitorar endereço" backType />
                <View style={styles.form}>
                    <Input title="CEP" value="Valor" />
                    <View style={styles.address}>
                        <View style={styles.line}>
                            <View style={{ width: "48%" }}>
                                <Input title="Latitude" value="Valor" />
                            </View>
                            <View style={{ width: "48%" }}>
                                <Input title="Longitude" value="Valor" />
                            </View>
                        </View>

                        <Input title="Rua" value="Valor" />
                        <Input title="Bairro" value="Valor" />
                        <Input title="Cidade" value="Valor" />

                        <View style={styles.line}>
                            <View style={{ width: "48%" }}>
                                <Input title="Número" value="Valor" />
                            </View>
                            <View style={{ width: "48%" }}>
                                <Input title="UF" value="Valor" />
                            </View>
                        </View>

                        <Button title="Monitorar" onPress={() => { }} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}