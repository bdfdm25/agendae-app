import LoadingOverlay from "@components/ui/LoadingOverlay";
import { useLayoutEffect, useState } from "react";
import { AppointmentsView } from "./AppointmentsView";

export default function Appointments({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        setIsLoading(false);
    }, []);

    function addNewAppointmentHandler() {
        navigation.navigate("NewAppointment");
    }

    if (isLoading) {
        return <LoadingOverlay />;
    }
    return <AppointmentsView addNewAppointmentHandler={addNewAppointmentHandler} />;
}
