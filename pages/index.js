import axios from 'axios';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home({ products }) {
	return (
		<Layout>
			{products.map((p) => (
				<div key={p.id} className="max-w-fit flex">
					<Link href={`/products/${p.id}`}>
						<a href="">
							<div className="border border-gray-300 max-w-xs mb-3 shadow-md p-6 bg-slate-600 text-white rounded-lg">
								<h1>{p.name}</h1>
								<h2 className="text-slate-100">{p.description}</h2>
								<h3 className="text-red-100">€ {p.price}</h3>
							</div>
						</a>
					</Link>
				</div>
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
