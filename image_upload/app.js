const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pool = require('./db/pg_config');
const apiRoutes = require('./routes/api_routes');
const ssrRoutes = require('./routes/ssr_routes');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/components', apiRoutes);
app.use('/', ssrRoutes);

(async function startServer() {
    try {
        await pool.connect();
        console.log(`Established connection to PostgreSQL database Successfully...`);
        app.listen(PORT, () => console.log(`Server is running on port no. ${PORT}`));
    } catch (err) {
        console.log(`Failed to establish connection to PostgreSQL database... ${err}`);
    }
})();