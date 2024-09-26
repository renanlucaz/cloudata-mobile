import { Header } from "@/src/components/Header";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import { Select } from "@/src/components/Select";

export function PrevisionsPage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content} >
                <Header title="Monitoramentos" />
                <View style={styles.input}>
                    <Select />
                </View>
            </View>
        </SafeAreaView>
    )
}