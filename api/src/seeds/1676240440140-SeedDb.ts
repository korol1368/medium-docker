import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1676240440140 implements MigrationInterface {
  name = 'SeedDb1676240440140';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    // password 321
    await queryRunner.query(
      `INSERT INTO users (username, email, password, image) VALUES ('Alex', 'alex@gmail.com', '$2b$10$Cr6k3GctSn1Rb7.yNjIZKO4Fne33h3FQXKQHTNpcHQp99ts03hYhu', 'https://cdn.meta.ua/meta_news/36/010011xy-36d6_1280x720.jpeg'), ('Olga', 'olga@gmail.com', '$2b$10$bXHpYSXjkFhSwUaxaYI92ejWe.a5ERUYin57rdm5SSW5vKpprJaNO', 'https://qph.cf2.quoracdn.net/main-qimg-6549df518bd001ae79e4e96f88120079-lq')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article desc', 'first article body', 'coffee,dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'second article desc', 'second article body', 'coffee,dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('third-article', 'Third article', 'third article desc', 'third article body', 'coffee,dragons', 2)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('fourth-article', 'Fourth article', 'fourth article desc', 'fourth article body', 'coffee,dragons', 2)`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(): Promise<void> {}
}
