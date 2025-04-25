/* eslint-disable react/react-in-jsx-scope */
type CardProps = {
  title: string;
  description: string;
};

function Card({ title, description }: CardProps) {
  return (
    <div className="bg-dark-bg p-6 rounded-xl">
      <h2 className="text-lg text-white">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default Card;
