import mongoose from "../connection/connect.js";
import modelenum from "../utils/enumModel.js";
import RolesModel from "./rolesModel.js";
class TareasModel{
    constructor() {
        this.Schema = mongoose.Schema;
        this.TareaSchema = new this.Schema ({
            name: String,
            description: String,
            date: Date,
            hour: String,
            done: Boolean
        });
        //this.mymodel = mongoose.model("tareas", this.TareaSchema);
        if (modelenum["tareas"] == null) {
            this.mymodel = mongoose.model("tareas", this.TareaSchema);
            modelenum["tareas"] = this.mymodel;
        } else {
            this.mymodel = modelenum["tareas"];
        }
    }
    createTareas(name, description, date, hour, done){
        var tarea = {
            name, description, date, hour, done,
        }
        var newtarea = new this.mymodel(tarea);
        return new Promise ((resolve, reject) => {
            newtarea.save().then((docs) => {
                console.log("tarea registrada");
                resolve(docs);
            });
        });
    }
    getTareas(){
        return new Promise((resolve, reject) => {
            this.mymodel.find({}, (err, docs) => {
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        })
    }

    updateTareas (id, tareaObject){
        return new Promise((resolve, reject) => {
            this.mymodel.update({ _id: id}, {$set: tareaObject},
                (err, docs) => {
                    if(err){
                        console.log(err);
                        resolve(err);
                        return;
                    }
                    resolve(docs);
                });
        });
    }

    deleteTareas (id){
        return new Promise ((resolve, reject) => {
            this.mymodel.remove({ _id: id}).then((err, docs) => {
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
    }

    getModel(){
        return this.mymodel;
    }
}
export default TareasModel;