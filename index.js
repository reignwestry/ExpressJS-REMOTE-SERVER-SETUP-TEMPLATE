import Express from "express";
import Products from "./products.js";
import products from "./products.js";


//# 4 HTTP REQUEST VERBS
//# GET    ===    GETS INFO         app.get()
//# PUT    ===    CHANGES INFO      app.put()
//# POST   ===    ADD INFO          app.post()
//# DELETE ===    REMOVE INFO       app.delete()
// GET, PUT, POST, DELETE


const app = Express();
const port = 3000;

app.use(Express.json());
app.use(Express.urlencoded({extended: true}))

//middleware
function mid(req, res, next){
    console.log(req.body);
    console.log(req.params);
    next(); //# Does the callback

}

        //# (request, respond)
app.get("/products/:id", mid, (req, res) =>{
// app.get("/", (req, res) =>{
    
    console
    // res.send("Hello World");
    //res.json(Products)
    res.json(Products.find(() => {
        return +req.params.id === product.id
    }))
    //res.send(req.params.id);
})

app.post("/add", (req, res) =>{
    console.log(req.body.id)
    res.sendStatus(200);
})

//# RUNS app on specific browser port http://localhost:3000
app.listen(port, () => console.log("listening on port: " + port))