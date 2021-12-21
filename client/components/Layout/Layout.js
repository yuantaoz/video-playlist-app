import Head from 'next/head';
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {

    return (
        <div className='mx-auto px-10'>
            <Head>
                <title>Video Playlist App</title>
            </Head>
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;
