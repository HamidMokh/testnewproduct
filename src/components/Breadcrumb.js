import { RightOutlined } from '@ant-design/icons';
import React from 'react';

const Breadcrumb = () => {
    return (
        <ul className='breadcrumb-wrapper flex flex-row justify-start items-center'>
            <li>
                <a href='#'>Home</a>
            </li>
            <span>
                <RightOutlined style={{ color: '#ff6847' }} />
            </span>
            <li>
                <a href='#'>Wooden Cottages Series</a>
            </li>
            <span>
                <RightOutlined style={{ color: '#ff6847' }} />
            </span>

            <li>
                <a href='#'>1BHK</a>
            </li>
        </ul>
    );
};

export default Breadcrumb;
