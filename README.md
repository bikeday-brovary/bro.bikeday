# Велодень Бровари 2026

Оновлена статична сторінка для події **Велодень Бровари 2026 / BikeDay Brovary 2026**.

## Основні посилання

- Сторінка події: `/2026/`
- Instagram-редирект: `/ig`
- Instagram: `https://www.instagram.com/bro.bikeday/`
- Фото з події: `/photos`
- Google Photos: `https://photos.app.goo.gl/9rw6yRj3SMPvsCuWA`
- Донати: `/donate` — тимчасово веде на блок “Банка для донатів”
- Хештег: `#bro_bikeday`

## Як додати посилання на банку

Коли буде готове посилання на банку:

1. У файлі `_redirects` замінити рядок:

   ```txt
   /donate   /2026/#donate 302
   ```

   на:

   ```txt
   /donate   https://посилання-на-банку 302
   ```

2. У файлі `2026/index.html` у блоці `id="donate"` замінити вимкнену кнопку на посилання:

   ```html
   <a class="button button-primary" href="/donate">Підтримати донатом</a>
   ```

## Cloudflare Pages

Рекомендовані налаштування для простого статичного сайту:

- Framework preset: `None`
- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `.`
- Root directory: залишити порожнім

Усі файли сайту лежать у корені репозиторію, тому `.` означає “поточна папка”.

## Структура

```txt
/
  index.html
  404.html
  _redirects
  _headers
  robots.txt
  sitemap.xml
  README.md

/2026/
  index.html

/assets/
  styles.css
  app.js
  favicon.svg
  logo.svg
  logo-lockup.png
  logo-lockup.webp
  hero-2026.png
  hero-2026.webp
  social-card.png
  apple-touch-icon.png
```
