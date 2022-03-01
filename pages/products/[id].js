import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useLayoutEffect, useState } from 'react';
import Layout from '../../components/Layout';

export default function ProductView() {
	const router = useRouter();
	const [product, setProduct] = useState([]);
	const handleDelete = async (id) => {
		await axios.delete('/api/production/' + id);
		router.push('/');
	};
	useLayoutEffect(() => {
		if (router.query.id) {
			res(router.query.id).then((response) => {
				setProduct(response.data.rows[0]);
			});
		}
	}, [router]);

	const res = async (id) => await axios.get('http://localhost:3000/api/production/' + id);

	return (
		<Layout>
			<div className="w-full max-w-xs m-auto p-auto">
				<h1 className="pl-5 mb-10 text-xl font-extrabold">Only one product</h1>
				<div className="border shadow-md max-w-fit p-6">
					<h2>{product.name}</h2>
					<p>{product.description}</p>
					<p>{product.price}</p>

					<button
						className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded"
						onClick={() => handleDelete(product.id)}
					>
						Delete
					</button>
					<button
						className="bg-green-500 hover:bg-green-700 text-white px-5 py-2 ml-3 rounded"
						onClick={() => router.push('/products/edit/' + product.id)}
					>
						Edit
					</button>
				</div>
			</div>
		</Layout>
	);
}

// export const getServerSideProps = async () => {
// 	const res = await axios.get('http://localhost:3000/api/production/' + router.query.id);
// 	return {
// 		props: {
// 			product: res.data,
// 		},
// 	};
// };
