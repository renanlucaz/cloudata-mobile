import { Button } from "@/src/components/Button";
import { router } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function ProfilePage() {
    return (
        <SafeAreaView style={{ padding: 20 }}>
            <Button title="Logout" onPress={() => router.replace("/")} />
        </SafeAreaView>
    )
}