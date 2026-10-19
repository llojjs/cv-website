import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Star, X } from 'lucide-react';
import { exampleBooks, type BookshelfBook } from '../data/books';

type BookshelfProps = {
  books?: BookshelfBook[];
};

const BOOKS_PER_SHELF = 5;

export function Bookshelf({ books = exampleBooks }: BookshelfProps) {
  const [selectedBook, setSelectedBook] = useState<BookshelfBook | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedBook) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedBook(null);
    };

    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedBook]);

  return (
    <>
      <div className="mx-auto mt-6 w-full max-w-sm" aria-label="Example bookshelf">
        {Array.from({ length: Math.ceil(books.length / BOOKS_PER_SHELF) }, (_, shelfIndex) => {
          const shelfBooks = books.slice(shelfIndex * BOOKS_PER_SHELF, (shelfIndex + 1) * BOOKS_PER_SHELF);

          return (
            <div key={`shelf-${shelfIndex}`} className="mb-6 last:mb-0">
              <div className="flex h-44 items-end justify-center gap-1.5 px-3" style={{ alignItems: 'flex-end' }}>
                {shelfBooks.map((book) => (
                  <button
                    key={book.title}
                    type="button"
                    className="relative flex shrink-0 items-center justify-center rounded-t-sm border border-black/10 px-1 shadow-sm transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    style={{ backgroundColor: book.color, height: book.height, width: book.width }}
                    aria-label={`Open ${book.title}`}
                    onClick={() => setSelectedBook(book)}
                  >
                    <span
                      className="flex max-h-full max-w-full items-center justify-center overflow-hidden text-center font-semibold tracking-wide text-white/90"
                      style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        whiteSpace: 'nowrap',
                        fontSize: book.title.length > 20 ? '8px' : '10px',
                        lineHeight: 1,
                        transform: `rotate(180deg) scaleY(${Math.min(1, 14 / book.title.length)})`
                      }}
                    >
                      {book.title}
                    </span>
                  </button>
                ))}
              </div>
              <div
                className="h-2 rounded-sm bg-gradient-to-b from-amber-700 to-amber-900 shadow-md"
                style={{ width: '100%', height: '8px', marginTop: 0, background: 'linear-gradient(to bottom, #b08a5b, #7f5a36)' }}
              />
            </div>
          );
        })}
      </div>

      {selectedBook
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/40 px-4 py-6 bookshelf-modal-fade-in"
              style={{ top: 0, right: 0, bottom: 0, left: 0, zIndex: 1000 }}
              role="presentation"
              onClick={(event) => {
                if (event.target === event.currentTarget) setSelectedBook(null);
              }}
            >
              <div
                className="bookshelf-modal-content relative grid grid-cols-1 gap-6 rounded-2xl bg-white p-6 shadow-2xl sm:gap-7 sm:p-8"
                style={{
                  maxWidth: '550px',
                  width: '90vw',
                  position: 'relative',
                  borderRadius: '16px',
                  boxShadow: '0 20px 45px rgba(15, 23, 42, 0.16)'
                }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="book-dialog-title"
              >
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setSelectedBook(null)}
                  className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  style={{ position: 'absolute', top: '16px', right: '16px' }}
                  aria-label="Close book details"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="flex min-h-48 items-center justify-center rounded-xl border border-dashed border-emerald-200 bg-emerald-50/50 text-sm font-medium text-emerald-700 sm:min-h-56">
                  {selectedBook.cover ? (
                    <img src={selectedBook.cover} alt={`Cover of ${selectedBook.title}`} className="h-full w-full rounded-xl object-cover" />
                  ) : (
                    <span>Book cover placeholder</span>
                  )}
                </div>

                <div className="pr-8">
                  <h4 id="book-dialog-title" className="text-xl font-semibold text-gray-900">
                    {selectedBook.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">by {selectedBook.author}</p>

                  <div className="mt-5 space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-800">My rating</p>
                      <div className="mt-1 flex items-center gap-1" aria-label={`${selectedBook.rating} out of 5 stars, sample rating`}>
                        {Array.from({ length: 5 }, (_, index) => (
                          <Star
                            key={index}
                            className={index < selectedBook.rating ? 'h-4 w-4 text-amber-500' : 'h-4 w-4 text-gray-300'}
                            fill={index < selectedBook.rating ? 'currentColor' : 'none'}
                            aria-hidden="true"
                          />
                        ))}
                        <span className="ml-1 text-xs text-gray-500">Sample rating</span>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800">Date read</p>
                      <p className="mt-1 text-gray-600">{selectedBook.dateRead}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800">My Thoughts</p>
                      <p className="mt-1 leading-relaxed text-gray-600">{selectedBook.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}