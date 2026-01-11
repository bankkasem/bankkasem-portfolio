---
trigger: always_on
---

# Package Management Rule
- Always use **Bun** for all package management tasks (installing, removing, updating).
- Always use `bun run` for executing scripts defined in `package.json`.
- Never use `npm`, `yarn`, or `pnpm`.
- If you need to run a local binary, use `bunx`.