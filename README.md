🛍️ VibesDeals

«Discover better deals. Shop smarter.»

VibesDeals is a modern deals and shopping discovery platform designed to help users find trending products, attractive offers, and useful shopping content in one place.

✨ Features

- 🔥 Trending deals
- 🛒 Product discovery
- 💰 Shopping offers and discounts
- 📝 Shopping guides and blog posts
- 🔍 Deal and product discovery
- 📱 Responsive design
- ⚡ Fast and modern web experience
- 🎨 Clean, user-friendly interface
- 🤖 AI-powered development architecture
- 🔗 Affiliate-friendly deal structure

🚀 Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Node.js
- ESLint
- Google AI Studio

📂 Project Structure

vibesdeals/
├── .github/
│   └── workflows/
├── app/
├── components/
├── config/
├── hooks/
├── lib/
├── public/
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── metadata.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── LICENSE
└── README.md

🛠️ Getting Started

1. Clone the repository

git clone https://github.com/vibesdealsai-gif/vibesdeals.git

2. Go to the project directory

cd vibesdeals

3. Install dependencies

npm install

4. Configure environment variables

Create a ".env.local" file in the project root.

You can use ".env.example" as a reference:

cp .env.example .env.local

Add the required API keys and configuration values to ".env.local".

«⚠️ Never commit ".env.local" or private API keys to GitHub.»

5. Start the development server

npm run dev

Open your browser and visit:

http://localhost:3000

🏗️ Production Build

Create a production build:

npm run build

Start the production server:

npm start

📝 Blog Posts

Blog content is managed through the project's data layer.

Blog post data can be found in:

lib/data.ts

To add a new blog post, follow the existing "blogPosts" structure and provide:

- Title
- Slug
- Excerpt
- Content
- Image
- Publication date
- Author

Example:

{
  id: "b-new",
  title: "Best Deals You Should Not Miss",
  slug: "best-deals-you-should-not-miss",
  excerpt: "Discover some of the best deals and shopping opportunities.",
  content: "Your complete blog content goes here...",
  image: "/images/blog/deals.jpg",
  date: "2026-09-11",
  author: "Vibes Editorial"
}

The blog post URL will use the slug:

/blog/best-deals-you-should-not-miss

🔐 Environment Variables

For security, keep private credentials and API keys inside:

.env.local

Do not commit secrets to GitHub.

The repository includes:

.env.example

as a reference for environment configuration.

🌐 Deployment

VibesDeals can be deployed on a Next.js-compatible hosting environment.

Typical production commands:

npm install
npm run build
npm start

If your deployment provider is connected directly to this GitHub repository, push your changes to the configured branch and trigger a deployment according to your hosting configuration.

🤝 Contributing

Contributions and improvements are welcome.

Create a branch

git checkout -b feature/my-feature

Make your changes

Update the project as required.

Commit your changes

git add .
git commit -m "Add new feature"

Push your branch

git push origin feature/my-feature

Then open a Pull Request on GitHub.

📄 License

VibesDeals is licensed under the MIT License.

See the ""LICENSE"" (LICENSE) file for details.

🔗 Repository

GitHub:
https://github.com/vibesdealsai-gif/vibesdeals

---

❤️ VibesDeals

Discover deals. Find better products. Shop smarter.

Made with ❤️ for smarter shopping.
