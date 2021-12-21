import React from 'react';
import Link from 'next/link';
import { pageNumbers } from '../../config';

const Pagination = () => {
    return (
        <div className='flex justify-center space-x-4'>
            {pageNumbers.map((pageNumber) => (
                <Link href={`/videos/${pageNumber}`} key={pageNumber} >
                    <a className='bg-gray-200 rounded-md text-md p-2 cursor-pointer hover:bg-white' >
                        {pageNumber}
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default Pagination
