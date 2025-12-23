# Prompt Enhancer - AI-Powered Prompt Enhancer

Transform rough website ideas into clear, actionable prompts with AI.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation & Running

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd Prompt-Clearer
```

2. **Start the Backend Server**

```bash
cd server
yarn 
yarn dev
```

The backend will run on `http://localhost:3000`

3. **Start the Frontend (in a new terminal)**

```bash
cd client
yarn
yarn dev
```

The frontend will run on `http://localhost:5173`

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠 Tech Stack

### Frontend

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool

### Backend

- **Express.js** - Server framework
- **MongoDB** - Store the enhanced and original prompts
- **AI Integration** - Prompt enhancement logic

## API Endpoints

- `POST /api/v1/enhancer` - Submit prompt for enhancement

  - Body: `{ "prompt": "your idea here" }`
  - Returns: Enhanced prompt

- `GET /api/v1/enhancer` - Get all enhancements in database

