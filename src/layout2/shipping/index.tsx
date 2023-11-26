import React from 'react';
import { 
    Wrapper,
    Title,
    ShippingBlog,
    Status,
    ShippingTitle,
    ShippingBar,
    Country,
    Bar,
    ButtonGroup
} from './index.styled';
import { Button } from '../../components/button';
export const Shipping: React.FC = () => {
    return (
        <Wrapper>
            <Title>
                Active Shipping <span> Leads</span>
            </Title>

            <ShippingBlog>
                <Status>
                    <ShippingTitle>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M23 20H21.625V18.72H2.375V20H1V4.64C1 4.4832 1.06187 4.33216 1.17394 4.21504C1.28531 4.09792 1.44 4.02304 1.60706 4.00448L1.6875 4H22.3125C22.4809 4 22.6432 4.0576 22.769 4.16192C22.8948 4.2656 22.9753 4.4096 22.9952 4.56512L23 4.64V20ZM21.625 5.28H2.375V17.44H21.625V5.28ZM19.5625 16.16H18.1875V6.56H19.5625V16.16ZM5.8125 16.16H4.4375V6.56H5.8125V16.16ZM9.25 16.16H7.875V6.56H9.25V16.16ZM12.6875 16.16H11.3125V6.56H12.6875V16.16ZM16.125 16.16H14.75V6.56H16.125V16.16Z" fill="#03203F"/>
                        </svg>
                        Less container load
                    </ShippingTitle>

                    <ShippingBar>
                        <Bar>
                            <Country>
                                <img src={require('../../images/Rectangle 4926.png')}/>
                                Sines
                            </Country>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.4043 1.65436L14.7499 8.00001L8.4043 14.3457" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7499 8L1.25 8" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Country>
                                <img src={require('../../images/Rectangle 4964.png')}/>
                                Portland
                            </Country>
                            <span>
                                4 hours
                            </span>
                        </Bar>
                        <Bar>
                            <Country>
                                <img src={require('../../images/Rectangle 4926.png')}/>
                                Sines
                            </Country>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.4043 1.65436L14.7499 8.00001L8.4043 14.3457" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7499 8L1.25 8" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Country>
                                <img src={require('../../images/Rectangle 4964.png')}/>
                                Portland
                            </Country>
                            <span>
                                4 hours
                            </span>
                        </Bar>
                        <Bar>
                            <Country>
                                <img src={require('../../images/Rectangle 4926.png')}/>
                                Sines
                            </Country>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.4043 1.65436L14.7499 8.00001L8.4043 14.3457" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7499 8L1.25 8" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Country>
                                <img src={require('../../images/Rectangle 4964.png')}/>
                                Portland
                            </Country>
                            <span>
                                4 hours
                            </span>
                        </Bar>
                        <Bar>
                            <Country>
                                <img src={require('../../images/Rectangle 4926.png')}/>
                                Sines
                            </Country>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.4043 1.65436L14.7499 8.00001L8.4043 14.3457" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7499 8L1.25 8" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Country>
                                <img src={require('../../images/Rectangle 4964.png')}/>
                                Portland
                            </Country>
                            <span>
                                4 hours
                            </span>
                        </Bar>
                        <Bar>
                            <Country>
                                <img src={require('../../images/Rectangle 4926.png')}/>
                                Sines
                            </Country>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.4043 1.65436L14.7499 8.00001L8.4043 14.3457" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7499 8L1.25 8" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Country>
                                <img src={require('../../images/Rectangle 4964.png')}/>
                                Portland
                            </Country>
                            <span>
                                4 hours
                            </span>
                        </Bar>
                    </ShippingBar>
                </Status>
                <Status>
                    <ShippingTitle>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M23 20H21.625V18.72H2.375V20H1V4.64C1 4.4832 1.06187 4.33216 1.17394 4.21504C1.28531 4.09792 1.44 4.02304 1.60706 4.00448L1.6875 4H22.3125C22.4809 4 22.6432 4.0576 22.769 4.16192C22.8948 4.2656 22.9753 4.4096 22.9952 4.56512L23 4.64V20ZM21.625 5.28H2.375V17.44H21.625V5.28ZM19.5625 16.16H18.1875V6.56H19.5625V16.16ZM5.8125 16.16H4.4375V6.56H5.8125V16.16ZM9.25 16.16H7.875V6.56H9.25V16.16ZM12.6875 16.16H11.3125V6.56H12.6875V16.16ZM16.125 16.16H14.75V6.56H16.125V16.16Z" fill="#03203F"/>
                        </svg>
                        Full container load
                    </ShippingTitle>

                    <ShippingBar>
                        <Bar>
                            <Country>
                                <img src={require('../../images/Rectangle 4926.png')}/>
                                Sines
                            </Country>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.4043 1.65436L14.7499 8.00001L8.4043 14.3457" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7499 8L1.25 8" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Country>
                                <img src={require('../../images/Rectangle 4964.png')}/>
                                Portland
                            </Country>
                            <span>
                                4 hours
                            </span>
                        </Bar>
                        <Bar>
                            <Country>
                                <img src={require('../../images/Rectangle 4926.png')}/>
                                Sines
                            </Country>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.4043 1.65436L14.7499 8.00001L8.4043 14.3457" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7499 8L1.25 8" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Country>
                                <img src={require('../../images/Rectangle 4964.png')}/>
                                Portland
                            </Country>
                            <span>
                                4 hours
                            </span>
                        </Bar>
                        <Bar>
                            <Country>
                                <img src={require('../../images/Rectangle 4926.png')}/>
                                Sines
                            </Country>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.4043 1.65436L14.7499 8.00001L8.4043 14.3457" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7499 8L1.25 8" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Country>
                                <img src={require('../../images/Rectangle 4964.png')}/>
                                Portland
                            </Country>
                            <span>
                                4 hours
                            </span>
                        </Bar>
                        <Bar>
                            <Country>
                                <img src={require('../../images/Rectangle 4926.png')}/>
                                Sines
                            </Country>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.4043 1.65436L14.7499 8.00001L8.4043 14.3457" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7499 8L1.25 8" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Country>
                                <img src={require('../../images/Rectangle 4964.png')}/>
                                Portland
                            </Country>
                            <span>
                                4 hours
                            </span>
                        </Bar>
                        <Bar>
                            <Country>
                                <img src={require('../../images/Rectangle 4926.png')}/>
                                Sines
                            </Country>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.4043 1.65436L14.7499 8.00001L8.4043 14.3457" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7499 8L1.25 8" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Country>
                                <img src={require('../../images/Rectangle 4964.png')}/>
                                Portland
                            </Country>
                            <span>
                                4 hours
                            </span>
                        </Bar>
                    </ShippingBar>
                </Status>
                <Status>
                    <ShippingTitle>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M23 20H21.625V18.72H2.375V20H1V4.64C1 4.4832 1.06187 4.33216 1.17394 4.21504C1.28531 4.09792 1.44 4.02304 1.60706 4.00448L1.6875 4H22.3125C22.4809 4 22.6432 4.0576 22.769 4.16192C22.8948 4.2656 22.9753 4.4096 22.9952 4.56512L23 4.64V20ZM21.625 5.28H2.375V17.44H21.625V5.28ZM19.5625 16.16H18.1875V6.56H19.5625V16.16ZM5.8125 16.16H4.4375V6.56H5.8125V16.16ZM9.25 16.16H7.875V6.56H9.25V16.16ZM12.6875 16.16H11.3125V6.56H12.6875V16.16ZM16.125 16.16H14.75V6.56H16.125V16.16Z" fill="#03203F"/>
                        </svg>
                        In Bulk
                    </ShippingTitle>

                    <ShippingBar>
                        <Bar>
                            <Country>
                                <img src={require('../../images/Rectangle 4926.png')}/>
                                Sines
                            </Country>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.4043 1.65436L14.7499 8.00001L8.4043 14.3457" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7499 8L1.25 8" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Country>
                                <img src={require('../../images/Rectangle 4964.png')}/>
                                Portland
                            </Country>
                            <span>
                                4 hours
                            </span>
                        </Bar>
                        <Bar>
                            <Country>
                                <img src={require('../../images/Rectangle 4926.png')}/>
                                Sines
                            </Country>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.4043 1.65436L14.7499 8.00001L8.4043 14.3457" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7499 8L1.25 8" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Country>
                                <img src={require('../../images/Rectangle 4964.png')}/>
                                Portland
                            </Country>
                            <span>
                                4 hours
                            </span>
                        </Bar>
                        <Bar>
                            <Country>
                                <img src={require('../../images/Rectangle 4926.png')}/>
                                Sines
                            </Country>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.4043 1.65436L14.7499 8.00001L8.4043 14.3457" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7499 8L1.25 8" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Country>
                                <img src={require('../../images/Rectangle 4964.png')}/>
                                Portland
                            </Country>
                            <span>
                                4 hours
                            </span>
                        </Bar>
                        <Bar>
                            <Country>
                                <img src={require('../../images/Rectangle 4926.png')}/>
                                Sines
                            </Country>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.4043 1.65436L14.7499 8.00001L8.4043 14.3457" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7499 8L1.25 8" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Country>
                                <img src={require('../../images/Rectangle 4964.png')}/>
                                Portland
                            </Country>
                            <span>
                                4 hours
                            </span>
                        </Bar>
                        <Bar>
                            <Country>
                                <img src={require('../../images/Rectangle 4926.png')}/>
                                Sines
                            </Country>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.4043 1.65436L14.7499 8.00001L8.4043 14.3457" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.7499 8L1.25 8" stroke="#03203F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <Country>
                                <img src={require('../../images/Rectangle 4964.png')}/>
                                Portland
                            </Country>
                            <span>
                                4 hours
                            </span>
                        </Bar>
                    </ShippingBar>
                </Status>
            </ShippingBlog>

            <ButtonGroup>
                <Button 
                    children='View all shipping leads ->'
                    fontSize='16px'
                    fontColor='#155DE9'
                    btnColor='#ffffff'
                    borderColor='#155DE9'
                />
                <Button 
                    children='Request a quote ->'
                    fontSize='16px'
                    fontColor='#ffffff'
                    btnColor='#155DE9'
                    borderColor='#155DE9'
                />
            </ButtonGroup>
        </Wrapper>
    )
};