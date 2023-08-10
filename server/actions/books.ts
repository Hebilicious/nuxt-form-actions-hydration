export const loader = defineServerLoader(async () => {
  // This is an h3 event handler, you can use any logic that you
  // want here, including database calls, etc.
  return { books: ['title'], manybooks: [] };
});
