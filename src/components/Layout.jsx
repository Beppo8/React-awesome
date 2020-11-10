import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <div className="">
            {children}
        <Footer />
    </div>
);

export default Layout;