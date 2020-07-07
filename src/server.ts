import express, { request, response } from 'express';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello word' })
})

app.listen(3000, () => {
  console.log('Server runing in port 3000')
});