import { SafeAreaView, Text, View } from "react-native";
import * as Progress from 'react-native-progress';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import { Header } from "@/src/components/Header";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ActionButton } from "@/src/components/ActionButton";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store"

import { styles } from "./styles";

export function DashboardPage() {
    const state = useSelector((state: RootState) => state.auth)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.content}>
                <Header title={'Início'} />
                <View style={styles.info}>
                    <View style={styles.dashboard}>
                        <View style={styles.dashboardTitleContainer}>
                            <FontAwesome5 name="clipboard-list" size={24} color={Colors.primary} />
                            <Text style={styles.dashboardTitle}>Dashboard</Text>
                        </View>
                        <View style={styles.dashboardRow}>
                            <View style={styles.dashboardRowItem}>
                                <Text style={styles.dashboardRowTitle}>Total de previsöes</Text>
                                <Text>10</Text>
                            </View>
                            <View style={styles.dashboardRowItem}>
                                <Text style={styles.dashboardRowTitle}>Risco de alagamento</Text>
                                <Text>1</Text>
                            </View>
                        </View>
                        <View style={styles.dashboardRow}>
                            <View style={styles.dashboardRowItem}>
                                <Text style={styles.dashboardRowTitle}>Endereços monitorados</Text>
                                <Text>2</Text>
                            </View>
                            <View style={styles.dashboardRowItem}>
                                <Text style={styles.dashboardRowTitle}>Alto risco de chuva</Text>
                                <Text>4</Text>
                            </View>
                        </View>
                        <View style={styles.dashboardRow}>
                            <View style={styles.dashboardRowItem}>
                                <Text style={styles.dashboardRowTitle}>Porcentagem geral de risco</Text>
                                <View style={styles.progressBarContainer}>
                                    <Progress.Bar
                                        progress={0.4}
                                        color={Colors.primary}
                                        style={styles.progressBar}
                                        height={32}
                                        width={300}
                                        borderRadius={32}
                                    ></Progress.Bar>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.actions}>
                        <ActionButton
                            title="Histórico de previsões"
                            action={() => router.replace('/previsions')}
                            icon={<MaterialCommunityIcons name="history" size={28} color={Colors.primary} />}
                        />
                        <ActionButton
                            title="Monitorar novo local"
                            action={() => router.replace('/new-monitoring')}
                            icon={<MaterialCommunityIcons name="weather-rainy" size={28} color={Colors.primary} />}
                        />
                        <ActionButton
                            title="Áreas de risco"
                            action={() => router.replace('/radar')}
                            icon={<Feather name="search" size={24} color={Colors.primary} />}
                        />
                        <ActionButton
                            title="Visualizar mapa"
                            action={() => router.replace('/radar')}
                            icon={<Feather name="map" size={22} color={Colors.primary} />}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}