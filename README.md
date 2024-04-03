# SolidStart

Open terminal:

```bash
pnpm i
pnpm build && pnpm start
```

In another terminal from the project directory:

```bash
pnpm cypress open
```

- Choose `E2E Testing`
- Select Chrome browser
- Click Start E2E Testing in Chrome
- Run `script-loader.spec.js`
- Should succeed

Stop Headless Chrome using `Close` from Cypress app.

- Select Firefox flavored browser
- Click Start E2E Testing in Firefox
- Run `script-loader.spec.js`
- It will fail after a few iterations.