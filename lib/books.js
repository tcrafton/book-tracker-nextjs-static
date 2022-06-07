import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sortByDate } from '@/utils/index';

const files = fs.readdirSync(path.join('books'));

export function getBooks() {
  const books = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('books', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return books.sort(sortByDate);
}
