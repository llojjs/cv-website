import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Star, X } from 'lucide-react';
import { exampleBooks, type BookshelfBook } from '../data/books';

type BookshelfProps = {
  books?: BookshelfBook[];
};

const BOOKS_PER_SHELF = 5;

function getSpineWidth(height: string, ratio: number) {
  const match = height.match(/^([\d.]+)(rem|px)$/);
  return match ? `${Number(match[1]) * ratio}${match[2]}` : undefined;
}

export function Bookshelf({ books = exampleBooks }: BookshelfProps) {
  const [selectedBook, setSelectedBook] = useState<BookshelfBook | null>(null);
  const [spineRatios, setSpineRatios] = useState<Record<string, number>>({});
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
                    className={`relative flex shrink-0 items-center justify-center rounded-t-sm border px-1 shadow-sm transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                      book.spineVariant ? 'border-black/40' : 'border-black/10'
                    }`}
                    style={{
                      backgroundColor: book.spineVariant === 'chip-war' ? '#f7f3e8' : book.spineVariant === 'in-praise-of-shadows' ? '#111111' : book.spineVariant === 'blue-sisters' ? '#ffffff' : book.color,
                      height: book.height,
                      width: book.spineImage && spineRatios[book.title]
                        ? getSpineWidth(book.height, spineRatios[book.title])
                        : book.width,
                      padding: book.spineImage ? 0 : undefined,
                      borderWidth: book.spineImage ? 0 : undefined
                    }}
                    aria-label={`Open ${book.title}`}
                    onClick={() => setSelectedBook(book)}
                  >
                    {book.spineImage ? (
                      <img
                        src={book.spineImage}
                        alt={`${book.title} spine`}
                        className="block h-full w-full object-contain"
                        onLoad={(event) => {
                          const image = event.currentTarget;
                          const baseRatio = image.naturalWidth / image.naturalHeight;
                          const ratio = book.rotateSpine ? 1 / baseRatio : baseRatio;
                          setSpineRatios((current) => (
                            current[book.title] === ratio ? current : { ...current, [book.title]: ratio }
                          ));
                        }}
                        style={{
                          objectFit: 'contain',
                          objectPosition: 'center bottom',
                          transform: book.rotateSpine ? `rotate(${book.rotateSpine}deg)` : undefined
                        }}
                      />
                    ) : book.spineVariant ? (
                      <span
                        className="relative flex h-full w-full items-center justify-center overflow-hidden"
                        style={{ backgroundColor: book.spineVariant === 'in-praise-of-shadows' ? '#111111' : book.spineVariant === 'blue-sisters' ? '#ffffff' : '#f7f3e8' }}
                      >
                        <span
                          className={`font-extrabold ${book.spineVariant === 'in-praise-of-shadows' ? 'text-white' : book.spineVariant === 'blue-sisters' ? 'text-[#2f6db3]' : 'text-[#b68b2c]'}`}
                          style={{
                            position: 'absolute',
                            top: '36%',
                            left: '50%',
                            writingMode: 'vertical-rl',
                            whiteSpace: 'nowrap',
                            fontSize: book.spineVariant === 'in-praise-of-shadows' ? '8px' : book.spineVariant === 'blue-sisters' ? '10px' : '10px',
                            lineHeight: 1,
                            letterSpacing: '0.02em',
                            transform: 'translate(-50%, -50%)',
                            color: book.spineVariant === 'in-praise-of-shadows' ? '#ffffff' : book.spineVariant === 'blue-sisters' ? '#2f6db3' : '#b68b2c'
                          }}
                        >
                          {book.spineTitle ?? book.title}
                        </span>
                        {book.spineVariant ? (
                          <span
                          className={`absolute text-center font-semibold ${book.spineVariant === 'in-praise-of-shadows' ? 'text-white' : book.spineVariant === 'blue-sisters' ? 'text-[#9a7b36]' : 'text-[#174c4b]'}`}
                          style={{
                            left: 0,
                            bottom: '10px',
                            right: 0,
                            width: '100%',
                            fontSize: '4px',
                            lineHeight: 1.1,
                            transform: 'none',
                            writingMode: 'horizontal-tb',
                            whiteSpace: 'normal',
                            color: book.spineVariant === 'in-praise-of-shadows' ? '#ffffff' : book.spineVariant === 'blue-sisters' ? '#9a7b36' : '#174c4b'
                          }}
                          >
                            <span className="block whitespace-nowrap">{book.author.trim().split(/\s+/).slice(0, -1).join(' ')}</span>
                            <span className="block whitespace-nowrap">{book.author.trim().split(/\s+/).at(-1)}</span>
                          </span>
                        ) : null}
                      </span>
                    ) : (
                      <span
                        className={`flex max-h-full max-w-full items-center justify-center overflow-hidden text-center font-semibold tracking-wide ${
                          book.spineVariant === 'chip-war' ? 'text-[#b68b2c]' : 'text-white/90'
                        }`}
                        style={{
                          writingMode: 'vertical-rl',
                          textOrientation: 'mixed',
                          whiteSpace: 'nowrap',
                          maxHeight: 'calc(100% - 4px)',
                          fontSize: book.title.length > 30 ? '6px' : book.title.length > 20 ? '8px' : '10px',
                          fontWeight: book.spineVariant === 'chip-war' ? 800 : 600,
                          lineHeight: 1,
                          letterSpacing: book.spineVariant === 'chip-war' ? '0.02em' : undefined,
                          textOverflow: 'clip'
                        }}
                      >
                        {book.spineTitle ?? book.title}
                      </span>
                    )}
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
                  {selectedBook.coverImage ? (
                    <img
                      src={selectedBook.coverImage}
                      alt={`Cover of ${selectedBook.title}`}
                      className="max-h-56 max-w-full rounded-xl object-contain"
                      style={{ objectFit: 'contain' }}
                    />
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

                    {selectedBook.dateRead ? (
                      <div>
                        <p className="font-semibold text-gray-800">Date read</p>
                        <p className="mt-1 text-gray-600">{selectedBook.dateRead}</p>
                      </div>
                    ) : null}

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