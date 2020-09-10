import React from 'react';
import Header from '../components/layout/Header';

const LayoutDefault = ({ children }) => (
    <>
        <Header navPosition="right" className="reveal-from-bottom" />
        <main className="site-content" id="main">
            {children}
        </main>
    </>
);

export default LayoutDefault;
