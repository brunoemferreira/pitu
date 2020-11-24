import {Sequelize} from 'sequelize';

// cria uma instância do sequelize cpassando a conexão com o banco de dados
const sequelize = new Sequelize('mysql://root:root@localhost:3306/pitu');

export default sequelize;