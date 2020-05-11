//========================
// PUERTO
//========================

process.env.PORT = process.env.PORT || 3000;

//========================
// ENTORNO
//========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//========================
// BASE DE DATOS
//========================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://cantileo:9eWVbFJ2jziyLRvM@cluster0-wum3s.mongodb.net/cafe';
}

process.env.urlDB = urlDB;