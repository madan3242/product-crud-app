import app from "./app.js";
import mongoose from "mongoose";

const connect = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log(`MONGODB CONNECTED`))
    .catch((error) => {
        console.log(`MONGODB CONNECTION FAILED`);
        console.log(error);
        process.exit(1);
    })
}

app.listen(process.env.PORT, process.env.HOSTNAME, (error) => {
    connect();
    console.log(`SERVER RUNNING http://${process.env.HOSTNAME}:${process.env.PORT}`);
})