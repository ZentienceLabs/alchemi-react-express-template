# Alchemi React + Express Template

A modern full-stack monorepo template featuring React with Vite, Express.js with TypeScript, shadcn/ui components, Tailwind CSS, and comprehensive VS Code debug configurations.

## 🚀 Features

### Frontend (React)
- ⚡ **Vite** - Lightning fast development and build tool
- 🔷 **TypeScript** - Type safety and better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful and accessible UI components
- 🔄 **React Router** - Client-side routing
- 📡 **Axios** - HTTP client for API communication
- 🧪 **Vitest** - Fast unit testing framework

### Backend (Express)
- 🟢 **Express.js** - Fast, unopinionated web framework
- 🔷 **TypeScript** - Type safety for server-side code
- 🛡️ **Helmet** - Security middleware
- 🌐 **CORS** - Cross-origin resource sharing
- 📝 **Morgan** - HTTP request logger
- 🔄 **Nodemon** - Hot reload development
- 🧪 **Jest** - Testing framework

### Development Experience
- 🏗️ **Monorepo Structure** - Organized workspace with npm workspaces
- 🐛 **VS Code Debug Configs** - Full-stack debugging support
- 🔧 **ESLint & Prettier** - Code quality and formatting
- 📋 **VS Code Tasks** - Automated build and test commands
- 🔌 **VS Code Extensions** - Recommended extensions for optimal DX

## 📁 Project Structure

```
alchemi-react-express-template/
├── web/                          # React frontend
│   ├── src/
│   │   ├── components/ui/        # shadcn/ui components
│   │   ├── lib/                  # Utility functions
│   │   ├── App.tsx               # Main app component
│   │   └── main.tsx              # Entry point
│   ├── public/                   # Static assets
│   ├── package.json              # Frontend dependencies
│   ├── vite.config.ts            # Vite configuration
│   └── tailwind.config.js        # Tailwind configuration
├── api/                          # Express backend
│   ├── src/
│   │   ├── controllers/          # Route controllers
│   │   ├── middleware/           # Custom middleware
│   │   ├── routes/               # API routes
│   │   ├── types/                # TypeScript type definitions
│   │   └── index.ts              # Server entry point
│   ├── package.json              # Backend dependencies
│   ├── tsconfig.json             # TypeScript configuration
│   └── nodemon.json              # Nodemon configuration
├── .vscode/                      # VS Code configuration
│   ├── launch.json               # Debug configurations
│   ├── tasks.json                # Build tasks
│   └── settings.json             # Workspace settings
├── package.json                  # Root workspace configuration
└── alchemi-react-express.code-workspace  # VS Code workspace
```

## 🚀 Quick Start

### Option 1: Using Development Scripts (Recommended)

**Windows:**
```bash
./dev.bat
```

**macOS/Linux:**
```bash
chmod +x dev.sh
./dev.sh
```

### Option 2: Manual Setup

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Start development servers:**
   ```bash
   npm run dev
   ```

3. **Access the applications:**
   - **Web App**: http://localhost:3000
   - **API Server**: http://localhost:5000
   - **Health Check**: http://localhost:5000/health

## 🛠️ Development

### Available Scripts

**Root Level:**
```bash
npm run dev                 # Start both web and API servers
npm run dev:web             # Start only React dev server
npm run dev:api             # Start only Express dev server
npm run build               # Build web app for production
npm run build:web           # Build React app
npm run build:api           # Build Express API
npm run install:all         # Install all dependencies
npm run type-check          # TypeScript type checking
npm run test                # Run all tests
```

**Web App (React):**
```bash
cd web
npm run dev                 # Start development server
npm run build               # Build for production
npm run preview             # Preview production build
npm run lint                # Run ESLint
npm run type-check          # TypeScript type checking
npm test                    # Run tests with Vitest
```

**API Server (Express):**
```bash
cd api
npm run dev                 # Start with nodemon (hot reload)
npm run build               # Compile TypeScript
npm start                   # Run compiled JavaScript
npm test                    # Run tests with Jest
npm run lint                # Run ESLint
```

## 🐛 VS Code Debugging

### Setup
1. Open `alchemi-react-express.code-workspace` in VS Code
2. Install recommended extensions when prompted

### Debug Configurations
- **Debug Express API** - Debug the Express server with ts-node
- **Debug React Web** - Debug the React development server
- **Debug API with Nodemon** - Debug with nodemon for hot reload
- **Debug Full Stack** - Debug both web and API simultaneously
- **Debug Full Stack (Nodemon)** - Full stack with nodemon

### Usage
1. **F5** - Start "Debug Full Stack" configuration
2. **Ctrl+Shift+P** → "Debug: Select and Start Debugging" for specific configs
3. Set breakpoints in `.ts/.tsx` files
4. Use VS Code's debug console and variables panel

## 🌐 API Endpoints

The Express API provides these example endpoints:

- `GET /` - Welcome message with API info
- `GET /health` - Health check endpoint
- `GET /hello` - Simple hello world response
- `GET /users` - Get all users (mock data)
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user

### Example API Usage

```javascript
// Get all users
const response = await axios.get('/api/users');

// Create new user
const newUser = await axios.post('/api/users', {
  name: 'John Doe',
  email: 'john@example.com'
});
```

## 🎨 UI Components

The project includes shadcn/ui components with Tailwind CSS:

- **Button** - Various button variants and sizes
- **Card** - Card layout components with header, content, footer
- **Ready to extend** - Easy to add more shadcn/ui components

### Adding More Components

```bash
cd web
npx shadcn-ui@latest add [component-name]
```

## 🔄 Proxy Configuration

The React dev server proxies API calls to the Express server:
- API calls to `/api/*` are forwarded to `http://localhost:5000`
- Eliminates CORS issues during development
- Configured in `web/vite.config.ts`

## 🧪 Testing

### React (Vitest)
```bash
cd web
npm test                    # Run tests
npm run test:watch          # Run tests in watch mode
```

### Express (Jest)
```bash
cd api
npm test                    # Run tests
npm run test:watch          # Run tests in watch mode
```

## 📦 Production Build

### Build for Production
```bash
npm run build               # Build React app
npm run build:api           # Compile TypeScript for API
```

### Deploy
- **Frontend**: Deploy `web/dist/` to static hosting (Vercel, Netlify, etc.)
- **Backend**: Deploy compiled API to Node.js hosting (Railway, Render, etc.)

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` in the API directory and configure:

```env
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000
# Add your configuration...
```

### TypeScript

Both web and API are configured with strict TypeScript:
- Web: Modern React with JSX
- API: Node.js with CommonJS modules

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Express.js](https://expressjs.com/) - Web framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

---

**Built with ❤️ by Alchemi**