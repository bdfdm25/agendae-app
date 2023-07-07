import { ServicesView } from "./ServicesView";

export default function ServicesContainer({ navigation }) {
  function navigationHandler() {
    navigation.goBack();
  }

  return <ServicesView navigationHandler={navigationHandler} />;
}
