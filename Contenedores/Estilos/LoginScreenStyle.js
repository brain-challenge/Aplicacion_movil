import {StyleSheet, Platform} from "react-native";
import {Metricas, Colores, Fuentes} from "../../Temas";


export default StyleSheet.create(
    {
      contenedor:{
        
        height: 500,
        marginHorizontal: Metricas.baseSpace,
        marginBottom: Metricas.baseSpace,
        borderRadius: 20,
        justifyContent: "center"
      },
      backgroundImage: { 
        flex: 1, 
        alignSelf: 'stretch', 
        width: null, 
        justifyContent: "center"
    },
    entradaTexto: {
      marginHorizontal: Metricas.baseSpace,
      borderRadius: 10,
      marginBottom: Metricas.baseSpace,
      borderBottomColor: Colores.blue,
      borderBottomWidth: 1,
      fontSize: 20,
      color: Colores.whiteFull,
      textAlign: "center"
    },
    title: {
      fontSize: 30,
      color: Colores.whiteFull,
      fontWeight: "bold",
      fontFamily: Fuentes.family.bold

    },
    contenedorTexto: {
      alignItems: "center",
      marginBottom: Metricas.SpaceTitle
    },
    textoBoton: {
      fontSize: 30,
      color: Colores.whiteFull,
      fontWeight: "bold"
    },
    boton: {
      backgroundColor: Colores.blue,
      borderRadius: 80,
      alignItems: "center",
      width: 70,
      height: 70,
      justifyContent: "center"
    },
    contenedorBoton: {
      alignItems: "center",
      justifyContent: "center",
      paddingTop: Metricas.baseSpace
    }, 
    contenedorBotonTexto: {
      alignItems: "center",
      justifyContent: "center",
      paddingTop: Metricas.SpaceTitle
    },
    botonTexto: {
      color: Colores.whiteFull,
      fontSize: 12,
      marginBottom: Metricas.samllSpace
    },
    contenedorIcon: {
      justifyContent: "center",
      height: 60,
      alignItems: "center",
      overflow: "hidden",
      borderRadius: Metricas.borderRadius,
      marginBottom: Metricas.baseSpace

    },
    iconImagen: {
      width: 170,
      height: 60
    }
});