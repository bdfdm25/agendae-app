import { IconButton, Subtitle, Title } from "@components/ui";
import { GlobalStyles } from "@styles/styles";
import { useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { FAB } from "react-native-paper";
import ServiceList from "./components/ServiceList";

export function ServicesView({ navigationHandler }) {
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
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
            <Subtitle>minha lista de serviços</Subtitle>
          </View>
          <IconButton onPress={navigationHandler} icon="close" size={24} />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ServiceList />
        <FAB.Group
          open={open}
          visible
          color="#FFD700"
          icon={open ? "close" : "plus"}
          actions={[
            {
              icon: "plus",
              onPress: () => console.log("Pressed add"),
              color: GlobalStyles.colors.accent500,
            },
            {
              icon: "star",
              label: "Star",
              color: GlobalStyles.colors.accent500,
              onPress: () => console.log("Pressed star"),
            },
            {
              icon: "email",
              label: "Email",
              color: GlobalStyles.colors.accent500,
              onPress: () => console.log("Pressed email"),
            },
            {
              icon: "bell",
              label: "Remind",
              color: GlobalStyles.colors.accent500,
              onPress: () => console.log("Pressed notifications"),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
        {/* <FAB
          visible={true}
          placement="right"
          icon={{ name: "add", color: GlobalStyles.colors.accent500 }}
          color="#3E04C3"
        /> */}
      </View>
    </SafeAreaView>
  );
}
