import React from 'react'
import { Link } from "react-router-dom";
import { Wrapper } from './index.styled';
import { Logo } from './index.styled';
import { Navigation } from './index.styled';
import { AuthButton } from '../../components/authbutton';
import { Register } from './index.styled';
export const Header: React.FC = () => {
    return (
        <Wrapper>
            <Logo>
                <Link to='/'>
                    taram
                </Link>
            </Logo>

            <Navigation>
                <ul>
                    <li>
                        <Link to='/product'>
                            Product
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M6.83825 7.82694L10.5231 3.99401C10.6243 3.88847 10.7597 3.83041 10.904 3.83041C11.0484 3.83041 11.1836 3.88847 11.285 3.99401L11.6077 4.32987C11.7092 4.43524 11.7651 4.5761 11.7651 4.72621C11.7651 4.87631 11.7092 5.017 11.6077 5.12246L7.22055 9.68617C7.11885 9.79205 6.98295 9.85002 6.83849 9.84961C6.69339 9.85002 6.55766 9.79213 6.45588 9.68617L2.07297 5.12671C1.97143 5.02125 1.91553 4.88056 1.91553 4.73037C1.91553 4.58027 1.97143 4.43958 2.07297 4.33404L2.39568 3.99826C2.60573 3.77976 2.94766 3.77976 3.15763 3.99826L6.83825 7.82694Z" fill="#03203F"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to='/solutions'>
                            Solution
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M6.83825 7.82694L10.5231 3.99401C10.6243 3.88847 10.7597 3.83041 10.904 3.83041C11.0484 3.83041 11.1836 3.88847 11.285 3.99401L11.6077 4.32987C11.7092 4.43524 11.7651 4.5761 11.7651 4.72621C11.7651 4.87631 11.7092 5.017 11.6077 5.12246L7.22055 9.68617C7.11885 9.79205 6.98295 9.85002 6.83849 9.84961C6.69339 9.85002 6.55766 9.79213 6.45588 9.68617L2.07297 5.12671C1.97143 5.02125 1.91553 4.88056 1.91553 4.73037C1.91553 4.58027 1.97143 4.43958 2.07297 4.33404L2.39568 3.99826C2.60573 3.77976 2.94766 3.77976 3.15763 3.99826L6.83825 7.82694Z" fill="#03203F"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to='/developers'>
                            Developers
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M6.83825 7.82694L10.5231 3.99401C10.6243 3.88847 10.7597 3.83041 10.904 3.83041C11.0484 3.83041 11.1836 3.88847 11.285 3.99401L11.6077 4.32987C11.7092 4.43524 11.7651 4.5761 11.7651 4.72621C11.7651 4.87631 11.7092 5.017 11.6077 5.12246L7.22055 9.68617C7.11885 9.79205 6.98295 9.85002 6.83849 9.84961C6.69339 9.85002 6.55766 9.79213 6.45588 9.68617L2.07297 5.12671C1.97143 5.02125 1.91553 4.88056 1.91553 4.73037C1.91553 4.58027 1.97143 4.43958 2.07297 4.33404L2.39568 3.99826C2.60573 3.77976 2.94766 3.77976 3.15763 3.99826L6.83825 7.82694Z" fill="#03203F"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to='/resources'>
                            Resources
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M6.83825 7.82694L10.5231 3.99401C10.6243 3.88847 10.7597 3.83041 10.904 3.83041C11.0484 3.83041 11.1836 3.88847 11.285 3.99401L11.6077 4.32987C11.7092 4.43524 11.7651 4.5761 11.7651 4.72621C11.7651 4.87631 11.7092 5.017 11.6077 5.12246L7.22055 9.68617C7.11885 9.79205 6.98295 9.85002 6.83849 9.84961C6.69339 9.85002 6.55766 9.79213 6.45588 9.68617L2.07297 5.12671C1.97143 5.02125 1.91553 4.88056 1.91553 4.73037C1.91553 4.58027 1.97143 4.43958 2.07297 4.33404L2.39568 3.99826C2.60573 3.77976 2.94766 3.77976 3.15763 3.99826L6.83825 7.82694Z" fill="#03203F"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to='/company'>
                            Company
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M6.83825 7.82694L10.5231 3.99401C10.6243 3.88847 10.7597 3.83041 10.904 3.83041C11.0484 3.83041 11.1836 3.88847 11.285 3.99401L11.6077 4.32987C11.7092 4.43524 11.7651 4.5761 11.7651 4.72621C11.7651 4.87631 11.7092 5.017 11.6077 5.12246L7.22055 9.68617C7.11885 9.79205 6.98295 9.85002 6.83849 9.84961C6.69339 9.85002 6.55766 9.79213 6.45588 9.68617L2.07297 5.12671C1.97143 5.02125 1.91553 4.88056 1.91553 4.73037C1.91553 4.58027 1.97143 4.43958 2.07297 4.33404L2.39568 3.99826C2.60573 3.77976 2.94766 3.77976 3.15763 3.99826L6.83825 7.82694Z" fill="#03203F"/>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </Navigation>

            <Register>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2.05472 8.58351C2.05472 4.97776 4.97776 2.05472 8.58351 2.05472C12.1893 2.05472 15.1123 4.97776 15.1123 8.58351C15.1123 12.1893 12.1893 15.1123 8.58351 15.1123C4.97776 15.1123 2.05472 12.1893 2.05472 8.58351ZM8.58351 0.718359C4.23971 0.718359 0.718359 4.23971 0.718359 8.58351C0.718359 12.9273 4.23971 16.4487 8.58351 16.4487C10.5148 16.4487 12.2837 15.7525 13.6526 14.5975L16.0656 17.0105C16.3265 17.2715 16.7496 17.2715 17.0105 17.0105C17.2715 16.7496 17.2715 16.3265 17.0105 16.0656L14.5975 13.6526C15.7525 12.2837 16.4487 10.5148 16.4487 8.58351C16.4487 4.23971 12.9273 0.718359 8.58351 0.718359Z" fill="#03203F" stroke="#03203F" stroke-width="0.2" stroke-linecap="round"/>
                </svg>
                <AuthButton 
                    children='Log In'
                    fontSize='16px'
                    fontColor='#155DE9'
                    btnColor='transparent'
                    borderColor='#155DE9'
                />
                <AuthButton 
                    children='Sign Up'
                    fontSize='16px'
                    fontColor='#ffffff'
                    btnColor='#155DE9'
                    borderColor='#155DE9'
                />
            </Register>
        </Wrapper>
    )
};