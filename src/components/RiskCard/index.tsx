import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";
import { styles } from "./styles";
import { router } from "expo-router";

export const RiskCard = () => {
  const riskPercentage = 0.95; // 95%

  return (
    <TouchableOpacity style={styles.card} onPress={() => router.replace('/risk-details')}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>SUMARÉ SÃO PAULO - SP</Text>
        <Text style={styles.address}>R. Riachuelo, 231 - Sé, São Paulo.</Text>
        <View style={styles.riskContainer}>
          <View style={styles.riskIndicator} />
          <Text style={styles.riskText}>Risco de alagamento | {Math.round(riskPercentage * 100)}%</Text>
        </View>
      </View>

      <Progress.Circle
        size={60}
        progress={riskPercentage}
        color="red"
        borderWidth={0}
        thickness={10}
        showsText={false}
        style={styles.progressCircle}
      />
    </TouchableOpacity>
  );
};

