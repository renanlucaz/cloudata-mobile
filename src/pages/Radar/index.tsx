import { SafeAreaView, Text, View } from "react-native";
import MapView, { Circle, Marker } from 'react-native-maps';
import { styles } from "./styles";
import { SearchBar } from "@/src/components/SearchBar";
import { useGetAddressListQuery } from "@/src/features/Address";

export function RadarPage() {
    const { data } = useGetAddressListQuery({})

    const alerts = data?.map(alert => {
        const maxAlert = Math.max(...alert.previsions?.map(item => parseInt(item?.prb_chuva, 10)))

        const color = maxAlert > 50 ? "rgba(255, 0, 0, 0.3)" : "rgba(255, 200, 0, 0.4)"

        return ({
            latitude: alert.latitude,
            longitude: alert.longitude,
            color
        })
    })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <SearchBar />
            </View>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: -23.5629,
                    longitude: -46.6544,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {alerts?.map(alert => (
                    <Circle
                        center={{
                            latitude: alert.latitude,
                            longitude: alert.longitude,
                        }}
                        radius={600}
                        key={alert.latitude}
                        strokeColor={alert.color}
                        fillColor={alert.color}
                    />
                ))}
            </MapView>
        </SafeAreaView>
    )
}