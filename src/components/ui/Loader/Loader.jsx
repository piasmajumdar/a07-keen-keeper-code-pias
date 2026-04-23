import React from 'react';
import { RingLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='h-[20vh] flex justify-center items-center'>
            <RingLoader className='w-100' />
        </div>
    );
};

export default Loader;