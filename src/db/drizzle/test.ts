/* import { eq } from 'drizzle-orm';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
  const posts = await drizzleDb.select().from(postsTable);

  posts.forEach(post => {
    console.log(post.title);
  });
  await drizzleDb
    .update(postsTable)
    .set({
      title: '3 - Rotina Matinal de Pessoas Altamente Eficazes',
      published: false,
    })
    .where(eq(postsTable.slug, 'rotina-matinal-de-pessoas-altamente-eficazes'));
})(); */
