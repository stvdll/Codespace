const exs = require ("express");
const app = exs();

app.use(exs.json());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
});

app.get('/', (req,res)=> {

    res.send("tada");      
});

app.post('/', (req, res)=> {

    const data = req.body;
    console.log(data);   
});

const PORT = 3000;
app.listen(PORT, ()=> {

    console.log("Server Läuft");
    }); 

