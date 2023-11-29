# Blog Application SQLite Schema Design

## Entities

### User
- **Fields:**
  - `user_id` (Primary Key): Unique identifier for each user.
  - `username`: Name or username of the user.
  - `age` : Age of the user.
  - `gender` : Gender of the user.
  - `account_created`: Date and time when the user account was created.

### Post
- **Fields:**
  - `post_id` (Primary Key): Unique identifier for each post.
  - `title`: Title of the post.
  - `post_content`: Content of the post.
  - `author_id` (Foreign Key): References the `user_id` from the User table, indicating the author of the post.
  - `post_created` : Date and time when the post was created.

### Comment
- **Fields:**
  - `comment_id` (Primary Key): Unique identifier for each comment.
  - `comment_content`: Content of the comment.
  - `author_id` (Foreign Key): References the `user_id` from the User table, indicating the author of the comment.
  - `post_id` (Foreign Key): References the `post_id` from the Post table, indicating the post that the comment is associated with.
  - `comment_created` : Date and time when the comment was created.

## Relationships
- The `user_id` in the User table is used as a primary key to connect with other entities.
- In the Post table, `author_id` is a foreign key referencing `user_id` from the User table, establishing a connection between users and their posts.
- In the Comment table, `author_id` and `post_id` are foreign keys connecting comments to the respective users and posts.

This schema design allows for a structured representation of users, posts, and comments, establishing relationships between them.
