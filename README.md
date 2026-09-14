# portfolio

Laravel 13, Inertia 3, React 19, TypeScript, Tailwind CSS, and MySQL 8.4, organized like the sibling `readingful-v2` project.

## Structure

```text
app/                         Laravel controllers, middleware, models, providers
bootstrap/                   Laravel application bootstrapping
config/                      Laravel configuration
routes/                      Web, API, and console routes
resources/
  js/
    app.tsx                  Inertia entry point
    Pages/Home.tsx           Home page
    Components/              Reusable React components
    Layouts/                 Page layouts
    assets/                  Frontend assets
  css/app.css                Tailwind and base styles
  views/app.blade.php        Inertia root template
public/                      Web root and generated build assets
database/                    Migrations, factories, seeders
tests/                       PHP tests
docker/
  php/                       PHP-FPM image, entrypoint, PHP settings
  nginx/                     Nginx image and FastCGI configuration
docker-compose.yml           Local development services
.env.example                 Shared Laravel, Vite, and Docker defaults
```

Composer, npm, Artisan, Vite, and TypeScript configuration live at the repository root. React uses the `@/` alias for `resources/js`. New Inertia pages go in `resources/js/Pages` and are returned from Laravel web routes.

Readingful also has domain-specific Actions, Services, Jobs, policies, and frontend contexts/hooks. Add these as portfolio needs them. Its billing, reporting, realtime, and Storybook dependencies are not included here. This project keeps MySQL rather than Readingful's MariaDB.

## Start development

Requires Docker with Compose. From the project root:

```bash
npm run setup
# Or, on the first run:
cp .env.example .env
# Then:
docker compose up --build -d
```

Open http://localhost:8080. The first start installs dependencies, generates an application key if missing, and runs migrations. Check startup progress with `docker compose logs -f app node`. Nginx serves `public/` and forwards PHP requests to the project-specific `portfolio-fpm` alias. Node runs Vite with hot reload; changes to the bind-mounted source take effect without rebuilding images.

The `app`, `nginx`, `db`, and `node` containers follow Readingful's service layout. Docker keeps PHP and npm dependencies in named volumes, separate from host installations. Startup does not wait for the entire stack to become healthy; service dependencies still enforce database readiness before migrations and PHP-FPM readiness before Nginx.

```bash
docker compose ps
docker compose logs -f app node
docker compose exec app php artisan migrate:status
docker compose exec node npm run build
docker compose down
```

## Environment

The root `.env` is shared by Laravel, Vite, and Compose. Container names and the network are configurable using `DOCKER_*` variables, following Readingful's convention.

| Setting | Default |
| --- | --- |
| Application URL | `http://localhost:8080` |
| Vite | `http://localhost:5173` |
| MySQL from containers | `db:3306` |
| MySQL from host tools | `127.0.0.1:3307` |
| Database / username / password | `portfolio` / `portfolio` / `portfolio` |

Change `APP_PORT` together with `APP_URL`. `MYSQL_PORT` changes the host mapping; `DB_PORT` stays `3306` inside Docker. Changing database credentials after MySQL initializes also requires updating the existing MySQL user.

The MySQL and storage volumes retain their previous names (`portfolio_mysql-data` and `portfolio_backend-storage`) to preserve existing data. The root `.env` now supplies the application key; keep it backed up. `docker compose down` preserves volumes; adding `-v` deletes them. Existing SQLite files are not used or imported into MySQL.

## Optional services

```bash
docker compose --profile tools up -d
```

This adds Redis, phpMyAdmin at http://localhost:7002, and MailHog at http://localhost:8025. Log into phpMyAdmin with the database credentials above. Set `MAIL_MAILER=smtp` to send mail to MailHog. Redis is available at `redis:6379`; set `CACHE_STORE=redis`, `SESSION_DRIVER=redis`, or `QUEUE_CONNECTION=redis` when needed. Redis queues also need a worker, for example `docker compose exec app php artisan queue:work`.

## Checks

```bash
docker compose exec node npm run build
docker compose exec node npm run lint
docker compose exec app php artisan test --compact
```

For host checks, run `composer install` and `npm ci`, then `npm run build`, `npm run lint`, and `npm run test:backend`. PHP tests use isolated in-memory SQLite. Host Laravel development requires changing `DB_HOST` to `127.0.0.1` and `DB_PORT` to `3307`, and stopping the Docker Node service before running `npm run dev`; run `npm run dev:backend` separately.

This bind-mounted Docker setup is for development. Production should install dependencies and build assets into deployable images, with production credentials and HTTPS.
