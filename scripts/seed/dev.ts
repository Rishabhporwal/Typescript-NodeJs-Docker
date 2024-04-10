import db, { genId } from '../../src/modules/db';

const run = async () => {
  await db.post.createMany({
    data: [
      {
        id: genId(),
        slug: 'Ultimate Node Stack',
        title: 'Ultimate Node Stack',
        publishedAt: new Date(),
      },
      {
        id: genId(),
        slug: 'draft-post',
        title: 'draft-post',
      },
    ],
  });
};

if (require.main === module) {
  run()
    .then(() => {
      console.log('Seeding Completed');
      process.exit(1);
    })
    .catch((err) => {
      console.log('Errror while seeding');
    });
}
