# @onlyzoran/ai-win-predict-icons

React-иконки в стиле [Tabler Icons](https://tabler.io/icons) для AI Win Predict.

SVG `24×24`, stroke, props `size` / `stroke` / `className`, классы `tabler-icon tabler-icon-*`.

React-порт пакета [@onlyzoran/win-predict-ai-icons](https://github.com/onlyzoran/win-predict-ai-icons) (Vue).

## Установка

Пакет публикуется в **GitHub Packages**, не в публичный npm.

### 1. `.npmrc` в проекте-потребителе

```ini
@onlyzoran:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

### 2. Токен

Нужен GitHub PAT с правом `read:packages` (для установки) или `write:packages` (для публикации).

```bash
export NODE_AUTH_TOKEN=ghp_xxxxxxxx
```

### 3. Install

```bash
npm install @onlyzoran/ai-win-predict-icons
```

Peer dependencies: `react` / `react-dom` ^18 || ^19.

## Использование

```tsx
import { IconHockey, sportIcons } from '@onlyzoran/ai-win-predict-icons'

export function Example() {
  const SportIcon = sportIcons.football
  return (
    <>
      <IconHockey />
      <IconHockey size={32} stroke={1.5} className="text-blue-500" />
      <SportIcon size={20} />
    </>
  )
}
```

Цвет наследуется через `stroke="currentColor"` (как у Tabler).

### Sport-набор

| Key | Component |
| --- | --- |
| `football` | `IconBallFootball` |
| `basketball` | `IconBallBasketball` |
| `americanFootball` | `IconBallAmericanFootball` |
| `hockey` | `IconHockey` |
| `baseball` | `IconBallBaseball` |
| `motorsport` | `IconSteeringWheel` |
| `golf` | `IconGolf` |
| `politics` | `IconFlag` |

В потребителе можно упростить `sportIcons.ts` до:

```ts
export { sportIcons } from '@onlyzoran/ai-win-predict-icons'
```

### UI-набор

Outline (`size` / `stroke`): `IconArrowLeft`, `IconArrowsSort`, `IconGripVertical`, `IconLogin`, `IconLogout`, `IconMoon`, `IconPencil`, `IconPin`, `IconPinnedOff`, `IconPlus`, `IconSearch`, `IconSun`, `IconTrash`, `IconX`.

Filled (`size`, `fill="currentColor"`): `IconBrandGithub`, `IconCircleFilled`.

## Локальная разработка с `ai-win-predict`

```bash
# в ai-win-predict-icons
npm run build
npm link

# в ai-win-predict
npm link @onlyzoran/ai-win-predict-icons
```

Или file-зависимость в `package.json` потребителя:

```json
"@onlyzoran/ai-win-predict-icons": "file:../ai-win-predict-icons"
```

## Превью иконок

Локально:

```bash
npm install
npm run dev
```

Откроется галерея на `http://localhost:5173` (поиск, size/stroke, тёмная тема, клик копирует имя).

Публичный каталог: [GitHub Pages](https://onlyzoran.github.io/ai-win-predict-icons/) (деплой из `main` на ветку `gh-pages`).

**Настройки репозитория (один раз):**

1. **Settings → Pages → Source:** Deploy from a branch → Branch `gh-pages` / `/ (root)`.
2. **Settings → Actions → General → Workflow permissions:** Read and write permissions.

Для pull request Actions собирает playground и деплоит превью; в PR появится комментарий со ссылкой вида  
`https://onlyzoran.github.io/ai-win-predict-icons/pr-preview/pr-<N>/`.  
После закрытия PR превью удаляется.

## Разработка

```bash
npm install
npm run build
npm run build:playground
npm run type-check
```

Сборка: Vite library mode → `dist/index.js` + декларации через `tsc`. Playground → `playground-dist/` (для Pages).

## Публикация в GitHub Packages

После мержа в `main` workflow **Release package** сам поднимает версию и публикует пакет.

| Как задать bump | Результат |
| --- | --- |
| новые файлы в `src/icons/` с прошлого релиза | `minor` |
| без новых иконок | `patch` |
| `[major]` / `[minor]` / `[patch]` в сообщении коммита | принудительно |
| `[skip release]` | не публиковать |

Вручную: **Actions → Release package → Run workflow** (выбор patch / minor / major).

Локально (если нужно):

```bash
export NODE_AUTH_TOKEN=ghp_xxxxxxxx   # write:packages
npm version patch|minor|major
npm publish
git push && git push --tags
```

`prepublishOnly` запускает `build` перед publish. Registry: `https://npm.pkg.github.com` (см. `.npmrc`).

## Структура

```
src/
  icons/           # React-компоненты иконок (sport + UI)
  sportIcons.ts    # карта Sport → компонент
  types.ts         # IconProps / IconComponent
  index.ts         # публичные named exports
playground/        # галерея для локального просмотра и GitHub Pages
dist/              # артефакты сборки (публикуются в пакет)
```
