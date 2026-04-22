## Security

The project uses **Supabase** as its backend, which provides the following security layers:

### Authentication and sessions
- Passwords are automatically hashed with **Bcrypt** — they are never stored in plain text.
- Upon login, two **JWT** tokens are generated: an **Access Token** (1 hour duration) and a **Refresh Token** that automatically renews it without user intervention.
- Sessions are managed client-side and are correctly invalidated upon logout.

### Encrypted communication
- All communication between the frontend and Supabase is encrypted via **HTTPS/TLS**.
- The project URL always operates under `https://` — Supabase does not allow HTTP connections.

### Database access control (RLS)
**Row Level Security (RLS)** is enforced on all tables to ensure each user only accesses the data they are authorized to see:

| Table | Policy |
|---|---|
| `profiles` | Each user can only view and edit their own profile |
| `profesores` | Only authenticated users can read |
| `ubicaciones` | Only authenticated users can read |
| `faqs` | Only authenticated users can read |
| `post` | Authenticated users can read, only the author can delete |
| `respuesta_post` | Authenticated users can read, only the author can delete |

### Attack protection
- **Rate limiting** active by default in Supabase to limit failed login attempts and prevent brute force attacks.
- **Captcha (hCaptcha)** integrated in login and register forms — enabled in production with a real domain.
- Connection keys (`SUPABASE_URL` and `SUPABASE_ANON_KEY`) are managed via environment variables in `.env`, excluded from the repository via `.gitignore`.

### Current security status

| Mechanism | Status |
|---|---|
| Bcrypt password hashing | ✅ Active |
| JWT with automatic refresh | ✅ Active |
| HTTPS/TLS | ✅ Active |
| Row Level Security | ✅ Active on all tables |
| Rate limiting | ✅ Active by default |
| Email confirmation | ⏳ Enabled in production |
| Captcha (hCaptcha) | ⏳ Enabled in production |