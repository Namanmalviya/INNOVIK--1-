const express=require('express')
const app=express();
const cors=require('cors')
const axios=require('axios')
const nodemailer = require('nodemailer');
require('dotenv').config();

app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello world")
})


app.post('/',async(req,res)=>{
 const { to, subject, message } = req.body;
console.log('dfsf');
  try {
    // 1️⃣ Create transporter
   
    const transporter = nodemailer.createTransport({
      service: "gmail", // can also use Outlook, Yahoo, or custom SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2️⃣ Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: message,
    };

    // 3️⃣ Send mail
    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
})



app.get('/chatai',(req,res)=>{
    res.send("hel")
})
app.post('/chatai',async(req,res)=>{
    const {prompt}=req.body
    console.log(prompt)
    try{
            const response=await axios({
                url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB9FJtsLIIhVhITMUL6gA1kKPhXBlIp27U" ,
                method: 'post' ,
                data:{
  
    "contents": [
      {
        "parts": [
          {
            "text":'only medical and healthcare related question , give answers like real doctor not ai agent'+ prompt
          }
        ]
      }
    ]
  }
        
    })
    const answer=response['data']['candidates'][0]['content']['parts'][0]['text']
     console.log(answer)
     res.status(200).json({answer})
        }
    
    catch(err){
        res.status(401).json({message:'err'})
        console.log(err)

    }
})


app.listen(1000,()=>{
    console.log('backend started')
})