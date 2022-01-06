import React from 'react';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import Body from '../Body/Body'
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import Cart from '../Cart/Cart';

const Home = () => {
    return (
        <div>
            <MenuBar>

            </MenuBar>
            <Header></Header>
            <Cart></Cart>
            <Body></Body>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;