CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "email" varchar,
  "password" varchar
);

CREATE TABLE "columns" (
  "id" integer PRIMARY KEY,
  "title" varchar,
  "userId" integer
);

CREATE TABLE "cards" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "columnId" integer
);

CREATE TABLE "comments" (
  "id" integer PRIMARY KEY,
  "body" text,
  "cardId" integer,
  "userId" integer
);

ALTER TABLE "columns" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");

ALTER TABLE "cards" ADD FOREIGN KEY ("columnId") REFERENCES "columns" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("cardId") REFERENCES "cards" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");
