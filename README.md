This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

#FOlder Structure
hotel-management-agency/
├── .gitignore
├── package.json
├── README.md
├── next.config.js
├── tailwind.config.js
├── shadcn.config.js
├── tsconfig.json
├── public/
│   ├── favicon.ico
│   ├── images/
│   └── loader.gif
├── app/
│   │   ├── layout.tsx  # Main layout with header/footer
│   │   ├── page.tsx  # Homepage component
│   │   ├── about/page.tsx  # About page
│   │   ├── contact/page.tsx  # Contact page with form
│   │   ├── services/
│   │   │   └── page.tsx  # Service offerings (custom bots, website development)
│   │   └── dashboard/  # Dashboard for hotel clients
│   │       └── page.tsx
│   ├── components/
│   │   ├── Header.tsx  # Responsive header with navigation
│   │   ├── Footer.tsx  # Footer component
│   │   ├── Loader.tsx  # Dynamic loader component
│   │   ├── BotCard.tsx  # Custom bot feature component
│   │   ├── ResponsiveCard.tsx  # Responsive service card component
│   ├── utils/
│   │   └── api.js  # Axios or fetch wrapper for API requests
│   ├── hooks/
│   │   └── useFetch.ts  # Custom hook to fetch data from API
│   └── lib/
│       └── mongodb.js  # MongoDB connection setup
├── server/  # Backend folder (Node.js + Express)
│   ├── controllers/
│   │   ├── hotelController.js  # Business logic for hotels
│   │   └── authController.js  # Auth logic
│   ├── models/
│   │   ├── Hotel.js  # Hotel model schema
│   │   └── User.js  # User model schema
│   ├── routes/
│   │   ├── hotelRoutes.js  # Hotel-related routes
│   │   └── authRoutes.js  # Auth routes (register, login)
│   └── index.js  # Main backend server setup
└── .env  # Environment variables
