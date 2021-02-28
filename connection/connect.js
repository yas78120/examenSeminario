import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect("mongodb://172.24.0.2:27017/Tareas",
  {
    useNewUrlParser: true,
  }
);
var db = mongoose.connection;
db.on("error", () => {
  console.log("No se puede conectar con la base de datos");
});
db.on("open", () => {
  console.log("Conexion exitosa");
});
export default mongoose;
