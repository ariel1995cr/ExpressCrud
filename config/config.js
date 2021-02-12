process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//VENCIMIENTO DEL TOKEN
process.env.VENCIMIENTO_TOKEN = 60 * 60

//SEED DE AUTH
process.env.SEED = process.env.SEED || 'este-es-el-seed'

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = '';
}

process.env.URLDB = urlDB;