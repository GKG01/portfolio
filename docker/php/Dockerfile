# syntax=docker/dockerfile:1
FROM php:8.5-fpm

RUN apt-get update \
    && apt-get install -y --no-install-recommends git unzip libzip-dev \
    && docker-php-ext-install pdo_mysql pcntl zip \
    && pecl install redis \
    && docker-php-ext-enable redis \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer
COPY docker/php/php.ini /usr/local/etc/php/conf.d/app.ini
COPY --chmod=755 docker/php/entrypoint.sh /usr/local/bin/app-entrypoint
WORKDIR /var/www/html
ENTRYPOINT ["app-entrypoint"]
CMD ["php-fpm", "-F"]
