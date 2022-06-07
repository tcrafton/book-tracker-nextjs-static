export const sortByDate = (a, b) => {
  return (
    new Date(b.frontmatter.lastCompleted) -
    new Date(a.frontmatter.lastCompleted)
  );
};
