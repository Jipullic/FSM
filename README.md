# Архитектура

### Наименования переменных
- обычные переменные - camelCase
- интерфейсы и типы - PascalCase
- функции - camelCase
- константы - SCREAMING_SNAKE_CASE

### Наименования папок и файлов
- все папки и файлы - camelCase
- папки с единственным логическим элементом (то есть не обязательно один файл, это может быть например input.tsx и input.module.sass) - единственное число в названии папки
- папки с множеством подобных элементов (обратное от предыдущего пункта) - множественное число в названии папки
- не хранить папки рядом с файлами. Например есть header у которого есть разделение headerItem. В таком случае называем главную папку header и в ней headerItem и 
```
  - header
    - header
      - header.module.sass
      - header.tsx
    - headerItem
      - headerItem.module.sass
      - headerItem.tsx
```

### Архитектура
- components - компоненты с JSX
  - baseElements - базовые уже реализованные компоненты (например кнопка с крестиком, кнопка с ) 
  - charts - общее решение отдельного вида графика
    - НазваниеChart
    - ...
  - containers - контейнеры/обёртки
    - НазваниеContainer
    - ...
  - elements - базовые элементы (button/input/...)
  - forms - общее решение всех форм + все формы в проекте
    - baseForm
    - controllers
    - НазваниеForm
      - НазваниеForm.inputs.tsx - файл для конфигурации полей в форме
      - НазваниеForm.tsx - предоставляет форму
      - НазваниеForm.module.sass - стили формы (если такие требуется)
    - ...
  - layouts - основные макеты
    - footer
    - header
    - navigation
    - sidebar
  - overlays - компоненты над экраном (popup)
    - alerts - уведомления
    - modals - это общее решение для добавления всех модальных окон
      - modal
      - modals
  - tables - общее решение всех таблиц + все таблицы в проекте
    - advancedTable - обёртка над baseTable с header (c действиями) и footer (с пагинацией)
    - baseTable - базовая голая таблица только с заголовками и строками
    - НазваниеTable
      - НазваниеTable.columns.tsx - файл для конфигурации колонок
      - НазваниеTable.actions.tsx - файл для конфигурации действий для advancedTable (например кнопка добавить)
      - НазваниеTable.tsx - предоставляет форму
      - НазваниеTable.module.sass - стили формы (если такие требуется)
    - ...
- configs - конфигурации например axios или tanstackQuery
- constants - константы
- contexts - контексты
  - НазваниеContext (может быть папка с больше логикой, но тогда НазваниеContexts)
  - ...
- hooks - хуки
  - mutations - мутации для tanstackQuery (reactQuery)
  - queries - запросы для tanstackQuery (reactQuery)
- middlewares - промежуточный слой до рендера страницы
- pages - все страницы
- providers - реализация контекстов
  - НазваниеProvider (может быть папка с больше логикой, но тогда НазваниеProviders)
  - ...
- routes
- services
  - api
  - localStorage
- styles
- types
- utils


Используйте interface для определения структуры объектов и классов.
Используйте type для примитивов, объединений, пересечений, маппинга типов и тьюплов.