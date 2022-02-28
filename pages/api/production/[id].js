import React from 'react';

export default function handler(req, res) {
	return res.status(200).json('Getting only one product');
}
