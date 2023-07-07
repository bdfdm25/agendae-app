import { IconButton, Subtitle, Title } from "@components/ui";
import { GlobalStyles } from "@styles/styles";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import ServiceList from "./components/ServiceList";
import { FAB } from "@rneui/themed";

export function ServicesView({ navigationHandler }) {
  function Root() {
    return;
  }

  function Services() {}

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <View
        style={{
          paddingHorizontal: 18,
          paddingVertical: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Title color={GlobalStyles.colors.primary400}>serviços</Title>
            <Subtitle>Minha lista de serviços</Subtitle>
          </View>
          <IconButton onPress={navigationHandler} icon="close" size={24} />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ServiceList />
        <FAB
          visible={true}
          placement="right"
          icon={{ name: "add", color: GlobalStyles.colors.accent500 }}
          color="#3E04C3"
        />
      </View>
    </SafeAreaView>
  );
}
