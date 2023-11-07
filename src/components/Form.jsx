import { useState } from 'react';
import { Review } from './Review';

const initialReviews = [
	{ author: 'Andrzej', text: 'Bardzo fajny film', id: 1 },
	{ author: 'Marek', text: 'Nie podobał mi się', id: 2 },
];

export function Form() {
	const [reviews, setReview] = useState(initialReviews);
	const [inputValue, setInputValue] = useState('');
	const [textareaValue, setTextareaValue] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		const author = inputValue;
		const text = textareaValue;
		const id = reviews.length + 1;
		const newReview = { author, text, id };
		// bezpieczniejszy zapis z funkcją callback w przypadku gdy stan zależy od poprzedniego stanu
		setReview((prevReviews) => [...prevReviews, newReview]);
		setInputValue('');
		setTextareaValue('');
	}

	const reviewsList = reviews.map((rev) => (
		<Review key={rev.id} author={rev.author} text={rev.text} />
	));

	return (
		<>
			{reviews && (
				<>
					<h2>Lista recenzji</h2>
					{reviewsList}
				</>
			)}

			<h2>Dodaj recenzję</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<div>
						<label htmlFor='author'>Autor</label>
					</div>
					<input
						type='text'
						name='author'
						id='author'
						value={inputValue}
						onChange={(event) => {
							setInputValue(event.target.value);
						}}
					/>
				</div>
				<div>
					<div>
						<label htmlFor='text'>Tekst</label>
					</div>
					<textarea
						name='text'
						id='text'
						value={textareaValue}
						onChange={(event) => {
							setTextareaValue(event.target.value);
						}}></textarea>
				</div>
				<button
					type='submit'
					disabled={inputValue === '' || textareaValue === ''}>
					Dodaj
				</button>
			</form>
		</>
	);
}
