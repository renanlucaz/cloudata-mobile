import { Header } from "@/src/components/Header";
import { ActivityIndicator, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";
import { useEffect, useState } from "react";
import { useGetAddressByCEPQuery, useNewAddressMutation } from "@/src/features/Address";
import { useCreateMeteorologicRecordMutation } from "@/src/features/MeteorologicRecords";
import { router } from "expo-router";
import Toast from "react-native-toast-message";
import { Colors } from "@/src/constants/Colors";

interface AddressInterface {
    cep: string
    street: string
    number: string
    neightborhood: string
    city: string
    uf: string
    latitude: string
    longitude: string
}

export function NewMonitoringPage() {
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState<AddressInterface>({
        cep: "",
        street: "",
        city: "",
        neightborhood: "",
        latitude: "",
        longitude: "",
        number: "",
        uf: ""
    })
    const [createMeteorologicRecord] = useCreateMeteorologicRecordMutation()
    const [newAddress] = useNewAddressMutation()
    const { data: addressByCEP, isFetching } = useGetAddressByCEPQuery(address.cep, { skip: address.cep.length < 8 })

    function updateAddress(type: string, value: string) {
        setAddress((prevState => {
            return { ...prevState, [type]: value }
        }))
    }

    const handleSubmit = () => {
        setLoading(true)
        newAddress({ address }).unwrap()
            .then(data => {
                createMeteorologicRecord({ localeId: data.id }).unwrap()
                    .then(() => {
                        router.replace('/(tabs)/previsions');
                        Toast.show({
                            type: 'success',
                            text1: 'Sucesso!',
                            text2: 'Previsão criada com sucesso.',
                            text1Style: {
                                fontSize: 16
                            },
                            text2Style: {
                                fontSize: 14
                            }
                        });
                    }).catch(err => {
                        Toast.show({
                            type: 'error',
                            text1: 'Ocorreu um erro:',
                            text2: 'Erro ao criar previsão',
                            text1Style: {
                                fontSize: 16
                            },
                            text2Style: {
                                fontSize: 14
                            }
                        });
                    })
                setLoading(false)
            }).catch(err => {
                Toast.show({
                    type: 'error',
                    text1: 'Ocorreu um erro:',
                    text2: 'Erro ao criar endereço',
                    text1Style: {
                        fontSize: 16
                    },
                    text2Style: {
                        fontSize: 14
                    }
                });
                setLoading(false)
            })
    }

    useEffect(() => {
        if (addressByCEP) {
            setAddress({
                cep: addressByCEP.cep,
                city: addressByCEP.localidade,
                neightborhood: addressByCEP.bairro,
                street: addressByCEP.logradouro,
                uf: addressByCEP.uf,
                latitude: addressByCEP.latitude,
                longitude: addressByCEP.longitude,
                number: ""
            })
        }
    }, [addressByCEP, setAddress])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <StatusBar style="light" />
                <Header title="Monitorar endereço" backType />
                <View style={styles.form}>
                    <View style={styles.cepInput}>
                        <Input title="CEP" value={address.cep} onChangeText={(text) => updateAddress('cep', text)} />
                        {isFetching && <ActivityIndicator style={styles.loading} color={Colors.primary} />}
                    </View>

                    <View style={styles.address}>
                        <View style={styles.line}>
                            <View style={{ width: "48%" }}>
                                <Input title="Latitude" value={address.latitude.toString()} onChangeText={(text) => updateAddress('latitude', text)} />
                            </View>
                            <View style={{ width: "48%" }}>
                                <Input title="Longitude" value={address.longitude.toString()} />
                            </View>
                        </View>

                        <Input title="Rua" value={address.street} onChangeText={(text) => updateAddress('street', text)} />
                        <Input title="Bairro" value={address.neightborhood} onChangeText={(text) => updateAddress('neightborhood', text)} />
                        <Input title="Cidade" value={address.city} onChangeText={(text) => updateAddress('city', text)} />

                        <View style={styles.line}>
                            <View style={{ width: "48%" }}>
                                <Input title="Número" value={address.number} onChangeText={(text) => updateAddress('number', text)} />
                            </View>
                            <View style={{ width: "48%" }}>
                                <Input title="UF" value={address.uf} onChangeText={(text) => updateAddress('uf', text)} />
                            </View>
                        </View>

                        <Button title="Monitorar" onPress={handleSubmit} isLoading={loading} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}