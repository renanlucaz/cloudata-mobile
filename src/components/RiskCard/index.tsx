import React, { useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";
import { styles } from "./styles";
import { router } from "expo-router";

export const RiskCard = ({ record }: any) => {
  const riskPercentage = record.rainProb / 100;

  const getRisk = useMemo((): { text: string, color: string } => {
    if (riskPercentage < 0.25) {
      return { text: "Baixo", color: "#10CE45" }
    }

    if (riskPercentage > 0.25 && riskPercentage < 0.50) {
      return { text: "Médio", color: "#FFC042" }
    }

    return { text: "Alto", color: "#FA4545" }
  }, [riskPercentage])

  return (
    <TouchableOpacity style={styles.card} onPress={() => router.replace(`/details/${record.id}`)}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{new Date(record.registerDate).toLocaleDateString()}</Text>
        <Text style={styles.address} numberOfLines={2}>{record.description}</Text>
        <View style={styles.riskContainer}>
          <View style={[styles.riskIndicator, { backgroundColor: getRisk.color }]} />
          <Text style={styles.riskText}>{getRisk.text} risco de chuva | {Math.round(riskPercentage * 100)}%</Text>
        </View>
      </View>

      <Progress.Circle
        size={60}
        progress={riskPercentage}
        color={getRisk.color}
        borderWidth={0}
        thickness={10}
        showsText={false}
        style={styles.progressCircle}
      />
    </TouchableOpacity>
  );
};

