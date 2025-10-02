export default function ProductList({ items }) {
    return (
        <ul className="flex flex-col space-y-2">
            {items.map(item => (
                <li key={item.id} className="bg-white p-4 rounded shadow">
                    {item.name}
                </li>
            ))}
        </ul>
    );
}