const express = require('express');
const cors = require('cors');

const carRoutes = require('./routes/carRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/cars', carRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
