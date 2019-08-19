import React, {Component} from "react";
import {View, 
        ImageBackground, 
        TextInput, 
        Text,
        TouchableOpacity } from "react-native";
import styles from "./Estilos/LoginScreenStyle";


export default class LoginScreen extends Component
{
    constructor(props)
    {
    super(props);
    }
    render()
    {
        return(
            <ImageBackground style={styles.backgroundImage} 
                source={{uri: "https://i.imgur.com/etJw3Vg.jpg"}} 
                blurRadius={3}> 
                <View style = {styles.contenedor}>
                    <View style = {styles.contenedorTexto}>
                        <Text style = {styles.title}>L O G I N</Text>
                    </View>
                    <View>
                        <TextInput style={styles.entradaTexto}
                        placeholder = "username"
                        placeholderTextColor= "#ffffff"/>
                        <TextInput style={styles.entradaTexto}
                        placeholder = "password"
                        placeholderTextColor= "#ffffff"
                        secureTextEntry={true}/>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.contenedorBoton}>
                            <View style= {styles.boton}>
                                <Text style={styles.textoBoton}>-></Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.contenedorBotonTexto}>
                        <TouchableOpacity>
                            <Text style= {styles.botonTexto}>NEW ACCOUNT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style= {styles.botonTexto}>FORGOT PASSWORD</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View> 
            </ImageBackground> 
        );
    }
}
