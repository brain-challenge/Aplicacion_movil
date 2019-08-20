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
export default class LoginScreen extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            valor1: '',
            valor2: ''
        }
    }

    componentDidMount = () => {
        const { brain } = this.props;
        brain.getUsuario();
    }
    renderImage = () => {
    
        let imageUrl = "https://4.bp.blogspot.com/-5VnrtUXm-1U/XVrl3ygy9WI/AAAAAAAAKHU/bl8BP5ddnk05ASUKhCFhHvmGzfZZ6yA-wCLcBGAs/s1600/logo22.png";
    
        return <Image source={{ uri: imageUrl }} style={styles.iconImagen} />;
    };

    ingresar = () =>
    {
        if(this.state.valor1 && this.state.valor2)
        {   console.log(this.verificarusuario());
            if(this.verificarusuario())
            {
                const { navigation} = this.props;
                navigation.navigate("dashboard");
            }
            else
            {
                alert("Usuario incorrecto");
            }
            
        }
        else
        {
            alert("Campos vacios");
        }
    };

    crearPerfil = () =>
    {
        const { navigation} = this.props;
        navigation.navigate("crearperfil");
    };

    olvidoContrasena = () =>
    {
        const { navigation} = this.props;
        navigation.navigate("olvidocontrasena");
    };

    changeusername(valor1)
    {
        this.setState({valor1})
    }
    changecontrasena(valor2)
    {
        this.setState({valor2})
    }

    verificarusuario = () => 
    {
        const { brain } = this.props;
        var usuarios = brain.usuariosSource;
        var bandera = false;
        console.log("Llego bien: "+usuarios.length);
        for(var i =1; i<= usuarios.length; i++)
        {
            var aux = usuarios.filter(usuario => usuario.id == i).map(usuario => usuario.usuario).join(",");
            console.log("Usuario: "+i+" "+aux);
            var contrasena = usuarios.filter(usuario => usuario.id == i).map(usuario => usuario.contrasena).join(",");
            console.log("Contraseña: "+i+" "+contrasena);
            if(aux === this.state.valor1 && contrasena === this.state.valor2)
            {
                bandera=true;
            }
        }
        return bandera;    
    };

    render()
    {
        const { brain } = this.props;
        var usuarios = brain.usuariosSource;
        console.log(usuarios.length);
        console.log("Hola :"+ usuarios.filter(usuario => usuario.id == 2).map(usuario => usuario.nombre).join(","));
        return(
            <ImageBackground style={styles.backgroundImage} 
                source={{uri: "https://i.imgur.com/etJw3Vg.jpg"}} 
                blurRadius={3}> 
                <View style = {styles.contenedorIcon}>
                        {this.renderImage()}
                </View>
                <View style = {styles.contenedor}>
                    <View style = {styles.contenedorTexto}>
                        <Text style = {styles.title}>L O G I N</Text>
                    </View>
                    <View>
                        <TextInput style={styles.entradaTexto}
                        placeholder = "username"
                        placeholderTextColor= "#ffffff"
                        value= {this.state.valor1}
                        onChangeText={(valor1) => this.changeusername(valor1)}/>
                        <TextInput style={styles.entradaTexto}
                        placeholder = "password"
                        placeholderTextColor= "#ffffff"
                        secureTextEntry={true}
                        value= {this.state.valor2}
                        onChangeText={(valor2) => this.changecontrasena(valor2)}/>
                    </View>
                    <TouchableOpacity onPress={this.ingresar}>
                        <View style={styles.contenedorBoton}>
                            <View style= {styles.boton}>
                                <Text style={styles.textoBoton}>-></Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.contenedorBotonTexto}>
                        <TouchableOpacity onPress={this.crearPerfil}> 
                            <Text style= {styles.botonTexto}>NEW ACCOUNT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.olvidoContrasena}>
                            <Text style= {styles.botonTexto}>FORGOT PASSWORD</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View> 
            </ImageBackground> 
        );
    }
}
