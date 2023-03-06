import express from 'express';
import { fileHanlder } from '../commands/filehandler';
import { removeCompileFile } from '../commands/removeResult';
import startTest from '../commands/startCode';

const app = express();
const port = 12306;

app.use(express.static('static'));
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('hello, world');
});

app.post('/test', async (req, res) => {
  const { name, content } = req.body;
  const result = await startTest(name, content);

  console.log(result);
  res.send(JSON.stringify(result));
});

app.listen(port, () => {
  console.log(`Server is running in http://127.0.0.1:${port}`);
});
