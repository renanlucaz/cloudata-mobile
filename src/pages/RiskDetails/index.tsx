import { Header } from "@/src/components/Header";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { styles } from "./styles";
import { Colors } from "@/src/constants/Colors";
import { Button } from "@/src/components/Button";
import { StatusBar } from "expo-status-bar";
import { useGetMeteorologicRecordDetailsQuery } from "@/src/features/MeteorologicRecords";
import { router } from "expo-router";

export function RiskDetailsPage({ riskId }: { riskId: string | string[] }) {
  const { data, isFetching } = useGetMeteorologicRecordDetailsQuery(riskId);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <Header title="Detalhes" backType />
        {isFetching ? (
          <ActivityIndicator color={Colors.primary} />
        ) : (
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <View style={styles.titleContainer}>
                <MaterialIcons name="data-usage" size={30} color={Colors.primary} />
                <Text style={styles.title}> Dados</Text>
              </View>
              <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.label}>PORCENTAGEM DE CHUVA</Text>
                  <Text style={styles.value}>{data.rainProb}%</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.label}>DATA</Text>
                  <Text style={styles.value}>{new Date(data.registerDate).toLocaleDateString()}</Text>
                </View>
              </View>
              <View style={styles.column}>
                <Text style={styles.label}>ENDEREÇO</Text>
                <Text style={styles.value}>{data.address.street}, {data.address.number} - {data.address.neightborhood}. {data.address.city} - {data.address.uf} {data.address.cep}</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.titleContainer}>
                <MaterialIcons name="info" size={32} color={Colors.primary} />
                <Text style={styles.title}>Situação</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.label}>DETALHAMENTO DO RISCO</Text>
                <Text style={styles.value}>
                  {data.description}
                </Text>
              </View>
              <View style={[styles.row, { marginTop: 25 }]}>
                <View style={styles.column}>
                  <Text style={styles.label}>UMIDADE</Text>
                  <Text style={styles.value}>{data.maxHumidity}%</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.label}>VENTO</Text>
                  <Text style={styles.value}>{data.maxWindSpeed} km/h</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.label}>TEMPERATURA MAX</Text>
                  <Text style={styles.value}>{data.maxTemperature}°C</Text>
                </View>
              </View>
            </View>
            <Button title="Ver no mapa" onPress={() => router.replace('/(tabs)/radar')} />
          </View>
        )}

      </View>
    </SafeAreaView>
  )
}