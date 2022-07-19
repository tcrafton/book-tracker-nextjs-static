import Link from 'next/link';
import Image from 'next/image';
import CategoryLabel from './CategoryLabel';

export default function Book({ book, compact }) {
  return (
    <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
      {!compact && (
        <Image
          src={book.frontmatter.cover_image}
          alt=""
          height={420}
          width={380}
          className="mb-4 rounded"
        />
      )}

      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">
          {book.frontmatter.lastCompleted}
        </span>
        <CategoryLabel>{book.frontmatter.category}</CategoryLabel>
      </div>

      <div className="mt-2">
        <Link href={`/book/${book.slug}`}>
          <a className="text-2xl text-gray-700 font-bold hover:underline">
            {book.frontmatter.title}
          </a>
        </Link>
        <p className="mt-2 text-gray-600">{book.frontmatter.excerpt}</p>
      </div>
    </div>
  );
}
