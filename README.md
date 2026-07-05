# legalside-landing

SEO-лендинг Side (legalside.ru). Статика на 11ty v3, деплой — Cloudflare Pages из Git.

## Локально

```bash
npm install
npm run serve   # http://localhost:8080
npm run build   # сборка в _site/
```

## Деплой: Cloudflare Pages + Git

1. Запушить репозиторий на GitHub (`legalside-landing`).
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → выбрать репозиторий.
3. Build settings:
   - Framework preset: `Eleventy` (или None)
   - Build command: `npx @11ty/eleventy`
   - Build output directory: `_site`
   - Environment variable: `NODE_VERSION = 20`
4. Deploy → проверить на `*.pages.dev`.
5. Custom domains → добавить `legalside.ru` и `www.legalside.ru`.
6. Старый (битый) Worker `legalside` удалить последним, после проверки.

## Структура

```
src/
  _data/site.json      # домены, CTA/UTM, каналы, Метрика, реквизиты
  _includes/
    base.njk           # layout: head, Метрика, favicon, шапка, футер
    header.njk         # шапка (инлайн side-mark, nav, CTA)
    footer.njk         # футер (контакты, реквизиты, дисклеймер 152-ФЗ)
    uc.njk             # layout UC-страниц (данные из front matter)
  assets/              # styles.css, side-mark.svg, favicon
  index.njk            # главная
  uc/*.njk             # 6 UC-страниц
  about.njk professional.njk pricing.njk
```

## Реквизиты и юрдоки

- Оператор: ИП Мешков Алексей Анатольевич, ОГРНИП 325508100481114, ИНН 503009209888.
- Политика ПДн и Оферта — ссылки в футере ведут на существующие документы:
  `https://app.getside.ru/privacy`, `https://app.getside.ru/offer` (единый источник, без дублирования).

## Открытые хвосты (не блокеры)

- Метрика: кросс-домен legalside.ru <-> app.getside.ru настраивается в интерфейсе Метрики (счётчик 109950121 уже вставлен в код).
- Логотип: side-mark близок по силуэту к Umbrella Corp — ревизия запланирована до подачи ТЗ (август). На деплой не влияет.
