const Card = ({ title, value }) => (
	<div className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
		{" "}
		<h2 className="text-lg font-semibold">{title}</h2>{" "}
		<p className="text-2xl font-bold text-blue-600">{value}</p>{" "}
	</div>
);
export default Card;
