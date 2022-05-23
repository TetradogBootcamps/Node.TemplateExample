const express=require('express');
const hbs=require('hbs');

let app=express();
//Handlebars
hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine','hbs');

app.get('/',(req,res)=>{

    res.render('home.hbs',{
        nombre:'Gabriel',
        titulo:'Home',
    });
});
app.get('/generic',(req,res)=>{

    res.render('generic.hbs',{
        nombre:'Gabriel',
        titulo:'Home',
    });
});
app.get('/elements',(req,res)=>{

    res.render('elements.hbs',{
        nombre:'Gabriel',
        titulo:'Home',
    });
});
app.use(express.static('public'));

app.listen(8080);