const connection = require("./connection.js");
const express = require("express");
const bcrypt = require("bcrypt");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({extended : false}))
app.post("/Login", async (req, res) => {
  try {
    const { email, number, password } = req.body;
    const encrypt = await bcrypt.hash(password, 4);
    await connection.query(
      "INSERT INTO Registration_blog(email,number,password) VALUES(?,?,?)",
      [email, number, encrypt]
    );
    res.redirect("/CreatABlog");
  } catch (error) {
    console.log(error);
    res.statusCode(500).send("EROR");
  }
});

app.post("/CreatABlog",async(req,res)=>{
    try{
       const {Title,File,Paragraph} = req.body;
       await connection.query("INSERT INTO Data_Of_Blog(Title,img,blog) VALUES(?,?,?)",[Title,File,Paragraph])
    }catch(error){
        console.log(error);
        res.statusCode(500).send("here is an error")
    }
    
})

app.get("/Login", (req, res) => {
  res.sendFile(path.join(__dirname, "./Registration/Login/Login.html"));
});

app.get("/CreatABlog", (req, res) => {
  res.sendFile(path.join(__dirname, "Blog/Blog-creation.html"));
});
app.listen(port, () => {
  console.log("Yes");
});
