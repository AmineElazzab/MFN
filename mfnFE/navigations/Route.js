import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { CredentialsContext } from "../components/CredentialsContext";
import Auth from "./Auth";
import Pages from "./Pages";


const Stack = createNativeStackNavigator();

export default function Routes() {
    const { storedCredentials, setStoredCredentials } = React.useContext(CredentialsContext);
    const [initialRoute, setInitialRoute] = React.useState("Auth");
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            if (storedCredentials) {
                setInitialRoute("Pages");
            }
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return null;
    }

    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <Stack.Navigator initialRouteName={initialRoute}>
                <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
                <Stack.Screen name="Pages" component={Pages} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}