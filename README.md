# 📱 Social Media Dashboard

A full-stack social media dashboard application built with **Node.js/Express**, **MongoDB**, and **React**.

## ✨ Features

- 👤 User authentication (Register/Login)
- 📝 Create, read, update, and delete posts
- ❤️ Like/Unlike posts
- 💬 Comment on posts
- 👥 Follow/Unfollow users
- 🔐 JWT-based authentication
- 📱 Responsive design
- 🎯 Real-time updates

## 📂 Project Structure

```
├── backend/
│   ├── config/
│   │   └── db.js           # Database configuration
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Comment.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── postRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🛠️ Tech Stack

**Backend:**
- Express.js - Web framework
- MongoDB - Database
- Mongoose - ODM
- JWT - Authentication
- bcryptjs - Password hashing
- CORS - Cross-origin requests

**Frontend:**
- React - UI library
- Axios - HTTP client
- React Router - Navigation
- CSS/Tailwind - Styling

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Git

## 🚀 Quick Start

### Backend Setup

```bash
cd backend
npm install

# Create .env file
echo 'MONGODB_URI=mongodb://localhost:27017/social-media' > .env
echo 'JWT_SECRET=your_jwt_secret_key' >> .env
echo 'PORT=5000' >> .env
echo 'NODE_ENV=development' >> .env

# Start server
npm start
# Server runs on http://localhost:5000
```

### Frontend Setup

```bash
cd frontend
npm install

# Start development server
npm start
# App runs on http://localhost:3000
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `GET /api/users/:id/follow` - Follow user
- `GET /api/users/:id/unfollow` - Unfollow user

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `POST /api/posts/:id/like` - Like post
- `POST /api/posts/:id/comment` - Add comment

## 🗄️ Database Schema

### User Model
```javascript
{
  username: String,
  email: String,
  password: String (hashed),
  bio: String,
  avatar: String,
  followers: [ObjectId],
  following: [ObjectId],
  createdAt: Date
}
```

### Post Model
```javascript
{
  author: ObjectId,
  content: String,
  image: String,
  likes: [ObjectId],
  comments: [ObjectId],
  createdAt: Date,
  updatedAt: Date
}
```

## 🔒 Authentication

The application uses JWT for authentication. When a user logs in, they receive a JWT token that must be included in subsequent requests.

**Header:**
```
Authorization: Bearer <token>
```

## 🚢 Deployment

### Deploy to Heroku

```bash
# Install Heroku CLI
# Create Heroku app
heroku create your-app-name

# Set environment variables
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_secret

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

### Deploy to AWS, Azure, or Google Cloud

Refer to respective platform documentation for Node.js and React deployment.

## 🧪 Testing

```bash
cd backend
npm test
```

## 📝 Environment Variables

Create a `.env` file in the backend folder:

```
MONGODB_URI=mongodb://localhost:27017/social-media
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running locally or provide correct Atlas connection string

**CORS Error:**
- Check that CLIENT_URL in .env matches your frontend URL

**JWT Errors:**
- Ensure JWT_SECRET is set in environment variables

## 📚 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB University](https://university.mongodb.com/)
- [React Documentation](https://react.dev/)
- [JWT Explained](https://jwt.io/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for learning and development.

## 📧 Contact

For questions or support, please create an issue or contact the maintainer.

---

**Made with ❤️ by Munthala Lakshmi Tejaswi**
