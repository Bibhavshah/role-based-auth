# Node.js Role-Based Authentication System

## Overview

This is a robust Node.js authentication system with Role-Based Access Control (RBAC), implementing secure user registration, login, logout, and role management.

## Features

### Authentication
- User Registration
- Secure Login
- JWT-based Authentication
- Logout with Token Blacklisting
- Password Hashing

### Authorization
- Role-Based Access Control
- Multiple User Roles
  - User
  - Moderator
  - Admin
  - Superuser

### Security Features
- Password encryption with bcrypt
- JWT token management
- Token blacklisting
- Role-specific route protection
- Superuser creation mechanism

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Password Encryption**: bcrypt

## Prerequisites

- Node.js (v14 or later)
- MongoDB
- npm (Node Package Manager)

## Installation

1. Clone the repository
```bash
git clone https://your-repo-url.git
cd nodejs-auth-system
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file in the project root
```env
MONGODB_URI=mongodb://localhost:27017/your_database_name
JWT_SECRET=your_very_secret_key_here
PORT=5000
SUPERUSER_USERNAME=username   
SUPERUSER_EMAIL=username@email.com
```

## Environment Variables

- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token signing
- `PORT`: Server port (default: 5000)
- SUPERUSER_USERNAME=username   
- SUPERUSER_EMAIL=username@email.com

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | User Registration | Public |
| POST | `/api/auth/login` | User Login | Public |
| POST | `/api/auth/logout` | User Logout | Authenticated |

### Role Management Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| PUT | `/api/auth/change-role` | Change User Role | Superuser Only |
| GET | `/api/auth/users` | List All Users | Admin, Superuser |
| DELETE | `/api/auth/users/:userId` | Delete User | Superuser Only |

### Protected Role Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/auth/admin-dashboard` | Admin Dashboard | Admin Only |
| GET | `/api/auth/moderator-panel` | Moderator Panel | Moderator, Admin |

## User Roles Hierarchy

1. Superuser (Highest)
2. Admin
3. Moderator
4. User (Lowest)

## Superuser Creation

- It is created with a particular email and username that is passed through env 
- Requires a special creation key
- Has highest-level access to all system features

## Security Practices

- JWT-based authentication
- Token blacklisting for logout
- Password hashing with bcrypt
- Role-based access control
- Environment-based configuration

## Error Handling

- Comprehensive error messages
- Secure error logging
- Protection against common vulnerabilities

## Logging

- Console logging for server events
- Error logging for authentication processes

## Scalability

- Modular architecture
- Easy to extend and add new features
- Separation of concerns in code structure

## Potential Improvements

- Add more comprehensive logging
- Implement password reset functionality
- Add two-factor authentication
- Create more granular role permissions

## Troubleshooting

- Ensure MongoDB is running
- Check `.env` file configurations
- Verify network and port availability

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - Bibhav Kumar Sah, bibhavsah@gmail.com