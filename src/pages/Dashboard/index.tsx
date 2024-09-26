import { Text, View } from "react-native";
import * as Progress from 'react-native-progress';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import { styles } from "./styles";
import { Header } from "@/src/components/Header";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ActionButton } from "@/src/components/ActionButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export function DashboardPage() {
    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Início'} />
            <View style={styles.content}>
                <View style={styles.dashboard}>
                    <View style={styles.dashboardTitleContainer}>
                        <FontAwesome5 name="clipboard-list" size={24} color={Colors.primary} />
                        <Text style={styles.dashboardTitle}>Dashboard</Text>
                    </View>
                    <View style={styles.dashboardRow}>
                        <View style={styles.dashboardRowItem}>
                            <Text style={styles.dashboardRowTitle}>Total de previsöes</Text>
                            <Text>159</Text>
                        </View>
                        <View style={styles.dashboardRowItem}>
                            <Text style={styles.dashboardRowTitle}>Risco de alagamento</Text>
                            <Text>12</Text>
                        </View>
                    </View>
                    <View style={styles.dashboardRow}>
                        <View style={styles.dashboardRowItem}>
                            <Text style={styles.dashboardRowTitle}>Endereços monitorados</Text>
                            <Text>159</Text>
                        </View>
                        <View style={styles.dashboardRowItem}>
                            <Text style={styles.dashboardRowTitle}>Alto risco de chuva</Text>
                            <Text>12</Text>
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
                        action={() => {}} 
                        icon={<MaterialCommunityIcons name="history" size={28} color={Colors.primary} />}
                    />
                    <ActionButton 
                        title="Monitorar novo local" 
                        action={() => {}} 
                        icon={<MaterialCommunityIcons name="weather-rainy" size={28} color={Colors.primary} />}
                    />
                    <ActionButton 
                        title="Áreas de risco" 
                        action={() => {}} 
                        icon={<Feather name="search" size={24} color={Colors.primary} />}
                    />
                    <ActionButton 
                        title="Visualizar mapa" 
                        action={() => {}} 
                        icon={<Feather name="map" size={22} color={Colors.primary} />}
                    />
                </View>
                <View style={styles.news}>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}