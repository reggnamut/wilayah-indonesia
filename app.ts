import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import v1 from './src/v1/routes';
import { httpResponseCode } from './src/v1/constants';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('tiny'));
app.use('/v1', v1);

app.get('/', (req, res) => {
  res.status(200).json({
    ...httpResponseCode[200],
    message: 'Read the API documentation for more information about the pathway!',
  });
});

app.all('*', (req, res) => {
  res.status(404).json({
    ...httpResponseCode[404],
    message: "You're lost! Check the API documentation for the pathway",
  });
});

app.listen(PORT, function () {
  console.clear();
  console.log(`⚡️ [SERVER] Server is Running on http://localhost:${PORT}`);
});
