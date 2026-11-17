# API REST com Express

Projeto de exemplo para a atividade de publicação no Render. A API expõe operações CRUD para produtos e usa a porta fornecida por `process.env.PORT`.

## Executar localmente

1. Instale Node.js 18 ou superior.
2. Abra um terminal nesta pasta e execute `npm install`.
3. Execute `npm start`.
4. Acesse `http://localhost:3000/api/health` e `http://localhost:3000/api/products`.

## Rotas

| Método | Caminho | Ação |
| --- | --- | --- |
| GET | `/` | Mensagem e rotas principais |
| GET | `/api/health` | Verifica se a API está ativa |
| GET | `/api/products` | Lista produtos |
| GET | `/api/products/:id` | Busca um produto |
| POST | `/api/products` | Cria um produto |
| PUT | `/api/products/:id` | Atualiza um produto |
| DELETE | `/api/products/:id` | Exclui um produto |

Exemplo de corpo JSON para POST e PUT: `{"name":"Mochila","price":89.9}`.

Os dados deste exercício ficam em memória e voltam aos exemplos iniciais quando o processo reinicia. Não há banco de dados nem credenciais no projeto.

## Render

Conecte o repositório GitHub do projeto como um **Web Service**. Use `npm install` como Build Command e `npm start` como Start Command. O servidor já escuta `process.env.PORT`, que o Render define automaticamente.
