import {Sequelize} from 'sequelize';

// cria uma instância do sequelize cpassando a conexão com o banco de dados
// mysql://<usuário>:root:<senha>@<endereço_do_servidor>:<Porta>/<Nome_da_Base_de_Dados>

const sequelize = new Sequelize('mysql://root:root@localhost:3306/pitu');

export default sequelize;