import Link from 'next/link';
import Layout from '@/components/Layout';
import Book from '@/components/Book';
import { getBooks } from '@/lib/books';

export default function HomePage({ books }) {
  return (
    <Layout>
      <h1 className="text-5xl border-b-4 p-5 font-bold">Latest Books</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>

      <Link href="/book">
        <a className="block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full">
          All Books
        </a>
      </Link>
    </Layout>
  );
}

// so we can get the server-side posts to the client, allow us to pass
// posts above
export async function getStaticProps() {
  return {
    props: {
      books: getBooks().slice(0, 6),
    },
  };
}
