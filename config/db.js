import { createPool } from 'mysql2/promise';

const pool = createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
	database: process.env.DB_DATABASE,
});
pool.getConnection((error) => {
	if (error) {
		if (error.code === 'PROTOCOL_CONNECTION_LOST') {
			console.log('Database connection was closed.');
		}
		if (error.code === 'ER_CON_COUNT_ERROR') {
			console.log('Database has too many connections.');
		}
		if (error.code === 'ECONNREFUSED') {
			console.log('Database connection was refused.');
		}
		throw error;
	} else {
		console.log('Database is already connected...😁!');
		//    console.log('Database connected',dbConnection);
	}
});

export { pool };
