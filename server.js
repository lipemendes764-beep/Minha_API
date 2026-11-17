const express = require('express');

const app = express();
app.use(express.json());

// Dados de exemplo mantidos em memória; reiniciar o servidor restaura esta lista.
let products = [
  { id: 1, name: 'Caderno', price: 19.9 },
  { id: 2, name: 'Caneta', price: 4.5 },
];
let nextId = 3;

app.get('/', (_req, res) => {
  res.json({ message: 'API REST Express funcionando', endpoints: ['/api/health', '/api/products'] });
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/products', (_req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((item) => item.id === Number(req.params.id));
  if (!product) return res.status(404).json({ error: 'Produto não encontrado.' });
  return res.json(product);
});

app.post('/api/products', (req, res) => {
  const { name, price } = req.body;
  if (typeof name !== 'string' || !name.trim() || !Number.isFinite(price) || price < 0) {
    return res.status(400).json({ error: 'Envie name (texto) e price (número não negativo).' });
  }

  const product = { id: nextId++, name: name.trim(), price };
  products.push(product);
  return res.status(201).json(product);
});

app.put('/api/products/:id', (req, res) => {
  const product = products.find((item) => item.id === Number(req.params.id));
  if (!product) return res.status(404).json({ error: 'Produto não encontrado.' });

  const { name, price } = req.body;
  if (typeof name !== 'string' || !name.trim() || !Number.isFinite(price) || price < 0) {
    return res.status(400).json({ error: 'Envie name (texto) e price (número não negativo).' });
  }

  product.name = name.trim();
  product.price = price;
  return res.json(product);
});

app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex((item) => item.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Produto não encontrado.' });

  products.splice(index, 1);
  return res.status(204).end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API REST Express rodando na porta ${port}`);
});
