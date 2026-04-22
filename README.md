# Proyecto – Asistente General Estudiantil (AGE)

---

## Tabla de Navegación

| Archivo / Carpeta | Descripción |
|---|---|
| [README.md](./README.md) | Descripción general del repositorio y navegación |
| [index.md](./doc/index.md) | Descripción del problema del proyecto, público objetivo y navegación |
| [index.md](./doc/analysis/index.md) | Visión general de la fase de análisis |
| [requirements-fn.md](./doc/analysis/requirements-fn.md) | Requisitos funcionales |
| [requirements-nfn.md](./doc/analysis/requirements-nfn.md) | Requisitos no funcionales |

---

## Estructura del Repositorio

```
/
│── README.md
└── doc/
    │── index.md
    └── analysis/
        │── index.md
        │── requirements-fn.md
        │── requirements-nfn.md
```
---

## Descripción del Repositorio

Este repositorio contiene la documentación y el análisis de una **extensión web y móvil** diseñada para apoyar a los **estudiantes nuevos de la Universidad Pontificia Bolivariana (UPB)**.

El proyecto se centra en facilitar el proceso de adaptación de los estudiantes de primer ingreso mediante la centralización de herramientas e información útil, tales como:
- Un mapa del campus para la navegación.
- Un foro de ayuda para resolver dudas estudiantiles.
- Horarios de asesorías y tutorías.

El repositorio incluye la documentación de la fase de análisis, los requisitos funcionales y no funcionales, y la estructura de navegación del proyecto.

---

## Documentación

Toda la información del proyecto se estructura dentro del directorio `doc`, el cual se mantiene en constante actualización conforme avanza el desarrollo.

Dentro de esta carpeta se encuentra el archivo `index.md`, que presenta una visión general del proyecto y proporciona una tabla de navegación que facilita el acceso a las distintas secciones y documentos principales.

---

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
---

## Equipo 

**`equipo-3-ing-202610`**

## Integrantes del Equipo

- Juan Esteban Correa Castro  
- Miguel Angel Gonzalez Ibarra  
- Juan Pablo Gonzalez Zabala  
- Santiago Londoño Barrientos  
