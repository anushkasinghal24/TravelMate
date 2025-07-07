const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const tourRoutes = require('./routes/tours');
const cors = require('cors');

dotenv.config();
// const connectDB = require('./config/db');
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/tours', tourRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
