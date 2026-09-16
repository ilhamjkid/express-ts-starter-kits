# Express TS Starter Kits

A collection of Express.js + TypeScript starter kits demonstrating different architectural styles, configured as a workspace monorepo.

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
│   └── user/           # All user management logic
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
├── config/             # DB configs, env loaders, 3rd party clients
├── controllers/        # Request handlers (processes req, res)
├── middlewares/        # Auth guards, global error handler, loggers
├── models/             # DB schemas / data models
├── routes/             # API endpoint definitions
├── services/           # Core business logic & DB queries
├── app.ts              # Express app setup & middleware stitching
└── server.ts           # App entry point (app.listen)
```

## 🛠️ Tech Stack

- **Runtime & Package Manager**: Bun
- **Framework**: Express.js
- **Language**: TypeScript

## 📦 Essential Commands (Run from Root Folder)

1. **Install All Dependencies:**

   ```bash
   bun install
   ```

2. **Run Development Mode (Hot Reloading):**
   - **Feature-Based Version:**

     ```bash
     bun --filter feature-based-architecture dev
     ```

   - **Layered Version:**

     ```bash
     bun --filter layered-architecture dev
     ```

3. **Build to Production:**
   - **Feature-Based Version:**

     ```bash
     bun --filter feature-based-architecture build
     ```

   - **Layered Version:**

     ```bash
     bun --filter layered-architecture build
     ```
