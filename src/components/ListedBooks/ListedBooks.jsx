import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks, getWishlistedBooks } from '../../utilities/localStorage';
import ReadBookCard from '../ReadBookCard/ReadBookCard';
import WishlistBookCard from '../WishlistBookCard/WishlistBookCard';

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const readBooks = useLoaderData();
    const [readenBooks, setReadenBooks] = useState([]);
    const [wishListedBooks, setWishListedBooks] = useState([]);

    useEffect(() => {
        const savedBookId = getStoredBooks();
        if (readBooks.length > 0) {
            const bookAdded = readBooks.filter(book => savedBookId.includes(book.id))
            setReadenBooks(bookAdded);
        }
    }, [])

    useEffect(() => {
        const wishlistBookId = getWishlistedBooks();
        if (readBooks.length > 0) {
            const bookWished = readBooks.filter(book => wishlistBookId.includes(book.id))
            setWishListedBooks(bookWished);
        }
    }, [])


    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-10">Books</h1>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    <div className='mt-5'>
                        {
                            readenBooks.map((readenBook, idx) => <ReadBookCard key={idx} readenBook={readenBook}></ReadBookCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='mt-5'>
                        {
                            wishListedBooks.map((wishlistBook, idx) => <WishlistBookCard key={idx} wishlistBook={wishlistBook}></WishlistBookCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;