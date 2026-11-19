const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;


const JWT_SECRET = 'seu-segredo-super-secreto';


app.use(express.json());

//Banco de Dados:
const usuarios = [
    {id: 1, usuario:'admin', senha:'123'},
    {id: 2, usuario: 'Tiago', senha: '123'}
];


//----------->Rotas

//Rota login --> gera token:
app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;

//Encontrar usuario no bd
const user = usuarios.find(u => u.usuario === usuario);

//2. verificar usuario e senha
if (!user || user.senha !== senha) {
    return res.status(401).json({mensagem: 'Usuário ou senha invalidos.'});
}

//3. Se estiverem corretas, gerar o token:
const token = jwt.sign({ userId: user.id, usuario: user.usuario }, JWT_SECRET, { expiresIn:'15m' });

//4.Enviar token para cliente:
res.json({mensagem: 'Login bem-sucedido!', token: token});
})

//middleware para verificar o JWT:
function verificaJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({mensagem: 'Token de autenticação não fornecido'});
    }
    //O token vem no formato --> "Bearer <token>":
    const token = authHeader.split(' ')[1]; //Dividindo a string em 2, baseado no " " e pegando apenas a posição 1.

    //Verifica se o token é válido:
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            if(err.name === 'TokenExpiredError') {
                return res.status(401).json({mensagem: 'Token expirado.'}); //Se o erro for de expiração, a mensagem é mais específica, o resto geral.
            }
            return res.status(401).json({ mensagem: 'Token inválido.' });
        }
        //Se o token for válido, os dados decodificados são adicionados à requisição para uso posterior.
        req.usuarioLogado = decoded;
        next(); //Permite que a rfequisição prossiga para a rota
    });
}

//Rota pública, acessível por qualquer um
app.get('/', (req, res) => {
    res.json({mensagem: 'Bem-vindo À nossa API pública!'});
});

//Rota protegida, só pode ser acessada com o token JWT válido:
app.get('/alunos', verificaJWT, (req, res) => { //o middleware >>'verificaJWT'<< antes da rota
    console.log('Acessado por:', req.usuarioLogado); //Por conta 

     res.json({
        mensagem: `Acesso permitido para o usuário: ${req.usuarioLogado.usuario}.`,
        alunos: [
            { id: 1, nome: 'João' },
            { id: 2, nome: 'Maria' }
        ]
    });
});

//servidor:
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});