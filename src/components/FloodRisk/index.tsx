import { Text, View } from "react-native";
import Foundation from '@expo/vector-icons/Foundation';
import { styles } from "./styles";
import { Colors } from "@/src/constants/Colors";

interface FloodRiskProps {
    riskLevel: number
}

const RISK_INFO_BY_LEVEL: any = {
    0: {
        color: Colors.primary,
        text: "sem risco."
    },
    1: {
        color: Colors.primary,
        text: "baixo risco."
    },
    2: {
        color: Colors.alert,
        text: "médio risco!"
    },
    3: {
        color: Colors.error,
        text: "alto risco!"
    }
}

export function FloodRisk({ riskLevel }: FloodRiskProps) {
    const riskInfo = RISK_INFO_BY_LEVEL[riskLevel];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Foundation name="info" size={30} color={riskInfo.color} />
                <Text style={styles.title}>Risco de alagamento</Text>
            </View>
            <View style={[styles.line, { marginBottom: 6, marginTop: 20 }]}>
                <Text style={styles.label}>Risco imediato: </Text>
                <Text style={styles.value}>{riskInfo.text}</Text>
            </View>
            <View style={[styles.line, { marginBottom: 20 }]}>
                <Text style={styles.label}>Risco em 1 hora: </Text>
                <Text style={styles.value}>{riskInfo.text}</Text>
            </View>
            <View style={styles.line}>
                <Text style={styles.label}>Última atualização: </Text>
                <Text style={styles.value}>há 2 minutos.</Text>
            </View>
        </View>
    )
}