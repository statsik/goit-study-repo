# Пошук зображень

Напиши застосунок пошуку зображень за ключовим словом. Прев'ю робочого застосунку

[![Превью](https://i.gyazo.com/76384ee7d41664406ee52acb77351f07.jpg)](https://gyazo.com/76384ee7d41664406ee52acb77351f07)

Доповни компоненти `<Form>`, `<PhotosGallery>`, `<PhotosGalleryItem>`. Для
створення сітки використовуй компоненти `<Grid>` та `<GridItem>`

## Інструкція Pexels API

Інформація нижче для загального ознайомлення. Функція для виконання запитів реалізована і знаходиться в `src/apiService/photos.js`

Для HTTP-запитів використовується публічний сервіс пошуку зображень [Pexels](https://www.pexels.com/api/documentation/). Приклад HTTP-запиту.

```js
import axios from 'axios';

const API_KEY = 'тут вставити ключ';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};
```

Pexels API підтримує пагінацію, за замовчуванням параметр `page` дорівнює `1`.
Функція `getPhotos` реалізована так, що у відповіді надходить по 15 об'єктів, це встановлено в параметрі `per_page`.

У відповіді від API приходить масив об'єктів, в яких тобі цікаві лише наступні
властивості.

- `id` - унікальний ідентифікатор
- `avg_color` - колір фотографії,
- `alt` - опис фото,
- `src` - об'єкт з розмірами картинок, нам цікавий розмір `large`

## Крок 1

## Компонент `<Form/>`

Створи компонент форми для взаємодії з користувачем і отримання від нього інформації про пошукове слово

### Опис компоненту

Компонент має приймати один проп `onSubmit` - функцію для передачі рядкового значення інпута під час сабміту форми.

**Пріорітетний варіант реалізації:** неконтрольована форма. Але ви, за бажанням, можете самостійно обрати варіант реалізації форми: неконтрольована форма, контрольована форма або використання бібліотеки Formik.

**Валідація форми:** виконати лише перевірку значення інпуту на пустоту, тобто пропс `onSubmit` викликати лише у випадку, якщо значення інпуту не порожнє.

**Готова структура компоненту:**

```jsx
<form className={style.form}>
  <button className={style.button} type="submit">
    <FiSearch size="16px" />
  </button>

  <input
    className={style.input}
    placeholder="What do you want to write?"
    name="search"
    required
    autoFocus
  />
</form>
```

**Кінцевий приклад використання компоненту:**

```jsx
const Photos = () => {
  //
  const getQuery = inputValue => {
    console.log(inputValue); // має вивести значення інпуту під час сабміту форми
  };

  return (
    <>
      <Form onSubmit={getQuery} />
    </>
  );
};
```

## Крок 2

## Компонент `<PhotosGallery/>`

Створи і використай компонент `<PhotosGallery/>` для відображення галереї зображень на сторінці.

### Опис компонента списку `<PhotosGallery/>`

Компонент має приймати масив об’єктів як пропс. Масив має наступну структуру.

```javascript
const images = [
  {
    id: 3573351,
    avg_color: '#374824',
    src: {
      original:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png',
      large:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940',
      medium:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350',
      small:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130',
    },
    alt: 'Brown Rocks During Golden Hour',
  },
  {
    id: 35733515,
    avg_color: '#374824',
    src: {
      original:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png',
      large:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940',
      medium:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350',
      small:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130',
    },
    alt: 'Brown Rocks During Golden Hour',
  },
];
```

В якості прикладу, тимчасово оголоси зміну `images` в файлі `Photos.jsx` і використай цей масив під час створення компоненту `<PhotosGallery/>`.

Компонент має наступну структуру. Для створення списку потрібно використати універсальний компонент `<Grid/>` та`<GridItem>` (стилізовані елементи `ul` та `li` відповідно)

```jsx
<Grid>
  {[].map(() => (
    <GridItem>
      <PhotosGalleryItem />
    </GridItem>
  ))}
</Grid>
```

Для створення однієї одного елемента списку потрібно використати `<PhotosGalleryItem>`

Компонент елемента списку із зображенням. Створює компонент наступної структури.

```jsx
<div
  className={styles.thumb}
  style={{ backgroundColor: avg_color, borderColor: avg_color }}
>
  <img src={src.large} alt={alt} />
</div>
```

### Крок 3. Робота зі стейтом

Для відображення галереї зображень, і реалізації фунціональності Load more (завантаження наступної порції зображень під час наскання нопки "Load More"), потрібно оголосити три обов'язкових стейти:

- `images` - стан для зберігання масиву об'єктів з інформацією про зображення
- `query` - стан для зберігання пошукового слова
- `page` - стан поточної сторінки пагінації

При роботі з асинхроним кодом варто також опрацьовувати "службовий" стан `isLoading`, `error`. Вони потрібні для того, щоб відображати той чи інший інтерфейс, як відповід на дії користувача під час виконання асинхронних запитів.

Для отримання пошукового слова та реалізації функціональності Load More варто оголосити 2 функції-обробника стейту:

- обробник отримання пошукового слова. Даний обробник буде в якості параметру отримувати рядок пошуку. Функція передається як пропс в компонент `Form`
- обробник натискання на кнопку "Load More"

> **ПРИМІТКА:**
>
> - Функції-обробники для форми і кнопки "Load more" не містять логіки запиту. Вони лише точково оновлюють потрібний стейт.
> - Вся логіка запиту і обробки службового стейту (isLoading, error) виконується в useEffect з залежностями [query, page].

## Опис компонента `<Button>`

При натисканні на кнопку `Load more` повинна довантажуватись наступна порція зображень і рендеритися разом із попередніми. Кнопка повинна рендеритися лише тоді, коли є якісь завантажені зображення. Якщо масив зображень порожній, кнопка
не рендериться.

## Опис компонента `<Loader>`

Під час відправки запиту на Pexels необхідно відображати компонент `<Loader/>`

```jsx
<div className={style.backdrop}>spinner</div>
```

Для відображення спінера можна використати бібліотеку `react-spinners`
