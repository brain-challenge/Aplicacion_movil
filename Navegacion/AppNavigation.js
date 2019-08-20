import {createStackNavigator, 
    createAppContainer, 
    createBottomTabNavigator
} from "react-navigation";
import LoginScreen from "../Contenedores/LoginScreen";
import DashBoard from "../Contenedores/DashBoard";
import CrearPerfil from "../Contenedores/CrearPerfil";
import OlvidoContrasena from "../Contenedores/OlvidoContrasena";

const TabNav = createBottomTabNavigator(
{
    Preguntas: { screen: LoginScreen},
    Estadisticas: { screen: LoginScreen},
    Tienda: { screen: LoginScreen}
},
{
    headerMode: "none",
    initialRouteName: "Preguntas",
    defaultNavigationOptions: { tabBarVisible: false}
}
);
const AppNavigator = createStackNavigator(
{
    Home: { screen: TabNav},
    inicioSesion: {screen: LoginScreen},
    dashboard: { screen: DashBoard},
    crearperfil: {screen: CrearPerfil},
    olvidocontrasena: {screen: OlvidoContrasena}
    //Category: { screen: CategoryScreen}
},
{
    headerMode: "none",
    initialRouteName: "inicioSesion"
}
);

const App1 = createAppContainer(AppNavigator);
export default App1;