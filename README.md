🤖 AI Code Review Agent

An AI-powered developer tool that automatically reviews staged Git commits to detect security issues, bad practices, and code quality problems before code is committed or merged.

🚀 Why this project?

-> Manual code reviews are time-consuming and error-prone.
Developers often miss:

-> Hardcoded secrets

-> Security vulnerabilities

-> Poor coding practices

-> AI Code Review Agent solves this by acting as an AI reviewer inside your Git workflow.

✨ Features

🔍 Reviews only staged changes (git diff --cached)

🛑 Blocks commits when critical issues are found

⚙️ Integrates with Git pre-commit hooks

🔁 Runs automatically in GitHub Actions

🧠 AI-powered review for:

-> Security vulnerabilities

-> Code quality issues

-> Bad practices

🛡️ Handles large diffs safely (auto-truncation)

⚠️ Fails gracefully when API quota is exceeded

🧱 Architecture Overview
Git Commit / PR
      ↓
git diff --cached
      ↓
AI Review Agent
      ↓
OpenAI API
      ↓
Review Result
      ↓
Commit Allowed / Blocked


🛠️ Tech Stack

Node.js

TypeScript

OpenAI API

Git Hooks

GitHub Actions (CI/CD)

⚙️ Setup & Run Locally
1️⃣ Clone repository
git clone https://github.com/Ravindrabijarniya/ai-code-review-agent.git
cd ai-code-review-agent

2️⃣ Install dependencies
npm install

3️⃣ Add environment variable

Create .env file:

OPENAI_API_KEY=your_api_key_here


.env is ignored by Git for security.

4️⃣ Build project
npm run build

5️⃣ Stage a file and run review
git add src/index.ts
npm start

🪝 Git Pre-Commit Hook (Optional)

Create file:

.git/hooks/pre-commit


Content:

#!/usr/bin/env node
node dist/index.js


Now every commit is automatically reviewed.

🔁 GitHub Actions (CI)

The agent also runs on every Pull Request using GitHub Actions.

Add secret in GitHub repo:

OPENAI_API_KEY


Workflow file:

.github/workflows/ai-review.yml

⚠️ Error Handling

Large diffs are automatically truncated

API quota errors do not block commits

Meaningful logs are shown to developers

Example:

⚠️ AI review skipped: API quota exceeded.
✅ Commit allowed.

🧠 Example AI Review Output
🧠 AI Review:
- Hardcoded password detected
- Security risk: sensitive credentials should not be committed
- Recommendation: use environment variables

🎯 Use Cases

Prevent security leaks

Enforce code quality

Assist junior developers

Automate code review in teams

CI-based PR reviews

🏆 Hackathon Highlights

Real AI agent (not a demo)

Integrated with real developer workflows

Production-safe architecture

CI/CD ready

Graceful failure handling

👨‍💻 Author

Ravindra Bijarniya
GitHub: https://github.com/Ravindrabijarniya

📜 License

MIT License


