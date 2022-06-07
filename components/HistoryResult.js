import React from 'react';
import Image from 'next/image';
import CustomTable from './CustomTable';

export default function HistoryResult({ books }) {
  console.log(books);

  const tableColumns = [
    {
      title: '',
      field: 'img',
      render: (item) => (
        <Image
          src={item.frontmatter.cover_image}
          alt=""
          border="3"
          height={50}
          width={50}
        />
      ),
    },
    { title: 'Title', field: 'frontmatter.title' },
    { title: 'Author', field: 'frontmatter.author' },
    { title: 'Category', field: 'frontmatter.category' },
    { title: 'Type', field: 'frontmatter.type' },
    { title: 'Last Completed', field: 'frontmatter.lastCompleted' },
    { title: 'Length', field: 'frontmatter.length' },
  ];
  return (
    <div>
      <CustomTable
        data={books}
        columns={tableColumns}
        title=""
        maxTableHeight="55vh"
      />
    </div>
  );
}
