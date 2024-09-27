import { Header } from "@/src/components/Header";
import { SafeAreaView, Text, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { styles } from "./styles";
import { Colors } from "@/src/constants/Colors";
import { Button } from "@/src/components/Button";
import { StatusBar } from "expo-status-bar";

const DadosCard = () => {
    return (
      <View style={styles.card}>
        <View style={styles.titleContainer}>
            <MaterialIcons name="data-usage" size={30} color={Colors.primary} />
            <Text style={styles.title}> Dados</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>PORCENTAGEM DE RISCO</Text>
            <Text style={styles.value}>95.4%</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>DATA</Text>
            <Text style={styles.value}>11/05/2023</Text>
          </View>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>ENDEREÇO</Text>
          <Text style={styles.value}>R. Riachuelo, 231 - Sé, São Paulo - SP, 01007-000</Text>
        </View>
      </View>
    );
  };
  
  const SituacaoCard = () => {
    return (
      <View style={styles.card}>
        <View style={styles.titleContainer}>
            <MaterialIcons name="info" size={32} color={Colors.primary} />
            <Text style={styles.title}>Situação</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>DETALHAMENTO DO RISCO</Text>
          <Text style={styles.value}>
            Chuva severa que pode comprometer a infraestrutura do local. Risco de alagamento iminente.
          </Text>
        </View>
        <View style={[styles.row, { marginTop: 25 }]}>
          <View style={styles.column}>
            <Text style={styles.label}>CHUVA</Text>
            <Text style={styles.value}>90%</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>UMIDADE</Text>
            <Text style={styles.value}>85%</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>VENTO</Text>
            <Text style={styles.value}>25 km/h</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>TEMPERATURA</Text>
            <Text style={styles.value}>25 km/h</Text>
          </View>
        </View>
      </View>
    );
  };

export function RiskDetailsPage() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.content}>
              <Header title="Detalhes" backType />
              <View style={styles.cardContainer}>
                  <DadosCard />
                  <SituacaoCard />
                  <Button title="Ver no mapa" onPress={() => {}}/>
              </View>
            </View>
        </SafeAreaView>
    )
}