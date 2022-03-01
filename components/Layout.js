import React from 'react';

export default function Layout({ children }) {
	return (
		<div>
			<h1>Navbar</h1>
			<div className="bg-gray-100 w-screen h-screen p-10 ">
				<div className="container mx-auto w-full h-full">{children}</div>
			</div>
		</div>
	);
}
