import axios from 'axios';

export function ProductForm() {
	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await axios.post('/api/production', {
			name: 'products 1',
			description: 'first product description',
			price: 20000,
		});
		console.log(res);
	};

	return (
		<div className="bg-gray-300">
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name: </label>
				<input type="text" />
				<label htmlFor="price">Price: </label>
				<input type="text" name="price" id="price" />
				<label htmlFor="description">Description: </label>
				<textarea name="description" rows="4"></textarea>

				<button>Save your product</button>
			</form>
		</div>
	);
}
