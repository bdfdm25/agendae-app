import ProfileView from "./ProfileView";

export default function Profile({ navigation }) {
    function navigationHandler() {
        navigation.goBack();
    }

    return <ProfileView navigationHandler={navigationHandler} />;
}
