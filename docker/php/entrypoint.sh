#!/bin/sh
set -eu
cd /var/www/html
mkdir -p storage/framework/cache/data storage/framework/sessions storage/framework/views storage/logs bootstrap/cache
composer install --no-interaction --prefer-dist
php artisan config:clear --no-interaction
if ! grep -q '^APP_KEY=base64:' .env; then
    php artisan key:generate --no-interaction
fi
php artisan migrate --force --no-interaction
chown -R www-data:www-data storage bootstrap/cache
exec docker-php-entrypoint "$@"
