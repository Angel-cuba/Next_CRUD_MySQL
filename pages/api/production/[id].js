import { pool } from '../../../config/db';

export default async function handler(req, res) {
	const { method, query, body } = req;

	switch (method) {
		case 'GET':
			try {
				const querySQL = 'SELECT * FROM product WHERE id = $1';
				const values = [query.id];
				const response = await pool.query(querySQL, values);

				if (response.rows.length === 0)
					return res.status(404).json({ message: 'Product not found' });
				return res.json(response);
			} catch (error) {
				console.log(error);
			}

		case 'PUT':
			try {
				const { name, description, price } = body;
				const querySQL =
					'UPDATE product SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *';
				const values = [name, description, price, query.id];

				const response = await pool.query(querySQL, values);
				if (response.rows.length === 0)
					return res.status(404).json({ message: 'Product not found' });
				return res.status(200).json(response);
			} catch (error) {
				console.log(error);
			}
		case 'DELETE':
			try {
				const querySQL = 'DELETE FROM product WHERE id = $1';
				const values = [query.id];
				const result = await pool.query(querySQL, values);
				console.log(result);
				return res.status(204).json();
			} catch (error) {
				console.log(error);
			}
		default:
			break;
	}
}
