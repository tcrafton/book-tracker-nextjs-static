const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function postData() {
  const files = fs.readdirSync(path.join('books'));

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

  return `export const books = ${JSON.stringify(books)}`;
}

try {
  fs.readdirSync('cache');
} catch (error) {
  fs.mkdirSync('cache');
}

fs.writeFile('cache/data.js', postData(), function (err) {
  if (err) return console.log(err);
  console.log('Books Cached...');
});
