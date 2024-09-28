import { Header } from "@/src/components/Header";
import { SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";
import { useGetAddressByCEPQuery } from "@/src/features/Address/address";
import { useEffect, useState } from "react";

interface AddressInterface {
    cep: string
    street: string
    number: string
    neightborhood: string
    city: string
    uf: string
}

export function NewMonitoringPage() {
    const [address, setAddress] = useState<AddressInterface>({
        cep: "",
        street: "",
        city: "",
        neightborhood: "",
        number: "",
        uf: ""
    })
    const { data, isFetching } = useGetAddressByCEPQuery("pikachu")

    console.log(data)

    function updateAddress(type: string, value: string) {
        setAddress((prevState => {
            return { ...prevState, [type]: value }
        }))
    }

    useEffect(() => {
        console.log(data)
        // setAddress({  })
    }, [address, data])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <StatusBar style="light" />
                <Header title="Monitorar endereço" backType />
                <View style={styles.form}>
                    <Input title="CEP" value={address.cep} onChangeText={(text) => updateAddress('cep', text)} />
                    <View style={styles.address}>
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