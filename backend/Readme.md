create backend folder then : npm init

npm install express mongoose jsonwebtoken bcrypt cors dotenv body-parser multer stripe validator nodemon   

This command installs several Node.js packages for a backend project:

- **express**: Web framework for building APIs.
- **mongoose**: ODM for MongoDB database interactions.
- **jsonwebtoken**: For creating and verifying JWT tokens for authentication.
- **bcrypt**: For hashing passwords securely.
- **cors**: Enables Cross-Origin Resource Sharing for handling API requests from different domains.
- **dotenv**: Loads environment variables from a `.env` file.
- **body-parser**: Parses incoming request bodies (now included in Express).
- **multer**: Handles file uploads.
- **stripe**: Payment processing library.
- **validator**: Validates input data.
- **nodemon**: Automatically restarts the server during development.

These are commonly used in full-stack JavaScript applications for backend development.

need here chnage :

from here 
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

to

"scripts": {
     "server":"nodemon server.js"
  },
then : 
npm run server 