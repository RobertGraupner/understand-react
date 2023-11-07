import { Review } from './Review';

export function Reviews({ reviews }) {
	const reviewsElement = reviews.map((rev) => (
		<Review key={rev.id} author={rev.author} text={rev.text} />
	));

	return <ul>{reviewsElement}</ul>;
}
