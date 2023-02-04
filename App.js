import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Button, View, Image } from "react-native";
import HomeScreen from "./Home";
import Data from "./Data";

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={navigation.openDrawer} title="Open navigation drawer" />
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="สถานการณ์น้ำ" component={HomeScreen} />
        <Drawer.Screen name="ข้อมูล" component={Data} />
        <Drawer.Screen name="แผนที่" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
