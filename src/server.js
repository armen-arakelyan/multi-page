const express=require('express')
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser').urlencoded({extended:true})
const mongoose=require('mongoose');
const nodemailer=require('nodemailer');
const server=require('http').createServer(app);
const io=require('socket.io')(server,{cors: {
    origin: '*',
  },
});

app.use(express.json())

app.use(cors({
    origin:"http://localhost:3000" , 
    origin: '*',
    credentials:true
}));

let schema=mongoose.Schema({
    name:String,
    surname:String,
    mail:String,
    password:String
})

let carschema=mongoose.Schema({
    model:String,
    img:String,
    speed:String
})

mongoose.connect('mongodb+srv://Armen:1234@cluster0.wscaf.mongodb.net/my-app')

let model=mongoose.model('users',schema);
let carmodel=mongoose.model('cars',carschema);

let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: 'arakelyan2001@mail.ru',
      pass: '',
    },
  });

app.post('/feed',bodyParser,async(req,res)=>{
    await model.find({mail:req.body.mail,password:req.body.password},(err,data)=>{
        if(err){
            throw err; 
        }
        if(data.length!==0){
            res.send(data)
        }
    })
})

app.post('/register',bodyParser,async(req,res)=>{
    await model.find({mail:req.body.regmail},async(err,data)=>{
        if(err){
            throw err;
        }
        if(data.length!==0){
            res.send('This mail already used')
        }else{
            await model({
                name:req.body.name,
                surname:req.body.surname,
                mail:req.body.regmail,
                password:req.body.regpassword
            }).save()
            res.send('Registred Successfuly!')
        }
    })
})

app.post('/order',bodyParser,(req,res)=>{
    let data=JSON.parse(req.body.orders);
    data.map(v=>{
        `Orders: name:${v.name} price:${v.price}<br>`
    })
         transporter.sendMail({
            from: '"React Shop 👻" <arakelyan2001@mail.ru>',
            to: "arakelyan2001@mail.ru",
            subject: "Order",
            html: `Name:${req.body.name}<br>
            Contact:${req.body.contact}<br>
            Adress:${req.body.adress}<br>
            ${JSON.stringify(data)}<br>
            AllPrice:${req.body.myprice}
            `,
          });
})

app.post('/create',bodyParser,async(req,res)=>{
        await carmodel({
            model:req.body.model,
            img:req.body.img,
            speed:req.body.speed
        }).save()
})

app.get('/cars',async(req,res)=>{
    let cars=await carmodel.find({});
    res.send(cars)
})

app.post('/car_delete',bodyParser,async(req,res)=>{
    await carmodel.findByIdAndDelete(req.body.myid)
    res.send(req.body.myid)
})

app.get('/getusersid',bodyParser,async(req,res)=>{
    let user=await model.find({})
    res.send(user)
})

app.get('/cars/:id',async(req,res)=>{
    let car=await carmodel.findById(req.params.id);
    res.send(car)
})

io.on('connection',socket=>{
    socket.on('send message',data=>{
        io.emit('send message',{name:data.name,msg:data.msg,color:data.color,textColor:data.textColor,hours:data.hours,minutes:data.minutes,seconds:data.seconds,id:data.id})
    })
})

server.listen(9000)