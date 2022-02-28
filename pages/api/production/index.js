import { pool } from '../../../config/db';

export default async function handler(req, res) {
	const { method, body } = req;

	switch (method) {
		case 'GET':
			return res.status(200).json('Getting products');
		case 'POST':
			const { name, description, price } = body;
			const [result] = await pool.query('INSERT INTO product SET ?', { name, description, price });
			console.log(result);
			return res.status(200).json({ name, description, price, id: result.insertId });
	}
}
