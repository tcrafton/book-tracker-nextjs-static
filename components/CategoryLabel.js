import Link from 'next/link';

export default function CategoryLabel({ children }) {
  const colorKey = {
    Hardcover: 'green',
    Paperback: 'blue',
    Audio: 'yellow',
  };

  console.log('Children: ' + children);

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}
    >
      <Link href={`/book/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
