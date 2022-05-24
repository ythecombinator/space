# Next.js Front End starter pack

Based on [`next-theme-ui-example`](https://github.com/system-ui/theme-ui/tree/master/examples/next).

Featuring:

- TypeScript
- Next.js
- ThemeUI
- NProgress
- Jest
- Cypress
- react-testing-library

## Testing

Jest is configured and ready to use with `react-testing-library`.

There is a custom rendering setup similar to what is found in [the documentation](https://testing-library.com/docs/react-testing-library/setup#custom-render). It wraps all tested components with ThemeUI's `ThemeProvider`.

The custom test renderer, and all `react-testing-library` exports are available without using relative imports:

```javascript
import { render, fireEvent } from 'test-utils';
```

Make sure you import from `'test-utils'` or your tests may crash if the theme is expected.

### Emotion snapshots

Because ThemeUI uses emotion under the hood, `@emotion/jest`'s [snapshot serializer](https://emotion.sh/docs/testing) is included.

Refer to the emotion's [testing documentation](https://emotion.sh/docs/testing) for more info.

### End-to-End tests with Cypress

See [the example test](https://github.com/freddydumont/theme-ui-next-boilerplate/blob/master/cypress/integration/navigation_spec.ts) and Cypress's documentation to get started.

By default the tests are running in CI with GitHub actions.
