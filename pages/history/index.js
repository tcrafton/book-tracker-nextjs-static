import React from 'react';
import HistoryResult from '@/components/HistoryResult';
import Layout from '@/components/Layout';
import { getBooks } from '@/lib/books';

export default function HistoryPage({ books }) {
  return (
    <Layout>
      <div className="flex justify-between">
        <div className="w-3/4 mr-10">
          <h1 className="text-5xl border-b-4 p-5 font-bold">History</h1>

          <div>
            <HistoryResult books={books} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

// so we can get the server-side posts to the client, allow us to pass
// posts above
export async function getStaticProps() {
  const books = getBooks();
  return {
    props: {
      books,
    },
  };
}
