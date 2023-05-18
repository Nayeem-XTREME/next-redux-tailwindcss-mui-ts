This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), along with [Typescript](https://www.typescriptlang.org/), [Redux Toolkit](https://redux-toolkit.js.org/), [Tailwind CSS](https://tailwindcss.com/), [Material UI](https://mui.com/) and [Storybook](https://storybook.js.org/).

## Getting Started

First, install all the dependencies, (must use `Node.JS` >= 16):

```
npm i
```

Second, run the development server:

#### For Next.JS App:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### For Storybook:

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
```
Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Contribution

If you want to contribute to this repository, follow the steps:

1. Create a brand with relevent name from `main`.
2. Make your changes. Make sure to solve all the error's from `ESLint`, `Prettier`, and `Typescript`. Also, check the browser console in development mode to make sure there is no `errors` and `warnings`.
3. Run the following commands before making commit:

```bash
npm run fix-lint
npm run format
# or
npm run fix-all
```

4. Commit your changes with proper message, from the `terminal`. `DO NOT COMMIT FROM VSCODE SIDEBAR`. Make sure `husky` is working properly. If there is any issue with `types`, `linting`, `formatting`, `husky` will reject the commit.
5. If succeeded, make a `PR` with the `main` branch, and assign a reviewer for checking.

## Learn More

#### To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

#### To learn more about Storybook, take a look at the following resources:

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/install/) - learn about Storybook features and API.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
