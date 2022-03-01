import axios from 'axios';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home({ products }) {
	return (
		<Layout>
			{products.map((p) => (
				<Link key={p.id} href={`/products/${p.id}`}>
					<a href="">
						<div className="border border-gray-300 shadow-md p-6">
							<h1>{p.name}</h1>
							<h2>{p.description}</h2>
							<h3>{p.price}</h3>
						</div>
					</a>
				</Link>
			))}
		</Layout>
	);
}

export const getServerSideProps = async (context) => {
	const res = await axios.get('http://localhost:3000/api/production');
	return {
		props: {
			products: res.data,
		},
	};
};
