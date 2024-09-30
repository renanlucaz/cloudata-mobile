import { RiskDetailsPage } from "@/src/pages/RiskDetails";
import { useLocalSearchParams } from "expo-router";

export default function RiskDetails() {
    const { id } = useLocalSearchParams();

    return (
        <RiskDetailsPage riskId={id} />
    )
}