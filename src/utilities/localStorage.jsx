const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('Read-books');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return [];
}
const getWishlistedBooks = () => {
    const storedBooks = localStorage.getItem('Wishlisted-books');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveBooks = (id) => {
    const storedBooks = getStoredBooks();
    const exists = storedBooks.find(bookId => bookId === id);
    if (!exists) {
        storedBooks.push(id);
        localStorage.setItem('Read-books', JSON.stringify(storedBooks))
    }
}
const saveWishlistedBooks = (id) => {
    const wishlistedBooks = getStoredBooks();
    const exists = wishlistedBooks.find(bookId => bookId === id);
    if (!exists) {
        wishlistedBooks.push(id);
        localStorage.setItem('Wishlisted-books', JSON.stringify(wishlistedBooks))
    }
}

export { getStoredBooks, saveBooks, getWishlistedBooks, saveWishlistedBooks };