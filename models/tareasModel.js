import mongoose from "../connection/connect.js";
class TareasModel{
    Constructor(){
        this.Schema = mongoose.Schema;
        this.TareaSchema = new this.Schema({
            name: String,
            description: String,
            date: Date,
            hour: String,
            done: Boolean,
        });
        this.mymodel = mongoose.model("tareas", this.TareaSchema);
    }
    createTareas(name, description, date, hour, done){
        var tarea = {
            name, description, date, hour, done,
        }
        var newtarea = new this.mymodel(tarea);
        return new Promise ((resolve, reject) => {
            newtarea.save().then((err, docs) => {
                console.log("tarea registrada");
                resolve(docs);
            });
        })
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