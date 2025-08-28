import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { postsTable } from './schemas';
import { drizzleDb } from '.';

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.delete(postsTable); // DELETE ALL EXISTING RECORDS, CAREFUL WITH THIS IN PRODUCTION
    await drizzleDb.insert(postsTable).values(posts);
  } catch (err) {
    console.error('Error seeding database:', err);
  }
})();
