# Express TS Starter Kits

Monorepo containing 2 architectural styles for Express + TypeScript + pnpm.

## 📂 Project Structure

### Feature-Based Architecture (Domain-Driven)

```text
src/
├── config/             # Global configurations
├── middleware/         # Global middlewares
├── modules/            # App modules grouped by business features
│   ├── auth/           # All authentication-related logic
│   │   ├── auth.controller.ts
│   │   ├── auth.routes.ts
│   │   └── auth.service.ts
│   └── users/          # All user management logic
│       ├── user.controller.ts
│       ├── user.model.ts
│       ├── user.routes.ts
│       └── user.service.ts
├── app.ts              # App initialization
└── server.ts           # App entry point
```

### Layered Architecture (MVC Minimalist)

```text
src/
├── config/             # DB configs, env loaders, 3rd-party clients
├── controllers/        # Request handlers (processes req, res)
├── middlewares/        # Auth guards, global error handler, loggers
├── models/             # DB schemas / data models
├── routes/             # API endpoint definitions
├── services/           # Core business logic & DB queries
├── app.ts              # Express app setup & middleware stitching
└── server.ts           # App entry point (app.listen)
```

---

## 🛠️ Essential Commands (Run from Root Folder)

### 1. Install All Dependencies

```bash
pnpm install
```

### 2. Run Development Mode (Hot Reloading)

```bash
# Feature-Based Version (Port 3000)
pnpm --filter feature-based-architecture dev

# Layered Version (Port 3001)
pnpm --filter layered-architecture dev

```

### 3. Build to Production (Generates dist/ folders)

```bash
pnpm -r build
```
