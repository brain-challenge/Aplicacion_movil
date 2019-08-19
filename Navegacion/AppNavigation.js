import {createStackNavigator, 
    createAppContainer, 
    createBottomTabNavigator
} from "react-navigation";
import LoginScreen from "../Contenedores/LoginScreen";

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
    Home: { screen: TabNav}/*,
    Details: { screen: RecipeDetailScreen },
    Category: { screen: CategoryScreen}*/
},
{
    headerMode: "none"
}
);

const App1 = createAppContainer(AppNavigator);
export default App1;