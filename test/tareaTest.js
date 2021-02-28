import TareasModel from "../models/tareasModel.js";
var test = async () => {
    var tareamodel = new TareasModel();
    tareamodel.createTareas(
        "test1", 
        "test examen", 
        new Date(), 
        "24", 
        true );
    tareamodel.createTareas(
        "test1", 
        "test examen", 
        new Date(), 
        "24", 
        true );
    tareamodel.createTareas(
        "test1", 
        "test examen", 
        new Date(), 
        "24", 
        true );
    console.log(await tareamodel.getTareas());
}
test(); 