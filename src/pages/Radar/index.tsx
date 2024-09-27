import { SafeAreaView, Text, View } from "react-native";
import MapView, { Circle, Marker } from 'react-native-maps';
import StationImage from "../../../assets/images/power-plant.png"
import { styles } from "./styles";
import { SearchBar } from "@/src/components/SearchBar";

export function RadarPage() {
    return  (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <SearchBar />
            </View>
            <MapView style={styles.map} 
                initialRegion={{
                    latitude: -23.5629,
                    longitude:  -46.6544,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: -23.5629,
                        longitude:  -46.6544, 
                    }}
                    title={"Estação de energia teste"}
                    description={"Situação: operante"}
                    image={StationImage}
                    style={styles.pin}
                />
                <Circle
                    center={{
                        latitude: -23.6000,
                        longitude:  -46.6544,
                    }}
                    radius={500} // Raio em metros
                    strokeColor="rgba(255, 0, 0, 0.3)" // Cor da borda do círculo
                    fillColor="rgba(255, 0, 0, 0.3)" // Cor interna do círculo
                />

                    {/* Outro círculo amarelo */}
                <Circle
                    center={{
                        latitude: -27.2150,
                        longitude: -49.6350,
                    }}
                    radius={600}
                    strokeColor="rgba(255, 255, 0, 0.5)"
                    fillColor="rgba(255, 255, 0, 0.3)"
                />
            </MapView>
        </SafeAreaView>
    )
}