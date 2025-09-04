# 🎬 Movie Idea Generator

A cinematic web app that transforms short user prompts into full movie concepts.  
Built with a clean white-and-blue design, smooth animations, and AI-powered storytelling.

## ✨ Features
- **AI-Powered Generation** – Expand 1–2 sentence ideas into full movie concepts
- **Comprehensive Output** – Name, genre, tagline, plot, characters, themes, structure, conflict, setting, final scene, end credits, and music theme
- **Download Option** – Save generated concepts as `.txt` files
- **Cinematic UI** – White & blue theme with film-inspired icons and smooth animations
- **Responsive Design** – Works seamlessly on desktop and mobile

## 🚀 How It Works
1. Enter a short movie idea (1–2 sentences).
2. Click **Generate**.
3. The app calls the [OpenRouter](https://openrouter.ai) API (`deepseek/deepseek-chat-v3.1:free`) to generate a complete movie breakdown.
4. View the results instantly and optionally **download them as a text file**.

## 🛠️ Tech Stack
- **Frontend**: HTML / CSS / JavaScript (or React, depending on your version)
- **API**: [OpenRouter AI API](https://openrouter.ai)
- **Styling**: White & blue gradient theme, cinematic icons, smooth animations

## 🔑 Setup
1. Clone this repo:
```
git clone https://github.com/your-username/movie-idea-generator.git
cd movie-idea-generator
```

2. Add your OpenRouter API key in the project:
```
const API_KEY = "sk-or-xxxxxxxxxxxxxxxx";
```

3. Open index.html in your browser (or run with your React dev server).

4. Start generating movie ideas! 🎥

## 📂 Example Output

```
Movie Idea: The Last Horizon
Genre: Sci-Fi Adventure
Tagline: "When the edge of space isn’t the end..."
Plot Summary: ...
Key Characters: ...
Themes: ...
Story Structure: ...
Core Conflict: ...
Setting: ...
Final Scene: ...
End Credits: ...
Music Theme: ...
```

## 📜 License

This project is licensed under the MIT License.

# Lovable project

## Project info

**URL**: https://lovable.dev/projects/91492c7a-04ce-435f-9dda-0f10f80048e6

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/91492c7a-04ce-435f-9dda-0f10f80048e6) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/91492c7a-04ce-435f-9dda-0f10f80048e6) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
