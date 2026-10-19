export type BookshelfBook = {
  title: string;
  author: string;
  cover: string | null;
  coverImage?: string;
  rating: number;
  dateRead: string;
  review: string;
  spineImage?: string;
  rotateSpine?: 90 | -90;
  color: string;
  height: string;
  width: string;
};

export const exampleBooks: BookshelfBook[] = [
  { title: 'Circe', author: 'Madeline Miller', cover: null, coverImage: `${import.meta.env.BASE_URL}cv/books/book-covers/circe.jpg`, rating: 3, dateRead: '2026-10-15', review: '', spineImage: `${import.meta.env.BASE_URL}cv/books/spine-covers/circe_spine.jpg`, color: '#718096', height: '8.5rem', width: '2.1rem' },
  { title: 'Wuthering Heights', author: 'Emily Brontë', cover: null, rating: 2, dateRead: '2026-07-14', review: '', color: '#9a7658', height: '9.75rem', width: '2.35rem' },
  { title: 'Piranesi', author: 'Susanna Clarke', cover: null, coverImage: `${import.meta.env.BASE_URL}cv/books/book-covers/piranesi.jpg`, rating: 4, dateRead: '2026-02-17', review: '', spineImage: `${import.meta.env.BASE_URL}cv/books/spine-covers/piranesi spine.jpg`, color: '#668b8b', height: '8.75rem', width: '2rem' },
  { title: 'The Island of Sea Women', author: 'Lisa See', cover: null, coverImage: `${import.meta.env.BASE_URL}cv/books/book-covers/the-island-of-sea-women-9781501154874_lg.jpg`, rating: 4, dateRead: '2025-11-29', review: '', color: '#a4778b', height: '10rem', width: '2.25rem' },
  { title: 'I Who Have Never Known Men', author: 'Jacqueline Harpman', cover: null, rating: 4, dateRead: '2025-11-25', review: '', spineImage: `${import.meta.env.BASE_URL}cv/books/spine-covers/the vegetarian.jpg`, color: '#7f8c69', height: '9.25rem', width: '2.2rem' },
  { title: 'In Praise of Shadows', author: "Jun'ichirō Tanizaki", cover: null, rating: 3, dateRead: '2025-11-18', review: '', color: '#8a7666', height: '8.25rem', width: '2rem' },
  { title: 'Atmosphere', author: 'Taylor Jenkins Reid', cover: null, coverImage: `${import.meta.env.BASE_URL}cv/books/book-covers/atmosphere cover.jpg`, rating: 4, dateRead: '2025-06-19', review: '', spineImage: `${import.meta.env.BASE_URL}cv/books/spine-covers/atmosphere spine.jpg`, color: '#7b8494', height: '9.5rem', width: '2.25rem' },
  { title: 'Blue Sisters', author: 'Coco Mellors', cover: null, rating: 5, dateRead: '2025-05-25', review: '', color: '#8a7d9b', height: '8.5rem', width: '2.1rem' },
  { title: 'Fahrenheit 451', author: 'Ray Bradbury', cover: null, rating: 3, dateRead: '2025-05-22', review: '', spineImage: `${import.meta.env.BASE_URL}cv/books/spine-covers/farenheit spine.jpg`, color: '#a06f5f', height: '10.25rem', width: '2.15rem' },
  { title: 'Brave New World', author: 'Aldous Huxley', cover: null, rating: 3, dateRead: '2024-10-29', review: '', color: '#6d8790', height: '9rem', width: '2.3rem' },
  { title: 'The Way of Kings', author: 'Brandon Sanderson', cover: null, rating: 4, dateRead: '2024-08-02', review: '', color: '#788b70', height: '10.5rem', width: '2.4rem' },
  { title: 'Project Hail Mary', author: 'Andy Weir', cover: null, coverImage: `${import.meta.env.BASE_URL}cv/books/book-covers/Project_Hail_Mary.jpg`, rating: 4, dateRead: '2024-06-27', review: '', spineImage: `${import.meta.env.BASE_URL}cv/books/spine-covers/porject hail mary spine.jpg`, color: '#9b8068', height: '8.75rem', width: '2.15rem' },
  { title: '1Q84', author: 'Haruki Murakami', cover: null, rating: 3, dateRead: '2024-07-09', review: '', color: '#7c7180', height: '9.75rem', width: '2rem' },
  { title: 'The Vegetarian', author: 'Han Kang', cover: null, rating: 0, dateRead: '', review: '', spineImage: `${import.meta.env.BASE_URL}cv/books/spine-covers/han-kang-book.jpg`, color: '#d8c7c9', height: '9.75rem', width: '2rem' }
];