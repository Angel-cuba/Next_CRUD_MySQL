import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export function ProductForm() {
	const router = useRouter();
	const [card, setCard] = useState({
		name: '',
		description: '',
		price: '',
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios.post('/api/production', card);
		router.push('/');
	};

	const handleChange = async (e) => {
		setCard({ ...card, [e.target.name]: e.target.value });
	};
	return (
		<div className="w-full max-w-xs m-auto p-auto">
			<form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					name="name"
					placeholder="Name"
					onChange={handleChange}
					className="shadow border rounded py-2 px-3  text-gray-700"
				/>
				<label htmlFor="price">Price: </label>
				<input
					type="text"
					name="price"
					id="price"
					placeholder="Price"
					onChange={handleChange}
					className="shadow border rounded py-2 px-3 mt-4 text-gray-700"
				/>
				<label htmlFor="description">Description: </label>
				<textarea
					name="description"
					rows="4"
					placeholder="Description..."
					onChange={handleChange}
					className="shadow border rounded py-2 px-3  text-gray-700"
				></textarea>

				<button className="bg-blue-400 hover:bg-blue-600 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white">
					Save your product
				</button>
			</form>
		</div>
	);
}
