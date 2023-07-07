import { Button, ListItem } from "@rneui/themed";
import { GlobalStyles } from "@styles/styles";
import { Ionicons } from "@expo/vector-icons";

export default function ServiceItemView({ service }) {
  return (
    <ListItem.Swipeable
      leftContent={(reset) => (
        <Button
          title="Editar"
          titleStyle={{ color: GlobalStyles.colors.accent500 }}
          onPress={() => reset()}
          icon={{
            name: "edit",
            color: GlobalStyles.colors.accent500,
          }}
          buttonStyle={{
            minHeight: "100%",
            backgroundColor: GlobalStyles.colors.primary400,
          }}
        />
      )}
      rightContent={(reset) => (
        <Button
          title="Excluir"
          onPress={() => reset()}
          icon={{ name: "delete", color: "white" }}
          buttonStyle={{
            minHeight: "100%",
            backgroundColor: GlobalStyles.colors.error500,
          }}
        />
      )}
    >
      <Ionicons
        style={{ marginLeft: 5 }}
        name="briefcase-sharp"
        size={18}
        color={GlobalStyles.colors.primary500}
      />
      <ListItem.Content>
        <ListItem.Title>{service.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
}
