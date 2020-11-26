// arquivo responsavel por subir a aplicação 

import app from './app';
import database from './database';

// Inicializa o banco de dados
database.sync({force: true});
console.log('Database running as 3306');

app.listen(3000);

console.log('Server running at 3000 !!!');