# Litecode

## Launching Soon...

Litecode is a minimalistic version of Leetcode designed to provide a platform for coding challenges and assessments. Built with a modern stack, Litecode leverages Next.js, Hono, Turborepo, Shadcn, Tailwind CSS, Redis, and Judge0 to deliver a responsive and efficient coding environment.

Demo Video: 
<br>
[![Demo Video](https://img.youtube.com/vi/EakbXqBJ4uo/0.jpg)](https://www.youtube.com/watch?v=EakbXqBJ4uo)
<br>

## Features

- **Coding Challenges:** Access a variety of coding problems with test cases and solutions.
- **User Authentication:** Secure user login and registration using session management.
- **Real-time Code Execution:** Test your code in real-time with Judge0.
- **Interactive UI:** Modern and responsive design built with Tailwind CSS.
- **Scalable Architecture:** Monorepo setup with Turborepo for efficient development and deployment.
- **Efficient Caching:** Utilizes Redis for session and rate-limiting management.

## Tech Stack

- **Next.js:** For server-side rendering and building the frontend.
- **Hono:** For creating and managing API routes.
- **Turborepo:** For managing monorepos and optimizing build processes.
- **Shadcn:** UI components for a cohesive design.
- **Tailwind CSS:** For utility-first styling and responsive design.
- **Redis:** For caching and session management.
- **Judge0:** For executing and validating code submissions.

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/litecode.git
cd litecode
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
NEXTAUTH_URL=http://localhost:3000
REDIS_URL=redis://localhost:6379
JUDGE0_API_URL=https://api.judge0.com
```

### Run the Application

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to access Litecode.

## Usage

1. **Sign Up / Log In:** Register or log in to access coding challenges.
2. **Explore Problems:** Browse through various coding problems.
3. **Submit Solutions:** Write and submit code solutions directly in the editor.
4. **View Results:** Check the status and results of your code submissions.

## Contributing

Contributions are welcome! If you have any issues or feature requests, please open an issue or submit a pull request.

---



