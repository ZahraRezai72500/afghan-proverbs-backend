import express from 'express';
import proverbsRoutes from './routes/proverbsRoutes.js';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigings = ['http://localhost:4200','https://afghan-proverbs-front-hspd.onrender.com']
app.use(cors({
    origin: allowedOrigings
}))
app.use ('/api/proverbs', proverbsRoutes);

app.listen(PORT,()=>{
    console.log(`Afghan Proverbs API running on PORT ${PORT}`);
});
