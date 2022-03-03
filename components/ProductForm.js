import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export function ProductForm() {
	const router = useRouter();
	const [card, setCard] = useState({
		name: '',
		description: '',
		price: '',
	});
	const [cardId, setCardId] = useState();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (router.query.id) {
				await fetch('http://localhost:3000/api/production/' + router.query.id, {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(card),
				});
				toast.success('Product updated');
			} else {
				await fetch('http://localhost:3000/api/production', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(card),
				});
				toast('U will see a new post there...');
			}
		} catch (error) {
			console.log(error);
		}
		router.push('/');
	};

	const handleChange = async (e) => {
		setCard({ ...card, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (router.query?.id) {
			setCardId(router.query.id);
		}
	}, [router]);
	useEffect(() => {
		if (router.query.id) {
			getProduct(router.query.id).then((response) => {
				setCard(response.data.rows[0]);
			});
		}
	}, [router]);
	const getProduct = async (id) => await axios.get('/api/production/' + id);
	return (
		<div className="w-full max-w-xs m-auto p-auto">
			<form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					name="name"
					placeholder="Name"
					onChange={handleChange}
					value={card.name}
					className="shadow border rounded py-2 px-3  text-gray-700"
				/>
				<label htmlFor="price">Price: </label>
				<input
					type="text"
					name="price"
					id="price"
					placeholder="Price"
					onChange={handleChange}
					value={card.price}
					className="shadow border rounded py-2 px-3 mt-4 text-gray-700"
				/>
				<label htmlFor="description">Description: </label>
				<textarea
					name="description"
					rows="4"
					placeholder="Description..."
					onChange={handleChange}
					value={card.description}
					className="shadow border rounded py-2 px-3  text-gray-700"
				></textarea>
				<button className="bg-blue-400 hover:bg-blue-600 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white">
					Save your product
				</button>
			</form>
		</div>
	);
}
