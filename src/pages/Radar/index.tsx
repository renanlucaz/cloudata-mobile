import { SafeAreaView, Text, View } from "react-native";
import MapView, { Circle, Marker } from 'react-native-maps';
import { styles } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { useGetAddressListQuery } from "@/src/features/Address";
import { useState } from "react";
import { Colors } from "@/src/constants/Colors";

export function RadarPage() {
    const { data } = useGetAddressListQuery({})
    const [region, setRegion] = useState({
        latitude: -23.550520,
        longitude: -46.633308,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const handleSelectPlace = (data, details) => {
        const { lat, lng } = details.geometry.location;
        setRegion({
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        });
    };

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
                <AntDesign name="search1" size={20} color={Colors.primary} style={styles.icon} />
                <GooglePlacesAutocomplete
                    placeholder="Pesquisar por um local"
                    onPress={handleSelectPlace}
                    query={{
                        key: "AIzaSyBNJVqOm0F3MLVtUngQWoU7BDmy6XcwLKA",
                        language: 'pt-BR', // Define o idioma
                    }}
                    fetchDetails={true} // Isso é necessário para obter detalhes completos do local selecionado
                    styles={{
                        container: { flex: 0, width: '100%', zIndex: 1 },
                        listView: { backgroundColor: '#fff' },
                        powered: { display: "none" }
                    }}
                />
            </View>
            <MapView style={styles.map}
                initialRegion={region}
                region={region}
            >
                {alerts?.map(alert => (
                    <Circle
                        center={{
                            latitude: alert.latitude,
                            longitude: alert.longitude,
                        }}
                        radius={800}
                        key={alert.latitude}
                        strokeColor={alert.color}
                        fillColor={alert.color}
                    />
                ))}
            </MapView>
        </SafeAreaView>
    )
}