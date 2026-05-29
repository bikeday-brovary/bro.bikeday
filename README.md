# Велодень Бровари 2026

Фінальна статична версія сайту для **Велодень Бровари 2026 / BikeDay Brovary 2026**.

## Що оновлено

- Прибрано окремий блок маршруту.
- Додано сторінкову логіку “Корисна інформація”: укриття, дії під час повітряної тривоги, правила участі, супровід, техпідтримка, фото та NFC-брелок.
- Додано погоджений список найближчих укриттів.
- Оновлено блок “Про подію” з місією та метою Велодня.
- Оновлено блок збору для 48 ОРБ “Тиха ніч”.
- Додано актуальне посилання на банку mono.
- Оновлено посилання на фотоархів Google Drive.
- Додано банер збору до assets.

## Основні посилання

- Сторінка події: `/2026/`
- Instagram-редирект: `/ig`
- Instagram: `https://www.instagram.com/bro.bikeday/`
- Фотоархів: `/photos`
- Google Drive фотоархів: `https://drive.google.com/drive/folders/1B7soGmsWkxvO0mDXdNjNAS7wS2l6y1go?usp=share_link`
- Донати: `/donate`
- Банка mono: `https://send.monobank.ua/jar/7V6PwAWWWL`
- Хештег: `#bro_bikeday`

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
  donate-banner.jpg
  needs-list.jpg
  donate-post.jpg
```
