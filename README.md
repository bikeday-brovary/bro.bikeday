# Велодень Бровари

Постійний статичний сайт **Велодень Бровари / BikeDay Brovary**.

Сайт більше не є одноразовим лендингом події 2026 року. Це основна сторінка ініціативи: місія Велодня, фотоархів, медіаархів, Instagram, благодійний збір і підсумки проведених подій.

## Основні посилання

- Головна: `/`
- Підсумки Велодня 2026: `/#veloden-2026`
- Медіаархів: `/media/`
- Instagram-редирект: `/ig`
- Instagram: `https://www.instagram.com/bro.bikeday/`
- Фотоархів: `/photos`
- Google Drive фото: `https://drive.google.com/drive/folders/1B7soGmsWkxvO0mDXdNjNAS7wS2l6y1go?usp=share_link`
- Донати: `/donate`
- Банка mono: `https://send.monobank.ua/jar/7V6PwAWWWL`
- Звіт: `/report` — веде на блок звітності на головній сторінці
- Хештег: `#bro_bikeday`

## Що є на сайті

- Постійна головна сторінка Велодня Бровари.
- Місія та сенс події: велоспільнота, спорт, природа, безпечний рух і популяризація велосипеда.
- Окремий блок про Велодень 30 травня 2026 року.
- Сума, зібрана у скриньку: **8125 грн**.
- Інформація, що кошти передано на рахунок БО БФ «Унайтед24.Броварщина» для подальших закупівель.
- Активний збір на банку mono для 48 ОРБ «Тиха ніч».
- Фотоархів, який буде поповнюватися щороку.
- Окрема сторінка `/media/` з публікаціями, Facebook-посиланнями та YouTube-відео.
- Попереднє запрошення на наступний Велодень — **22 травня 2027 року**.

## Як додати посилання на звіт

Коли звіт буде готовий:

1. У файлі `_redirects` замінити рядок:

   ```txt
   /report      /#report 302
   ```

   на пряме посилання на звіт:

   ```txt
   /report      https://посилання-на-звіт 302
   ```

2. У файлі `index.html` у блоці `id="report"` замінити текст “Звіт буде додано тут” на активну кнопку або посилання.

## Як додати нове медіа

У файлі `media/index.html` додати нову картку в блок `.media-list`.

Для матеріалу з картинкою:

```html
<a class="media-card media-card-preview" href="https://посилання" target="_blank" rel="noopener">
  <img src="/assets/назва-зображення.jpg" alt="Опис зображення" loading="lazy">
  <div class="media-card-body">
    <span class="media-badge">Назва джерела</span>
    <h2>Заголовок матеріалу</h2>
    <p>Короткий опис.</p>
    <span class="media-link-text">Читати матеріал →</span>
  </div>
</a>
```

Для Facebook-посилання без стабільного передперегляду:

```html
<a class="media-card media-card-plain" href="https://посилання" target="_blank" rel="noopener">
  <div class="plain-icon" aria-hidden="true">f</div>
  <div class="media-card-body">
    <span class="media-badge">Facebook</span>
    <h2>Назва згадки</h2>
    <p>Короткий опис.</p>
    <span class="media-link-text">Переглянути допис →</span>
  </div>
</a>
```

## Cloudflare Pages

Рекомендовані налаштування для простого статичного сайту:

- Framework preset: `None`
- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `.`
- Root directory: залишити порожнім

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

/media/
  index.html

/assets/
  styles.css
  app.js
  favicon.svg
  logo.svg
  logo-lockup.png
  logo-lockup.webp
  hero-main.png
  hero-main.webp
  hero-2026.png
  hero-2026.webp
  social-card.png
  social-card.webp
  apple-touch-icon.png
  donate-banner.jpg
  needs-list.jpg
  donate-post.jpg
  media-brovary-rada.jpg
  media-brovary-rada.webp
  media-mykyivregion.jpg
  media-mykyivregion.webp
```
