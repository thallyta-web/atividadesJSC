// Função de Conexão
async function connect() {

    // Classe Pool gerencia o pool de conexões no pgAdmin
    const { Pool } = require('pg');

    // Add a pool os valores para a conexão (lá de .env)
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    });
    console.log('BD conectado com Sucesso!');
    return pool;
}

// Chamada à função - para criar a conexão com o BD
connect();

//Funções de manipulação do BD
async function selecionarAlunos() {
    const pool = await connect();
    const result = await pool.query('SELECT * FROM alunos');
    return result.rows;
};

async function selecionarAluno(ra) {
    const pool = await connect();
    const result = await pool.query('SELECT * FROM alunos WHERE RA=$1', [ra]);
    return result.rows;
};

async function adicionarAluno(aluno) {
    const pool = await connect();
    const result = await pool.query(
        'INSERT INTO alunos (nome, idade) VALUES ($1,$2);',
        [aluno.nome, aluno.idade]);
};
/**/
async function atualizarAluno(ra, aluno) {
    const pool = await connect();
    const result = await pool.query('UPDATE alunos SET nome=$1, idade=$2 WHERE (ra = $3);', [aluno.nome, aluno.idade,ra]);
};

async function excluirAluno(ra) {
    const pool = await connect();
    const result = await pool.query('DELETE FROM alunos WHERE ra=$1;', [ra]);
};

module.exports = {
    connect,
    selecionarAlunos,
    selecionarAluno,
    adicionarAluno,
    atualizarAluno,
    excluirAluno
};