# express-mongoose-boilerplate

Deploy a Node.js server with express and mongoose.

## File structure

- :file_folder: controllers/
- :open_file_folder: config/
  - :page_facing_up: allowedOrigins.js
  - :page_facing_up: cors.js
  - :page_facing_up: db.js
  - :page_facing_up: routes.js
- :open_file_folder: controllers/
  - :page_facing_up: index.js
  - :page_facing_up: users.js
- :open_file_folder: middleware/
  - :page_facing_up: auth.js
  - :page_facing_up: token.js
  - :page_facing_up: users.js
- :open_file_folder: models/
  - :page_facing_up: users.js
- :open_file_folder: seeders/
  - :page_facing_up: index.js
  - :page_facing_up: users.js
- :page_facing_up: .env 
- :page_facing_up: .gitignore
- :page_facing_up: prettierc.js
- :page_facing_up: app.js
- :page_facing_up: package.json
- :page_facing_up: README.md

## Steps

1. At the repository root, download the dependencies with **npm**:
```
npm install
```

2. Make sure you're running your database service.

3. At project root directory.
```
npm start
```
