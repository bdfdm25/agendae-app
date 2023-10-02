import { GlobalStyles } from "@styles/styles";
import { useState } from "react";
import { Alert } from "react-native";
import { Divider, List } from "react-native-paper";

export default function ServiceItemView({ service }) {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <>
      <List.Accordion
        style={{ backgroundColor: GlobalStyles.colors.clearCardBackground }}
        titleStyle={{
          color: GlobalStyles.colors.primary400,
          fontFamily: "poppins-medium",
        }}
        title={service.name}
        left={(props) => (
          <List.Icon
            {...props}
            color={GlobalStyles.colors.primary400}
            icon="briefcase"
          />
        )}
      >
        <List.Item
          title="Editar"
          style={{ backgroundColor: GlobalStyles.colors.primary50 }}
          titleStyle={{ color: GlobalStyles.colors.primary400 }}
          onPress={() => {
            Alert.alert("Item", "Deseja editar este item?");
          }}
          left={(props) => (
            <List.Icon
              {...props}
              color={GlobalStyles.colors.primary400}
              icon="briefcase-edit"
            />
          )}
        />
        <List.Item
          title="Remover"
          style={{ backgroundColor: GlobalStyles.colors.primary50 }}
          titleStyle={{ color: GlobalStyles.colors.primary400 }}
          onPress={() => {
            Alert.alert("Item", "Deseja remover este item?");
          }}
          left={(props) => (
            <List.Icon
              {...props}
              color={GlobalStyles.colors.error500}
              icon="briefcase-remove"
            />
          )}
        />
      </List.Accordion>
      <Divider />
    </>
    // <>
    //   <List.Item
    //     title={service.name}
    //     onPress={() => {
    //       Alert.alert("Item", "Deseja editar ou remover este item?", [
    //         {
    //           text: "Editar",
    //           onPress: () => console.log("EDIT ITEM"),
    //         },
    //         {
    //           text: "Remover",
    //           onPress: () => console.log("REMOVE ITEM"),
    //           style: "cancel",
    //         },
    //       ]);
    //     }}
    //     titleStyle={{ color: GlobalStyles.colors.primary400 }}
    //     right={(props) => (
    //       <>
    //         <List.Icon
    //           {...props}
    //           color={GlobalStyles.colors.primary400}
    //           icon="briefcase-edit"
    //         />
    //         <List.Icon
    //           {...props}
    //           color={GlobalStyles.colors.error500}
    //           icon="briefcase-remove"
    //         />
    //       </>
    //     )}
    //   />
    //   <Divider />
    // </>

    // <ListItem.Swipeable
    //   leftContent={(reset) => (
    //     <Button
    //       title="Editar"
    //       titleStyle={{ color: GlobalStyles.colors.accent500 }}
    //       onPress={() => reset()}
    //       icon={{
    //         name: "edit",
    //         color: GlobalStyles.colors.accent500,
    //       }}
    //       buttonStyle={{
    //         minHeight: "100%",
    //         backgroundColor: GlobalStyles.colors.primary400,
    //       }}
    //     />
    //   )}
    //   rightContent={(reset) => (
    //     <Button
    //       title="Excluir"
    //       onPress={() => reset()}
    //       icon={{ name: "delete", color: "white" }}
    //       buttonStyle={{
    //         minHeight: "100%",
    //         backgroundColor: GlobalStyles.colors.error500,
    //       }}
    //     />
    //   )}
    // >
    //   <Ionicons
    //     style={{ marginLeft: 5 }}
    //     name="briefcase-sharp"
    //     size={18}
    //     color={GlobalStyles.colors.primary500}
    //   />
    //   <ListItem.Content>
    //     <ListItem.Title>{service.name}</ListItem.Title>
    //   </ListItem.Content>
    //   <ListItem.Chevron />
    // </ListItem.Swipeable>
  );
}
