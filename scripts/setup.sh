#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
command -v docker >/dev/null || { echo "Docker with Compose is required." >&2; exit 1; }
if [ ! -f .env ]; then cp .env.example .env; fi
docker compose up --build -d
