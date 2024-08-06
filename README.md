<!-- @format -->

# A video app created using nextjs

This project is an example movies applications likew netflix. It uses the IMDB public REST API endpoint for data.
It uses typescrpt and shows how to render movies onto the app or frontend.Every part of the project is a sample code which shows how to do the following:

- How to use the nextjs app router
- How to use the nextjs fetch tool for calling api endpoints
- How to use localstorage to handle data
- How to use dynamic route or slug
- How to programmatically route

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started, How to run locally on your machine

1. Clone this project by running `git clone git@github.com:bismark66/video-app.git`
2. Install all dependencies from the project directory by running

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Create your public api key from IMDB using the link shown in IMDB Public API and configure in your .env.local file

- Use this api key, NEXT_PUBLIC_TMDB_API_KEY= b390329d9a4bbb3b5a960d29cbf30152
- Use this access token, NEXT_PUBLIC_TMDB_ACCESS_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzkwMzI5ZDlhNGJiYjNiNWE5NjBkMjljYmYzMDE1MiIsIm5iZiI6MTcyMTY5OTE4Ni41NDI1MzYsInN1YiI6IjYyYzg2NzZkMTNhMzIwMDA0ZjVjYmFiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PkSuBfkYRZt8PdsX_6y9BCF-x1RiD3Mf0zmXKFYgIZ0

4. Finally, run the development server:

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

Hurrayyyy!!! You are all set to make changes to any part of the project!

## IMDB Public API

Use The Movie Database API to fetch movie data. You can sign up for an API key at [TMDb](https://www.themoviedb.org/)

## Endpoints Used

- Top Rated Movies - https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}
- Up Coming Movies - https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}
- Popular Movies - https://api.themoviedb.org/3/movie/popular?api_key=${api_key}
- Get Movie External ID - https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${api_key}
- Get Movie By External ID - https://api.themoviedb.org/3/find/${external_id}?external_source=imdb_id
- Search Movie By Value Passed To URL - https://api.themoviedb.org/3/search/movie?query=${value}

## Frameworks

This Projects leverages the use of [ant design](https://ant.design/components/overview/) component libraries for some of it core components

## Testing

Testing was done using [Cypress](https://docs.cypress.io/guides/continuous-integration/introduction) testing library

## Deployment

App was deployed to vercel https://video-app-orcin-seven.vercel.app/

## Find bugs

If you found an issue and would like to submit an improvement to this project, please submit an issue using the issues tab above. If you would like to submit a PR with a fix, reference the issue you created!

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
