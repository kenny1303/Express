import express from "express";


const PORT = process.env.PORT || 4000;
const app = express();

//midleware
app.use('/', (req, res) => {
    res.send("Hola mundo expressJS");
});

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});