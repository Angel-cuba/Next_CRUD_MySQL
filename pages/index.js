import axios from 'axios';
import { ProductForm } from '../components/ProductForm';

export default function Home({ products }) {
	console.log(products);
	return (
		<div className="text-3xl font-bold underline">
			<ProductForm />
			<h3>Hola</h3>
			{products.map((p) => (
				<div key={p.id}>
					<h1>{p.name}</h1>
					<h2>{p.description}</h2>
					<h3>{p.price}</h3>
				</div>
			))}
		</div>
	);
}

export const getServerSideProps = async (context) => {
	const res = await axios.get('http://localhost:3000/api/production');
	console.log(res.data);
	return {
		props: {
			products: res.data,
		},
	};
};
