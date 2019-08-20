import React, {Component} from "react";
import {View, 
        ImageBackground, 
        TextInput, 
        Text,
        TouchableOpacity,
        Image } from "react-native";
import styles from "./Estilos/LoginScreenStyle";
import { observer, inject} from "mobx-react";

@inject("brain")
@observer
export default class DashBoard extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <View>
                <Text>Olvido contraseña</Text>
            </View>
        );
    }
}