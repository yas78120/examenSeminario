import TareasModel from "../models/tareasModel.js";
import UserModel from "../models/userModel.js";
var test = async () => {
    var tareamodel = new TareasModel();
    UserModel.createTareas(
        "test1", 
        "test examen", 
        new Date(), 
        "24", 
        true );
    UserModel.createTareas(
        "test1", 
        "test examen", 
        new Date(), 
        "24", 
        true );
    UserModel.createTareas(
        "test1", 
        "test examen", 
        new Date(), 
        "24", 
        true );
    console.log(tareamodel. getTareas());
}
test(); 