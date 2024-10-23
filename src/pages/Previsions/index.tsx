import { useGetAddressListQuery } from "@/src/features/Address";
import { Header } from "@/src/components/Header";
import { ActivityIndicator, SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Select } from "@/src/components/Select";
import { RiskCard } from "@/src/components/RiskCard";
import { StatusBar } from "expo-status-bar";
import { transformAddress } from "@/src/utils/transformAddress";
import { useState } from "react";
import { useGetMeteorologicRecordListQuery } from "@/src/features/MeteorologicRecords";
import { FloodRisk } from "@/src/components/FloodRisk";
import { useGetFloodRiskListQuery } from "@/src/features/FloodRisk";
import { Colors } from "@/src/constants/Colors";

interface Option {
    id: string;
    label: string
}

export function PrevisionsPage() {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const { data: address } = useGetAddressListQuery({});
    const { data: meteorologicRecords, isFetching } = useGetMeteorologicRecordListQuery(selectedOption?.id, {
        skip: !selectedOption
    });
    const { data: floodRisk, isFetching: isFloodRiskLoading } = useGetFloodRiskListQuery(selectedOption?.id, {
        skip: !selectedOption
    })

    const addressList = address?.map((address: any) => ({ id: address.id, label: transformAddress(address) }))

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.content} >
                <Header title="Monitoramentos" />
                <View style={styles.input}>
                    <Select options={addressList} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                </View>

                <View style={styles.floodRisk}>
                    {isFloodRiskLoading && <ActivityIndicator color={Colors.primary} style={{ marginBottom: 20 }} />}
                    {floodRisk?.level > 1 && <FloodRisk riskLevel={floodRisk.level} />}
                </View>

                <View style={styles.results}>
                    <View style={styles.line} />
                    <Text style={styles.resultsText}>
                        Previsões de chuva
                    </Text>
                    <View style={styles.line} />
                </View>

                <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
                    {isFetching ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <>
                            {meteorologicRecords?.map((record: any) => (
                                <RiskCard key={record.id} record={record} />
                            ))}
                        </>
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}