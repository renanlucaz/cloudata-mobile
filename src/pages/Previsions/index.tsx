import { Header } from "@/src/components/Header";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import { Select } from "@/src/components/Select";
import { RiskCard } from "@/src/components/RiskCard";

export function PrevisionsPage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content} >
                <Header title="Monitoramentos" />
                <View style={styles.input}>
                    <Select />
                </View>

                <View style={styles.results}>
                    <View style={styles.line} />
                    <Text style={styles.resultsText}>8 Resultados encontrados</Text>
                    <View style={styles.line} />
                </View>

                <View style={styles.list}>
                    <RiskCard />
                    <RiskCard />
                    <RiskCard />
                    <RiskCard />
                    <RiskCard />
                </View>
            </View>
        </SafeAreaView>
    )
}