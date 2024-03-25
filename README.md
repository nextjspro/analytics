# @nextjspro/analytics
Add Google Analytics to your NextJS projects

This package provides a simple way to integrate Google Analytics into your Next.js application. It includes a React component that renders the necessary scripts for setting up Google Analytics tracking with a given tracking ID.

## Installation

To install the package, run the following command:

```
npm install next-analytics
```

or if you're using Yarn:

```
yarn add next-analytics
```

## Usage

Import the `Analytics` component from the package and render it in your Next.js application, passing the Google Analytics Tracking ID as a prop:

```tsx
// pages/_app.tsx
import Analytics from 'next-analytics';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Analytics gid="G-2087SBK3KK" />
      <Component {...pageProps} />
    </>
  );
}
```

Replace `"G-2087SBK3KK"` with your actual Google Analytics Tracking ID.

### Prop Types

The `Analytics` component accepts a single prop:

- `gid` (string, required): The Google Analytics Tracking ID.

### Validation

The package includes a regular expression validation to ensure that the provided `gid` prop matches the expected format of a Google Analytics Tracking ID (`G-[A-Z0-9]+`). If the `gid` doesn't match the pattern, a warning will be logged to the console.

### TypeScript Support

This package is written in TypeScript and includes type definitions for better tooling support and type safety.

## Development

To develop or build the package, follow these steps:

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Build the package: `npm run build` or `yarn build`

The built package will be located in the `dist` directory.

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [Google Analytics Documentation](https://developers.google.com/analytics/devguides/collection/gtagjs)

## License

This package is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
