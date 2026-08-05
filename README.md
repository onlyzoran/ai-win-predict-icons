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

```bash
npm install
npm run dev
```

Галерея: `http://localhost:5173` (поиск, size/stroke, тёмная тема, клик копирует имя).

## Разработка

```bash
npm install
npm run build
npm run build:playground
npm run type-check
```

## Публикация в GitHub Packages

```bash
export NODE_AUTH_TOKEN=ghp_xxxxxxxx
npm run build
npm publish
```

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
