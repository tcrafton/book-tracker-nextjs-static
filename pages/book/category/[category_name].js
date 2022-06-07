import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Book from '@/components/Book';
import CategoryList from '@/components/CategoryList';
import matter from 'gray-matter';
import { getBooks } from '@/lib/books';

export default function CategoryBookPage({ books, categoryName, categories }) {
  console.log(books);
  return (
    <Layout>
      <div className="flex justify-between">
        <div className="w-3/4 mr-10">
          <h1 className="text-5xl border-b-4 p-5 font-bold">
            Books in {categoryName}
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {books.map((book, index) => (
              <Book key={index} book={book} />
            ))}
          </div>
        </div>

        <div className="w-1/4">
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('books'));

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('books', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter.category.toLowerCase();
  });

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

// so we can get the server-side posts to the client, allow us to pass
// posts above
export async function getStaticProps({ params: { category_name } }) {
  const files = fs.readdirSync(path.join('books'));

  const books = getBooks();

  // Get categories for sidebar
  const categories = books.map((book) => book.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  // Filter books by category
  const categoryBooks = books.filter(
    (book) => book.frontmatter.category.toLowerCase() === category_name
  );

  return {
    props: {
      books: categoryBooks,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  };
}
