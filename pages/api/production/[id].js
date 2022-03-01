import React from 'react';
import { pool } from '../../../config/db';

export default async function handler(req, res) {
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const { id } = req.query;
				const [result] = await pool.query('SELECT * FROM product WHERE id=?', [id]);
				return res.status(200).json(result[0]);
			} catch (error) {
				console.log(error);
			}
		case 'DELETE':
			try {
				const { id } = req.query;
				const result = await pool.query('DELETE FROM product WHERE id=?', [id]);
				console.log(result);
				return res.status(204).json();
			} catch (error) {
				console.log(error);
			}
		default:
			break;
	}
}
