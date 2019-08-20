import { observable, computed} from "mobx";

const ListaUsuarios = [
    {
        id: "1",
        nombre: "Daniel",
        apellido: "Cespedes",
        email: "daniel@hotmail.com",
        usuario: "dan33pro",
        contrasena: "12345",
        fechaDeNacimiento: "18/01/2003"
    },
    {
        id: "2",
        nombre: "Estefani",
        apellido: "Ramirez",
        email: "estefani@hotmail.com",
        usuario: "estefani",
        contrasena: "12345",
        fechaDeNacimiento: "12/06/2006"
    },
    {
        id: "3",
        nombre: "Valentina",
        apellido: "Pastor",
        email: "valentina@hotmail.com",
        usuario: "valentinaP22",
        contrasena: "12345",
        fechaDeNacimiento: "07/12/2002"
    },
    {
        id: "4",
        nombre: "Maria",
        apellido: "Cortez",
        email: "maria@hotmail.com",
        usuario: "mariaC",
        contrasena: "12345",
        fechaDeNacimiento: "25/09/2003"
    }
];
class BrainStore 
{
    @observable usuarios = [];
    @observable loading = false;

    @computed
    get usuariosSource()
    {
        return this.usuarios.slice();
    }
    getUsuario()
    {
        this.loading=true;
        setTimeout(()=> 
        {
            //this.metodoQueModificaElEstado(categoriesData);
            this.loading = false;
            this.usuarios = ListaUsuarios;
        },1000);
    }
}

export default BrainStore;