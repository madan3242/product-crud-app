import app from "./app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 4000;

const connect = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGODB_ATLAS, {
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

app.listen(PORT, (error) => {
    connect();
    if(error) throw error
    console.log(`SERVER RUNNING ON ${PORT}`);
})