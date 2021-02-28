
import TareasModel from "../models/tareasModel.js";
var TAREA =  new TareasModel();
class TareaController {
    constructor() {}
        async createTareas(request, response){
            var data = request.body;
            
            var result = await TAREA.createTareas(
                data.name, 
                data.description, 
                new Date(), 
                data.hour, 
                data.done);
            response.status(200).json(result);
        }
        async getTareas(request, response){
            var result = await TAREA.getTareas();
            response.status(200).json(result);
        }
        async updateTareas(request, response){
            var id = request.params.id;
            var updatedata = request.body;
            var result = await TAREA.updateTareas(id, updatedata);
            response.status(200).json(result);
        }
        async deleteTareas(request, response){
            var id = request.params.id;
            var result = await TAREA.deleteTareas(id);
            response.status(200).json(result);
        }
        async hechoTareas(request, response) {
            var id = request.params.id;
            var updatedata = request.body;
            var result = await TAREA.hechoTareas(id, updatedata);
            response.status(200).json({ serverResponse:result });
          }
}
export default TareaController;