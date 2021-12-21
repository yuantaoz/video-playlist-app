import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className="container mx-auto rounded-lg px-1 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left inline-block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-3xl text-white">
                            Video Playlist App
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
