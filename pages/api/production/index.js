import { pool } from '../../../config/db';

export default async function handler(req, res) {
	const { method, body } = req;

	switch (method) {
		case 'GET':
			try {
				const result = await pool.query('SELECT * FROM product');
				console.log(result.rows);
				return res.status(200).json(result.rows);
			} catch (error) {
				return res.status(500).json({ error });
			}
		case 'POST':
			try {
				const { name, description, price } = body;
				const querySQL =
					'INSERT INTO product(name, description, price) VALUES ($1, $2, $3) RETURNING *';
				const values = [name, description, price];

				const result = await pool.query(querySQL, values);
				console.log(result);
				return res.status(200).json(result.rows[0]);
			} catch (error) {
				return res.status(500).json({ error: error.message });
			}
	}
}
