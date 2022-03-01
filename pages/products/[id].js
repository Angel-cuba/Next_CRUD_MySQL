import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';

export default function ProductView({ product }) {
	const router = useRouter();
	const handleDelete = async (id) => {
		await axios.delete('/api/production/' + id);
		router.push('/');
	};
	return (
		<Layout>
			<h2>{product.name}</h2>
			<p>{product.description}</p>
			<p>{product.price}</p>

			<button
				className="bg-red-500 hover:bg-red-700 text-white px-3 py-2"
				onClick={() => handleDelete(product.id)}
			>
				Delete
			</button>
		</Layout>
	);
}

export const getServerSideProps = async (context) => {
	const res = await axios.get('http://localhost:3000/api/production/' + context.query.id);
	return {
		props: {
			product: res.data,
		},
	};
};
