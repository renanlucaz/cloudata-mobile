import { RiskDetailsPage } from "@/src/pages/RiskDetails";
import { useGlobalSearchParams, useLocalSearchParams, useNavigation } from "expo-router";

export default function RiskDetails() {
    const local = useLocalSearchParams();

    return (
        <RiskDetailsPage />
    )
}