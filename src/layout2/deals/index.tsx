import React from 'react';
import { Wrapper ,Title,Hots,Caption,HotsBlog,Hot,Country,PriceBar,Bar,Price} from './index.style';

export const Deals: React.FC = () => {
    return (
        <Wrapper>
            <Title>
                Hot <span>Deals</span>
            </Title>
            <Hots>
                <Caption>
                    Import to India
                    <img src={require('../../images/Flag_of_India (3) 1.png')}/>
                </Caption>
                <HotsBlog>
                    <Hot>
                        <img src={require('../../images/Rectangle 4929.png')}/>
                        <Country>
                            <img src={require('../../images/Rectangle 4926.png')}/>
                            Haiphoge,VN
                        </Country>
                        <PriceBar>
                            <Bar>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M14.875 16.875H5.125C2.9375 16.875 1.0625 15.25 0.75 13.0625L0.625 12.5H19.375L19.3125 13.0625C19 15.25 17.125 16.875 14.875 16.875Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.5 12.5H2.5L4.0625 8.3125C4.25 7.8125 4.6875 7.5 5.25 7.5H16.25C16.9375 7.5 17.5 8.0625 17.5 8.75V12.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.625 10H3.75" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.5 10.625C7.4375 10.625 7.3125 10.625 7.25 10.5625C7.1875 10.5 7.125 10.5 7.0625 10.4375C7.0625 10.375 7 10.375 7 10.375C7 10.3125 6.9375 10.3125 6.9375 10.25C6.9375 10.1875 6.9375 10.1875 6.875 10.125C6.875 10.0625 6.875 10.0625 6.875 10C6.875 9.9375 6.875 9.8125 6.9375 9.75C6.9375 9.6875 7 9.625 7.0625 9.5625C7.125 9.5 7.1875 9.4375 7.25 9.4375C7.375 9.375 7.5 9.375 7.625 9.375C7.6875 9.375 7.6875 9.375 7.75 9.4375C7.8125 9.4375 7.8125 9.5 7.875 9.5C7.875 9.5 7.9375 9.5625 8 9.5625C8.0625 9.625 8.125 9.6875 8.125 9.75C8.125 9.8125 8.1875 9.9375 8.1875 10C8.1875 10.1875 8.125 10.3125 8 10.4375C7.8125 10.5625 7.6875 10.625 7.5 10.625Z" fill="#03203F"/>
                                    <path d="M9.375 10.625C9.3125 10.625 9.1875 10.625 9.125 10.5625C9.0625 10.5 9 10.5 8.9375 10.4375C8.9375 10.375 8.875 10.375 8.875 10.375C8.875 10.3125 8.8125 10.3125 8.8125 10.25C8.8125 10.1875 8.8125 10.1875 8.75 10.125C8.75 10.0625 8.75 10.0625 8.75 10C8.75 9.9375 8.75 9.8125 8.8125 9.75C8.8125 9.6875 8.875 9.625 8.9375 9.5625C9 9.5 9.0625 9.4375 9.125 9.4375C9.25 9.375 9.375 9.375 9.5 9.375C9.5625 9.375 9.5625 9.375 9.625 9.4375C9.6875 9.4375 9.6875 9.5 9.75 9.5C9.75 9.5 9.8125 9.5625 9.875 9.5625C9.9375 9.625 10 9.6875 10 9.75C10 9.8125 10.0625 9.9375 10.0625 10C10.0625 10.1875 10 10.3125 9.875 10.4375C9.6875 10.5625 9.5625 10.625 9.375 10.625Z" fill="#03203F"/>
                                    <path d="M11.25 10.625C11.1875 10.625 11.0625 10.625 11 10.5625C10.9375 10.5 10.875 10.5 10.8125 10.4375C10.8125 10.375 10.75 10.375 10.75 10.375C10.75 10.3125 10.6875 10.3125 10.6875 10.25C10.6875 10.1875 10.6875 10.1875 10.625 10.125C10.625 10.0625 10.625 10.0625 10.625 10C10.625 9.9375 10.625 9.8125 10.6875 9.75C10.6875 9.6875 10.75 9.625 10.8125 9.5625C10.875 9.5 10.9375 9.4375 11 9.4375C11.125 9.375 11.25 9.375 11.375 9.375C11.4375 9.375 11.4375 9.375 11.5 9.4375C11.5625 9.4375 11.5625 9.5 11.625 9.5C11.625 9.5 11.6875 9.5625 11.75 9.5625C11.8125 9.625 11.875 9.6875 11.875 9.75C11.875 9.8125 11.9375 9.9375 11.9375 10C11.9375 10.1875 11.875 10.3125 11.75 10.4375C11.5625 10.5625 11.4375 10.625 11.25 10.625Z" fill="#03203F"/>
                                    <path d="M14.375 7.5H11.875L12.5 4.375H15L14.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.375 7.5H6.875L7.5 4.375H10L9.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                FCL . 20’ ST
                            </Bar>

                            <Price>
                                USD 441
                            </Price>
                        </PriceBar>
                    </Hot>
                    <Hot>
                        <img src={require('../../images/Rectangle 4929.png')}/>
                        <Country>
                            <img src={require('../../images/Rectangle 4926.png')}/>
                            Haiphoge,VN
                        </Country>
                        <PriceBar>
                            <Bar>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M14.875 16.875H5.125C2.9375 16.875 1.0625 15.25 0.75 13.0625L0.625 12.5H19.375L19.3125 13.0625C19 15.25 17.125 16.875 14.875 16.875Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.5 12.5H2.5L4.0625 8.3125C4.25 7.8125 4.6875 7.5 5.25 7.5H16.25C16.9375 7.5 17.5 8.0625 17.5 8.75V12.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.625 10H3.75" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.5 10.625C7.4375 10.625 7.3125 10.625 7.25 10.5625C7.1875 10.5 7.125 10.5 7.0625 10.4375C7.0625 10.375 7 10.375 7 10.375C7 10.3125 6.9375 10.3125 6.9375 10.25C6.9375 10.1875 6.9375 10.1875 6.875 10.125C6.875 10.0625 6.875 10.0625 6.875 10C6.875 9.9375 6.875 9.8125 6.9375 9.75C6.9375 9.6875 7 9.625 7.0625 9.5625C7.125 9.5 7.1875 9.4375 7.25 9.4375C7.375 9.375 7.5 9.375 7.625 9.375C7.6875 9.375 7.6875 9.375 7.75 9.4375C7.8125 9.4375 7.8125 9.5 7.875 9.5C7.875 9.5 7.9375 9.5625 8 9.5625C8.0625 9.625 8.125 9.6875 8.125 9.75C8.125 9.8125 8.1875 9.9375 8.1875 10C8.1875 10.1875 8.125 10.3125 8 10.4375C7.8125 10.5625 7.6875 10.625 7.5 10.625Z" fill="#03203F"/>
                                    <path d="M9.375 10.625C9.3125 10.625 9.1875 10.625 9.125 10.5625C9.0625 10.5 9 10.5 8.9375 10.4375C8.9375 10.375 8.875 10.375 8.875 10.375C8.875 10.3125 8.8125 10.3125 8.8125 10.25C8.8125 10.1875 8.8125 10.1875 8.75 10.125C8.75 10.0625 8.75 10.0625 8.75 10C8.75 9.9375 8.75 9.8125 8.8125 9.75C8.8125 9.6875 8.875 9.625 8.9375 9.5625C9 9.5 9.0625 9.4375 9.125 9.4375C9.25 9.375 9.375 9.375 9.5 9.375C9.5625 9.375 9.5625 9.375 9.625 9.4375C9.6875 9.4375 9.6875 9.5 9.75 9.5C9.75 9.5 9.8125 9.5625 9.875 9.5625C9.9375 9.625 10 9.6875 10 9.75C10 9.8125 10.0625 9.9375 10.0625 10C10.0625 10.1875 10 10.3125 9.875 10.4375C9.6875 10.5625 9.5625 10.625 9.375 10.625Z" fill="#03203F"/>
                                    <path d="M11.25 10.625C11.1875 10.625 11.0625 10.625 11 10.5625C10.9375 10.5 10.875 10.5 10.8125 10.4375C10.8125 10.375 10.75 10.375 10.75 10.375C10.75 10.3125 10.6875 10.3125 10.6875 10.25C10.6875 10.1875 10.6875 10.1875 10.625 10.125C10.625 10.0625 10.625 10.0625 10.625 10C10.625 9.9375 10.625 9.8125 10.6875 9.75C10.6875 9.6875 10.75 9.625 10.8125 9.5625C10.875 9.5 10.9375 9.4375 11 9.4375C11.125 9.375 11.25 9.375 11.375 9.375C11.4375 9.375 11.4375 9.375 11.5 9.4375C11.5625 9.4375 11.5625 9.5 11.625 9.5C11.625 9.5 11.6875 9.5625 11.75 9.5625C11.8125 9.625 11.875 9.6875 11.875 9.75C11.875 9.8125 11.9375 9.9375 11.9375 10C11.9375 10.1875 11.875 10.3125 11.75 10.4375C11.5625 10.5625 11.4375 10.625 11.25 10.625Z" fill="#03203F"/>
                                    <path d="M14.375 7.5H11.875L12.5 4.375H15L14.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.375 7.5H6.875L7.5 4.375H10L9.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                FCL . 20’ ST
                            </Bar>

                            <Price>
                                USD 441
                            </Price>
                        </PriceBar>
                    </Hot>
                    <Hot>
                        <img src={require('../../images/Rectangle 4929.png')}/>
                        <Country>
                            <img src={require('../../images/Rectangle 4926.png')}/>
                            Haiphoge,VN
                        </Country>
                        <PriceBar>
                            <Bar>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M14.875 16.875H5.125C2.9375 16.875 1.0625 15.25 0.75 13.0625L0.625 12.5H19.375L19.3125 13.0625C19 15.25 17.125 16.875 14.875 16.875Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.5 12.5H2.5L4.0625 8.3125C4.25 7.8125 4.6875 7.5 5.25 7.5H16.25C16.9375 7.5 17.5 8.0625 17.5 8.75V12.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.625 10H3.75" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.5 10.625C7.4375 10.625 7.3125 10.625 7.25 10.5625C7.1875 10.5 7.125 10.5 7.0625 10.4375C7.0625 10.375 7 10.375 7 10.375C7 10.3125 6.9375 10.3125 6.9375 10.25C6.9375 10.1875 6.9375 10.1875 6.875 10.125C6.875 10.0625 6.875 10.0625 6.875 10C6.875 9.9375 6.875 9.8125 6.9375 9.75C6.9375 9.6875 7 9.625 7.0625 9.5625C7.125 9.5 7.1875 9.4375 7.25 9.4375C7.375 9.375 7.5 9.375 7.625 9.375C7.6875 9.375 7.6875 9.375 7.75 9.4375C7.8125 9.4375 7.8125 9.5 7.875 9.5C7.875 9.5 7.9375 9.5625 8 9.5625C8.0625 9.625 8.125 9.6875 8.125 9.75C8.125 9.8125 8.1875 9.9375 8.1875 10C8.1875 10.1875 8.125 10.3125 8 10.4375C7.8125 10.5625 7.6875 10.625 7.5 10.625Z" fill="#03203F"/>
                                    <path d="M9.375 10.625C9.3125 10.625 9.1875 10.625 9.125 10.5625C9.0625 10.5 9 10.5 8.9375 10.4375C8.9375 10.375 8.875 10.375 8.875 10.375C8.875 10.3125 8.8125 10.3125 8.8125 10.25C8.8125 10.1875 8.8125 10.1875 8.75 10.125C8.75 10.0625 8.75 10.0625 8.75 10C8.75 9.9375 8.75 9.8125 8.8125 9.75C8.8125 9.6875 8.875 9.625 8.9375 9.5625C9 9.5 9.0625 9.4375 9.125 9.4375C9.25 9.375 9.375 9.375 9.5 9.375C9.5625 9.375 9.5625 9.375 9.625 9.4375C9.6875 9.4375 9.6875 9.5 9.75 9.5C9.75 9.5 9.8125 9.5625 9.875 9.5625C9.9375 9.625 10 9.6875 10 9.75C10 9.8125 10.0625 9.9375 10.0625 10C10.0625 10.1875 10 10.3125 9.875 10.4375C9.6875 10.5625 9.5625 10.625 9.375 10.625Z" fill="#03203F"/>
                                    <path d="M11.25 10.625C11.1875 10.625 11.0625 10.625 11 10.5625C10.9375 10.5 10.875 10.5 10.8125 10.4375C10.8125 10.375 10.75 10.375 10.75 10.375C10.75 10.3125 10.6875 10.3125 10.6875 10.25C10.6875 10.1875 10.6875 10.1875 10.625 10.125C10.625 10.0625 10.625 10.0625 10.625 10C10.625 9.9375 10.625 9.8125 10.6875 9.75C10.6875 9.6875 10.75 9.625 10.8125 9.5625C10.875 9.5 10.9375 9.4375 11 9.4375C11.125 9.375 11.25 9.375 11.375 9.375C11.4375 9.375 11.4375 9.375 11.5 9.4375C11.5625 9.4375 11.5625 9.5 11.625 9.5C11.625 9.5 11.6875 9.5625 11.75 9.5625C11.8125 9.625 11.875 9.6875 11.875 9.75C11.875 9.8125 11.9375 9.9375 11.9375 10C11.9375 10.1875 11.875 10.3125 11.75 10.4375C11.5625 10.5625 11.4375 10.625 11.25 10.625Z" fill="#03203F"/>
                                    <path d="M14.375 7.5H11.875L12.5 4.375H15L14.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.375 7.5H6.875L7.5 4.375H10L9.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                FCL . 20’ ST
                            </Bar>

                            <Price>
                                USD 441
                            </Price>
                        </PriceBar>
                    </Hot>
                    <Hot>
                        <img src={require('../../images/Rectangle 4929.png')}/>
                        <Country>
                            <img src={require('../../images/Rectangle 4926.png')}/>
                            Haiphoge,VN
                        </Country>
                        <PriceBar>
                            <Bar>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M14.875 16.875H5.125C2.9375 16.875 1.0625 15.25 0.75 13.0625L0.625 12.5H19.375L19.3125 13.0625C19 15.25 17.125 16.875 14.875 16.875Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.5 12.5H2.5L4.0625 8.3125C4.25 7.8125 4.6875 7.5 5.25 7.5H16.25C16.9375 7.5 17.5 8.0625 17.5 8.75V12.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.625 10H3.75" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.5 10.625C7.4375 10.625 7.3125 10.625 7.25 10.5625C7.1875 10.5 7.125 10.5 7.0625 10.4375C7.0625 10.375 7 10.375 7 10.375C7 10.3125 6.9375 10.3125 6.9375 10.25C6.9375 10.1875 6.9375 10.1875 6.875 10.125C6.875 10.0625 6.875 10.0625 6.875 10C6.875 9.9375 6.875 9.8125 6.9375 9.75C6.9375 9.6875 7 9.625 7.0625 9.5625C7.125 9.5 7.1875 9.4375 7.25 9.4375C7.375 9.375 7.5 9.375 7.625 9.375C7.6875 9.375 7.6875 9.375 7.75 9.4375C7.8125 9.4375 7.8125 9.5 7.875 9.5C7.875 9.5 7.9375 9.5625 8 9.5625C8.0625 9.625 8.125 9.6875 8.125 9.75C8.125 9.8125 8.1875 9.9375 8.1875 10C8.1875 10.1875 8.125 10.3125 8 10.4375C7.8125 10.5625 7.6875 10.625 7.5 10.625Z" fill="#03203F"/>
                                    <path d="M9.375 10.625C9.3125 10.625 9.1875 10.625 9.125 10.5625C9.0625 10.5 9 10.5 8.9375 10.4375C8.9375 10.375 8.875 10.375 8.875 10.375C8.875 10.3125 8.8125 10.3125 8.8125 10.25C8.8125 10.1875 8.8125 10.1875 8.75 10.125C8.75 10.0625 8.75 10.0625 8.75 10C8.75 9.9375 8.75 9.8125 8.8125 9.75C8.8125 9.6875 8.875 9.625 8.9375 9.5625C9 9.5 9.0625 9.4375 9.125 9.4375C9.25 9.375 9.375 9.375 9.5 9.375C9.5625 9.375 9.5625 9.375 9.625 9.4375C9.6875 9.4375 9.6875 9.5 9.75 9.5C9.75 9.5 9.8125 9.5625 9.875 9.5625C9.9375 9.625 10 9.6875 10 9.75C10 9.8125 10.0625 9.9375 10.0625 10C10.0625 10.1875 10 10.3125 9.875 10.4375C9.6875 10.5625 9.5625 10.625 9.375 10.625Z" fill="#03203F"/>
                                    <path d="M11.25 10.625C11.1875 10.625 11.0625 10.625 11 10.5625C10.9375 10.5 10.875 10.5 10.8125 10.4375C10.8125 10.375 10.75 10.375 10.75 10.375C10.75 10.3125 10.6875 10.3125 10.6875 10.25C10.6875 10.1875 10.6875 10.1875 10.625 10.125C10.625 10.0625 10.625 10.0625 10.625 10C10.625 9.9375 10.625 9.8125 10.6875 9.75C10.6875 9.6875 10.75 9.625 10.8125 9.5625C10.875 9.5 10.9375 9.4375 11 9.4375C11.125 9.375 11.25 9.375 11.375 9.375C11.4375 9.375 11.4375 9.375 11.5 9.4375C11.5625 9.4375 11.5625 9.5 11.625 9.5C11.625 9.5 11.6875 9.5625 11.75 9.5625C11.8125 9.625 11.875 9.6875 11.875 9.75C11.875 9.8125 11.9375 9.9375 11.9375 10C11.9375 10.1875 11.875 10.3125 11.75 10.4375C11.5625 10.5625 11.4375 10.625 11.25 10.625Z" fill="#03203F"/>
                                    <path d="M14.375 7.5H11.875L12.5 4.375H15L14.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.375 7.5H6.875L7.5 4.375H10L9.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                FCL . 20’ ST
                            </Bar>

                            <Price>
                                USD 441
                            </Price>
                        </PriceBar>
                    </Hot>
                </HotsBlog>
            </Hots>
            <Hots>
                <Caption>
                    Export to India
                    <img src={require('../../images/Flag_of_India (3) 1.png')}/>
                </Caption>
                <HotsBlog>
                    <Hot>
                        <img src={require('../../images/Rectangle 4929.png')}/>
                        <Country>
                            <img src={require('../../images/Rectangle 4926.png')}/>
                            Haiphoge,VN
                        </Country>
                        <PriceBar>
                            <Bar>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M14.875 16.875H5.125C2.9375 16.875 1.0625 15.25 0.75 13.0625L0.625 12.5H19.375L19.3125 13.0625C19 15.25 17.125 16.875 14.875 16.875Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.5 12.5H2.5L4.0625 8.3125C4.25 7.8125 4.6875 7.5 5.25 7.5H16.25C16.9375 7.5 17.5 8.0625 17.5 8.75V12.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.625 10H3.75" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.5 10.625C7.4375 10.625 7.3125 10.625 7.25 10.5625C7.1875 10.5 7.125 10.5 7.0625 10.4375C7.0625 10.375 7 10.375 7 10.375C7 10.3125 6.9375 10.3125 6.9375 10.25C6.9375 10.1875 6.9375 10.1875 6.875 10.125C6.875 10.0625 6.875 10.0625 6.875 10C6.875 9.9375 6.875 9.8125 6.9375 9.75C6.9375 9.6875 7 9.625 7.0625 9.5625C7.125 9.5 7.1875 9.4375 7.25 9.4375C7.375 9.375 7.5 9.375 7.625 9.375C7.6875 9.375 7.6875 9.375 7.75 9.4375C7.8125 9.4375 7.8125 9.5 7.875 9.5C7.875 9.5 7.9375 9.5625 8 9.5625C8.0625 9.625 8.125 9.6875 8.125 9.75C8.125 9.8125 8.1875 9.9375 8.1875 10C8.1875 10.1875 8.125 10.3125 8 10.4375C7.8125 10.5625 7.6875 10.625 7.5 10.625Z" fill="#03203F"/>
                                    <path d="M9.375 10.625C9.3125 10.625 9.1875 10.625 9.125 10.5625C9.0625 10.5 9 10.5 8.9375 10.4375C8.9375 10.375 8.875 10.375 8.875 10.375C8.875 10.3125 8.8125 10.3125 8.8125 10.25C8.8125 10.1875 8.8125 10.1875 8.75 10.125C8.75 10.0625 8.75 10.0625 8.75 10C8.75 9.9375 8.75 9.8125 8.8125 9.75C8.8125 9.6875 8.875 9.625 8.9375 9.5625C9 9.5 9.0625 9.4375 9.125 9.4375C9.25 9.375 9.375 9.375 9.5 9.375C9.5625 9.375 9.5625 9.375 9.625 9.4375C9.6875 9.4375 9.6875 9.5 9.75 9.5C9.75 9.5 9.8125 9.5625 9.875 9.5625C9.9375 9.625 10 9.6875 10 9.75C10 9.8125 10.0625 9.9375 10.0625 10C10.0625 10.1875 10 10.3125 9.875 10.4375C9.6875 10.5625 9.5625 10.625 9.375 10.625Z" fill="#03203F"/>
                                    <path d="M11.25 10.625C11.1875 10.625 11.0625 10.625 11 10.5625C10.9375 10.5 10.875 10.5 10.8125 10.4375C10.8125 10.375 10.75 10.375 10.75 10.375C10.75 10.3125 10.6875 10.3125 10.6875 10.25C10.6875 10.1875 10.6875 10.1875 10.625 10.125C10.625 10.0625 10.625 10.0625 10.625 10C10.625 9.9375 10.625 9.8125 10.6875 9.75C10.6875 9.6875 10.75 9.625 10.8125 9.5625C10.875 9.5 10.9375 9.4375 11 9.4375C11.125 9.375 11.25 9.375 11.375 9.375C11.4375 9.375 11.4375 9.375 11.5 9.4375C11.5625 9.4375 11.5625 9.5 11.625 9.5C11.625 9.5 11.6875 9.5625 11.75 9.5625C11.8125 9.625 11.875 9.6875 11.875 9.75C11.875 9.8125 11.9375 9.9375 11.9375 10C11.9375 10.1875 11.875 10.3125 11.75 10.4375C11.5625 10.5625 11.4375 10.625 11.25 10.625Z" fill="#03203F"/>
                                    <path d="M14.375 7.5H11.875L12.5 4.375H15L14.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.375 7.5H6.875L7.5 4.375H10L9.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                FCL . 20’ ST
                            </Bar>

                            <Price>
                                USD 441
                            </Price>
                        </PriceBar>
                    </Hot>
                    <Hot>
                        <img src={require('../../images/Rectangle 4929.png')}/>
                        <Country>
                            <img src={require('../../images/Rectangle 4926.png')}/>
                            Haiphoge,VN
                        </Country>
                        <PriceBar>
                            <Bar>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M14.875 16.875H5.125C2.9375 16.875 1.0625 15.25 0.75 13.0625L0.625 12.5H19.375L19.3125 13.0625C19 15.25 17.125 16.875 14.875 16.875Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.5 12.5H2.5L4.0625 8.3125C4.25 7.8125 4.6875 7.5 5.25 7.5H16.25C16.9375 7.5 17.5 8.0625 17.5 8.75V12.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.625 10H3.75" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.5 10.625C7.4375 10.625 7.3125 10.625 7.25 10.5625C7.1875 10.5 7.125 10.5 7.0625 10.4375C7.0625 10.375 7 10.375 7 10.375C7 10.3125 6.9375 10.3125 6.9375 10.25C6.9375 10.1875 6.9375 10.1875 6.875 10.125C6.875 10.0625 6.875 10.0625 6.875 10C6.875 9.9375 6.875 9.8125 6.9375 9.75C6.9375 9.6875 7 9.625 7.0625 9.5625C7.125 9.5 7.1875 9.4375 7.25 9.4375C7.375 9.375 7.5 9.375 7.625 9.375C7.6875 9.375 7.6875 9.375 7.75 9.4375C7.8125 9.4375 7.8125 9.5 7.875 9.5C7.875 9.5 7.9375 9.5625 8 9.5625C8.0625 9.625 8.125 9.6875 8.125 9.75C8.125 9.8125 8.1875 9.9375 8.1875 10C8.1875 10.1875 8.125 10.3125 8 10.4375C7.8125 10.5625 7.6875 10.625 7.5 10.625Z" fill="#03203F"/>
                                    <path d="M9.375 10.625C9.3125 10.625 9.1875 10.625 9.125 10.5625C9.0625 10.5 9 10.5 8.9375 10.4375C8.9375 10.375 8.875 10.375 8.875 10.375C8.875 10.3125 8.8125 10.3125 8.8125 10.25C8.8125 10.1875 8.8125 10.1875 8.75 10.125C8.75 10.0625 8.75 10.0625 8.75 10C8.75 9.9375 8.75 9.8125 8.8125 9.75C8.8125 9.6875 8.875 9.625 8.9375 9.5625C9 9.5 9.0625 9.4375 9.125 9.4375C9.25 9.375 9.375 9.375 9.5 9.375C9.5625 9.375 9.5625 9.375 9.625 9.4375C9.6875 9.4375 9.6875 9.5 9.75 9.5C9.75 9.5 9.8125 9.5625 9.875 9.5625C9.9375 9.625 10 9.6875 10 9.75C10 9.8125 10.0625 9.9375 10.0625 10C10.0625 10.1875 10 10.3125 9.875 10.4375C9.6875 10.5625 9.5625 10.625 9.375 10.625Z" fill="#03203F"/>
                                    <path d="M11.25 10.625C11.1875 10.625 11.0625 10.625 11 10.5625C10.9375 10.5 10.875 10.5 10.8125 10.4375C10.8125 10.375 10.75 10.375 10.75 10.375C10.75 10.3125 10.6875 10.3125 10.6875 10.25C10.6875 10.1875 10.6875 10.1875 10.625 10.125C10.625 10.0625 10.625 10.0625 10.625 10C10.625 9.9375 10.625 9.8125 10.6875 9.75C10.6875 9.6875 10.75 9.625 10.8125 9.5625C10.875 9.5 10.9375 9.4375 11 9.4375C11.125 9.375 11.25 9.375 11.375 9.375C11.4375 9.375 11.4375 9.375 11.5 9.4375C11.5625 9.4375 11.5625 9.5 11.625 9.5C11.625 9.5 11.6875 9.5625 11.75 9.5625C11.8125 9.625 11.875 9.6875 11.875 9.75C11.875 9.8125 11.9375 9.9375 11.9375 10C11.9375 10.1875 11.875 10.3125 11.75 10.4375C11.5625 10.5625 11.4375 10.625 11.25 10.625Z" fill="#03203F"/>
                                    <path d="M14.375 7.5H11.875L12.5 4.375H15L14.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.375 7.5H6.875L7.5 4.375H10L9.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                FCL . 20’ ST
                            </Bar>

                            <Price>
                                USD 441
                            </Price>
                        </PriceBar>
                    </Hot>
                    <Hot>
                        <img src={require('../../images/Rectangle 4929.png')}/>
                        <Country>
                            <img src={require('../../images/Rectangle 4926.png')}/>
                            Haiphoge,VN
                        </Country>
                        <PriceBar>
                            <Bar>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M14.875 16.875H5.125C2.9375 16.875 1.0625 15.25 0.75 13.0625L0.625 12.5H19.375L19.3125 13.0625C19 15.25 17.125 16.875 14.875 16.875Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.5 12.5H2.5L4.0625 8.3125C4.25 7.8125 4.6875 7.5 5.25 7.5H16.25C16.9375 7.5 17.5 8.0625 17.5 8.75V12.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.625 10H3.75" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.5 10.625C7.4375 10.625 7.3125 10.625 7.25 10.5625C7.1875 10.5 7.125 10.5 7.0625 10.4375C7.0625 10.375 7 10.375 7 10.375C7 10.3125 6.9375 10.3125 6.9375 10.25C6.9375 10.1875 6.9375 10.1875 6.875 10.125C6.875 10.0625 6.875 10.0625 6.875 10C6.875 9.9375 6.875 9.8125 6.9375 9.75C6.9375 9.6875 7 9.625 7.0625 9.5625C7.125 9.5 7.1875 9.4375 7.25 9.4375C7.375 9.375 7.5 9.375 7.625 9.375C7.6875 9.375 7.6875 9.375 7.75 9.4375C7.8125 9.4375 7.8125 9.5 7.875 9.5C7.875 9.5 7.9375 9.5625 8 9.5625C8.0625 9.625 8.125 9.6875 8.125 9.75C8.125 9.8125 8.1875 9.9375 8.1875 10C8.1875 10.1875 8.125 10.3125 8 10.4375C7.8125 10.5625 7.6875 10.625 7.5 10.625Z" fill="#03203F"/>
                                    <path d="M9.375 10.625C9.3125 10.625 9.1875 10.625 9.125 10.5625C9.0625 10.5 9 10.5 8.9375 10.4375C8.9375 10.375 8.875 10.375 8.875 10.375C8.875 10.3125 8.8125 10.3125 8.8125 10.25C8.8125 10.1875 8.8125 10.1875 8.75 10.125C8.75 10.0625 8.75 10.0625 8.75 10C8.75 9.9375 8.75 9.8125 8.8125 9.75C8.8125 9.6875 8.875 9.625 8.9375 9.5625C9 9.5 9.0625 9.4375 9.125 9.4375C9.25 9.375 9.375 9.375 9.5 9.375C9.5625 9.375 9.5625 9.375 9.625 9.4375C9.6875 9.4375 9.6875 9.5 9.75 9.5C9.75 9.5 9.8125 9.5625 9.875 9.5625C9.9375 9.625 10 9.6875 10 9.75C10 9.8125 10.0625 9.9375 10.0625 10C10.0625 10.1875 10 10.3125 9.875 10.4375C9.6875 10.5625 9.5625 10.625 9.375 10.625Z" fill="#03203F"/>
                                    <path d="M11.25 10.625C11.1875 10.625 11.0625 10.625 11 10.5625C10.9375 10.5 10.875 10.5 10.8125 10.4375C10.8125 10.375 10.75 10.375 10.75 10.375C10.75 10.3125 10.6875 10.3125 10.6875 10.25C10.6875 10.1875 10.6875 10.1875 10.625 10.125C10.625 10.0625 10.625 10.0625 10.625 10C10.625 9.9375 10.625 9.8125 10.6875 9.75C10.6875 9.6875 10.75 9.625 10.8125 9.5625C10.875 9.5 10.9375 9.4375 11 9.4375C11.125 9.375 11.25 9.375 11.375 9.375C11.4375 9.375 11.4375 9.375 11.5 9.4375C11.5625 9.4375 11.5625 9.5 11.625 9.5C11.625 9.5 11.6875 9.5625 11.75 9.5625C11.8125 9.625 11.875 9.6875 11.875 9.75C11.875 9.8125 11.9375 9.9375 11.9375 10C11.9375 10.1875 11.875 10.3125 11.75 10.4375C11.5625 10.5625 11.4375 10.625 11.25 10.625Z" fill="#03203F"/>
                                    <path d="M14.375 7.5H11.875L12.5 4.375H15L14.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.375 7.5H6.875L7.5 4.375H10L9.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                FCL . 20’ ST
                            </Bar>

                            <Price>
                                USD 441
                            </Price>
                        </PriceBar>
                    </Hot>
                    <Hot>
                        <img src={require('../../images/Rectangle 4929.png')}/>
                        <Country>
                            <img src={require('../../images/Rectangle 4926.png')}/>
                            Haiphoge,VN
                        </Country>
                        <PriceBar>
                            <Bar>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M14.875 16.875H5.125C2.9375 16.875 1.0625 15.25 0.75 13.0625L0.625 12.5H19.375L19.3125 13.0625C19 15.25 17.125 16.875 14.875 16.875Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.5 12.5H2.5L4.0625 8.3125C4.25 7.8125 4.6875 7.5 5.25 7.5H16.25C16.9375 7.5 17.5 8.0625 17.5 8.75V12.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.625 10H3.75" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.5 10.625C7.4375 10.625 7.3125 10.625 7.25 10.5625C7.1875 10.5 7.125 10.5 7.0625 10.4375C7.0625 10.375 7 10.375 7 10.375C7 10.3125 6.9375 10.3125 6.9375 10.25C6.9375 10.1875 6.9375 10.1875 6.875 10.125C6.875 10.0625 6.875 10.0625 6.875 10C6.875 9.9375 6.875 9.8125 6.9375 9.75C6.9375 9.6875 7 9.625 7.0625 9.5625C7.125 9.5 7.1875 9.4375 7.25 9.4375C7.375 9.375 7.5 9.375 7.625 9.375C7.6875 9.375 7.6875 9.375 7.75 9.4375C7.8125 9.4375 7.8125 9.5 7.875 9.5C7.875 9.5 7.9375 9.5625 8 9.5625C8.0625 9.625 8.125 9.6875 8.125 9.75C8.125 9.8125 8.1875 9.9375 8.1875 10C8.1875 10.1875 8.125 10.3125 8 10.4375C7.8125 10.5625 7.6875 10.625 7.5 10.625Z" fill="#03203F"/>
                                    <path d="M9.375 10.625C9.3125 10.625 9.1875 10.625 9.125 10.5625C9.0625 10.5 9 10.5 8.9375 10.4375C8.9375 10.375 8.875 10.375 8.875 10.375C8.875 10.3125 8.8125 10.3125 8.8125 10.25C8.8125 10.1875 8.8125 10.1875 8.75 10.125C8.75 10.0625 8.75 10.0625 8.75 10C8.75 9.9375 8.75 9.8125 8.8125 9.75C8.8125 9.6875 8.875 9.625 8.9375 9.5625C9 9.5 9.0625 9.4375 9.125 9.4375C9.25 9.375 9.375 9.375 9.5 9.375C9.5625 9.375 9.5625 9.375 9.625 9.4375C9.6875 9.4375 9.6875 9.5 9.75 9.5C9.75 9.5 9.8125 9.5625 9.875 9.5625C9.9375 9.625 10 9.6875 10 9.75C10 9.8125 10.0625 9.9375 10.0625 10C10.0625 10.1875 10 10.3125 9.875 10.4375C9.6875 10.5625 9.5625 10.625 9.375 10.625Z" fill="#03203F"/>
                                    <path d="M11.25 10.625C11.1875 10.625 11.0625 10.625 11 10.5625C10.9375 10.5 10.875 10.5 10.8125 10.4375C10.8125 10.375 10.75 10.375 10.75 10.375C10.75 10.3125 10.6875 10.3125 10.6875 10.25C10.6875 10.1875 10.6875 10.1875 10.625 10.125C10.625 10.0625 10.625 10.0625 10.625 10C10.625 9.9375 10.625 9.8125 10.6875 9.75C10.6875 9.6875 10.75 9.625 10.8125 9.5625C10.875 9.5 10.9375 9.4375 11 9.4375C11.125 9.375 11.25 9.375 11.375 9.375C11.4375 9.375 11.4375 9.375 11.5 9.4375C11.5625 9.4375 11.5625 9.5 11.625 9.5C11.625 9.5 11.6875 9.5625 11.75 9.5625C11.8125 9.625 11.875 9.6875 11.875 9.75C11.875 9.8125 11.9375 9.9375 11.9375 10C11.9375 10.1875 11.875 10.3125 11.75 10.4375C11.5625 10.5625 11.4375 10.625 11.25 10.625Z" fill="#03203F"/>
                                    <path d="M14.375 7.5H11.875L12.5 4.375H15L14.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.375 7.5H6.875L7.5 4.375H10L9.375 7.5Z" stroke="#03203F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                FCL . 20’ ST
                            </Bar>

                            <Price>
                                USD 441
                            </Price>
                        </PriceBar>
                    </Hot>
                </HotsBlog>
            </Hots>
        </Wrapper>
    )
}