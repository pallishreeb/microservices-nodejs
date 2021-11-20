const express = require("express")
const app = express();

app.get("/login", (req,res)=> {
    res.status(200).json({msg:"Logged in successfully!"})
})

app.get("/profile/:id", (req,res)=> {
    res.status(200).json({msg:"Welcome to your profile"})
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`User server started on port ${PORT}`)
})


