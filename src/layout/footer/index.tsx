import React from 'react';
import { Link } from "react-router-dom";
import { 
    Wrapper ,
    FooterContent,
    Products,
    Solutions,
    Developers,
    Resources,
    Company,
    List,
    Copyright,
    Social
} from './index.styled';
import { Title } from '../../components/title';
export const Footer: React.FC = () => {
    return (
        <Wrapper>
            <FooterContent>
                <Products>
                    <Title 
                        children='PRODUCTS'
                        fontColor='#FFF'
                        fontWeight='600'
                        fontSize='16px'
                    />
                    <List>
                        <ul>
                            <li>Taram Platform</li>
                            <li>Customs Brokerage</li>
                            <li>Ocean Freight</li>
                            <li>Air Freight</li>
                            <li>Less than Container</li>
                            <li>Trucking</li>
                            <li>Order Management</li>
                            <li>Booking Management</li>
                            <li>Climate</li>
                            <li>D2C Fulfillment</li>
                            <li>Wholesale Fulfillment</li>
                            <li>Parcel</li>
                            <li>Replenishment</li>
                        </ul>
                    </List>

                    <Social>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="11.6129" cy="11.6129" r="11.6129" fill="white"/>
                                <path d="M17.611 8.07134C17.1856 8.25275 16.7228 8.38331 16.2461 8.43416C16.741 8.14341 17.1117 7.68406 17.2885 7.14232C16.824 7.41551 16.3152 7.60708 15.7846 7.70853C15.5628 7.47411 15.2946 7.28736 14.9967 7.15992C14.6987 7.03247 14.3774 6.96707 14.0528 6.96778C12.7393 6.96778 11.6829 8.02049 11.6829 9.31234C11.6829 9.49375 11.7052 9.67515 11.7413 9.84969C9.77458 9.74799 8.02049 8.81896 6.85435 7.39656C6.64186 7.75541 6.53051 8.16401 6.53188 8.57983C6.53188 9.39342 6.95025 10.1108 7.58823 10.5327C7.21226 10.5181 6.84509 10.4159 6.51659 10.2345V10.2634C6.51659 11.4027 7.33109 12.3468 8.41662 12.5639C8.2128 12.6163 8.00313 12.6431 7.79254 12.6436C7.63826 12.6436 7.49232 12.6285 7.34499 12.6079C7.64521 13.5369 8.51947 14.2117 9.56053 14.2337C8.74603 14.8645 7.72583 15.2356 6.61806 15.2356C6.4193 15.2356 6.23583 15.2287 6.04541 15.2067C7.09619 15.8733 8.34295 16.2581 9.68562 16.2581C14.0444 16.2581 16.4295 12.6876 16.4295 9.58857C16.4295 9.48687 16.4295 9.38518 16.4226 9.28348C16.884 8.94952 17.2885 8.53586 17.611 8.07134Z" fill="#002366"/>
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="11.8384" cy="11.6129" r="11.6129" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49928 5.45427C10.1159 5.42577 10.3126 5.41943 11.8834 5.41943C13.4542 5.41943 13.6508 5.4263 14.2669 5.45427C14.883 5.48225 15.3036 5.58096 15.6716 5.72401C16.057 5.87022 16.4065 6.09879 16.6957 6.39439C16.9901 6.68418 17.2172 7.03468 17.3623 7.42212C17.5053 7.79162 17.6031 8.21391 17.6314 8.8315C17.6598 9.45173 17.6661 9.64915 17.6661 11.2259C17.6661 12.8031 17.6593 13.0005 17.6314 13.6197C17.6036 14.2373 17.5053 14.6596 17.3623 15.0291C17.2172 15.4166 16.9897 15.7677 16.6957 16.0579C16.4065 16.3535 16.057 16.5815 15.6716 16.7272C15.3036 16.8708 14.883 16.9689 14.268 16.9975C13.6508 17.026 13.4542 17.0323 11.8834 17.0323C10.3126 17.0323 10.1159 17.0254 9.49928 16.9975C8.8842 16.9695 8.46364 16.8708 8.09564 16.7272C7.70973 16.5815 7.36009 16.3531 7.07104 16.0579C6.77684 15.7679 6.54918 15.417 6.40392 15.0296C6.26145 14.6601 6.16367 14.2378 6.13528 13.6202C6.10689 13 6.10059 12.8026 6.10059 11.2259C6.10059 9.64863 6.10742 9.45121 6.13528 8.83256C6.16315 8.21391 6.26145 7.79162 6.40392 7.42212C6.54939 7.03472 6.77723 6.68382 7.07157 6.39386C7.3602 6.09852 7.7095 5.86993 8.09512 5.72401C8.46311 5.58096 8.88368 5.48278 9.49876 5.45427H9.49928ZM14.2201 6.49943C13.6103 6.47145 13.4274 6.46565 11.8834 6.46565C10.3394 6.46565 10.1564 6.47145 9.5466 6.49943C8.98251 6.52529 8.67655 6.61978 8.47258 6.69949C8.20289 6.80506 8.00995 6.93016 7.80756 7.13339C7.6157 7.3208 7.46804 7.54896 7.37543 7.80113C7.29604 8.00593 7.20194 8.31315 7.17618 8.87954C7.14832 9.49185 7.14254 9.67555 7.14254 11.2259C7.14254 12.7762 7.14832 12.9599 7.17618 13.5722C7.20194 14.1386 7.29604 14.4458 7.37543 14.6506C7.46795 14.9024 7.61567 15.1309 7.80756 15.3183C7.99418 15.511 8.22181 15.6593 8.47258 15.7522C8.67655 15.8319 8.98251 15.9264 9.5466 15.9523C10.1564 15.9803 10.3388 15.9861 11.8834 15.9861C13.4279 15.9861 13.6103 15.9803 14.2201 15.9523C14.7842 15.9264 15.0902 15.8319 15.2942 15.7522C15.5638 15.6467 15.7568 15.5216 15.9592 15.3183C16.1511 15.1309 16.2988 14.9024 16.3913 14.6506C16.4707 14.4458 16.5648 14.1386 16.5905 13.5722C16.6184 12.9599 16.6242 12.7762 16.6242 11.2259C16.6242 9.67555 16.6184 9.49185 16.5905 8.87954C16.5648 8.31315 16.4707 8.00593 16.3913 7.80113C16.2862 7.53033 16.1616 7.33661 15.9592 7.13339C15.7725 6.94076 15.5453 6.7925 15.2942 6.69949C15.0902 6.61978 14.7842 6.52529 14.2201 6.49943ZM11.1447 13.0158C11.5572 13.1882 12.0166 13.2115 12.4443 13.0817C12.8719 12.9518 13.2415 12.6769 13.4897 12.3039C13.738 11.9309 13.8495 11.4829 13.8054 11.0364C13.7612 10.59 13.5641 10.1728 13.2476 9.85607C13.0458 9.65363 12.8019 9.49861 12.5333 9.40219C12.2647 9.30577 11.9782 9.27034 11.6944 9.29845C11.4105 9.32656 11.1364 9.41752 10.8918 9.56476C10.6471 9.71201 10.4381 9.91189 10.2796 10.15C10.1211 10.3881 10.0172 10.6586 9.97532 10.9419C9.93343 11.2251 9.95462 11.5142 10.0374 11.7883C10.1201 12.0624 10.2623 12.3146 10.4538 12.5269C10.6453 12.7391 10.8813 12.9061 11.1447 13.0158ZM9.78159 9.11549C10.0576 8.83835 10.3853 8.61851 10.7459 8.46853C11.1065 8.31854 11.493 8.24134 11.8834 8.24134C12.2737 8.24134 12.6602 8.31854 13.0208 8.46853C13.3815 8.61851 13.7091 8.83835 13.9851 9.11549C14.2611 9.39263 14.4801 9.72164 14.6295 10.0837C14.7788 10.4458 14.8557 10.8339 14.8557 11.2259C14.8557 11.6178 14.7788 12.0059 14.6295 12.368C14.4801 12.7301 14.2611 13.0591 13.9851 13.3362C13.4277 13.8959 12.6717 14.2104 11.8834 14.2104C11.095 14.2104 10.339 13.8959 9.78159 13.3362C9.22416 12.7765 8.911 12.0174 8.911 11.2259C8.911 10.4343 9.22416 9.6752 9.78159 9.11549ZM15.5149 8.68581C15.5833 8.62103 15.6381 8.54312 15.676 8.45671C15.7138 8.3703 15.7341 8.27713 15.7354 8.18273C15.7368 8.08833 15.7193 7.99461 15.684 7.90712C15.6486 7.81964 15.5961 7.74016 15.5296 7.6734C15.4632 7.60665 15.384 7.55396 15.2969 7.51847C15.2097 7.48297 15.1164 7.4654 15.0224 7.46677C14.9284 7.46815 14.8356 7.48845 14.7495 7.52648C14.6635 7.56451 14.5859 7.61949 14.5214 7.68816C14.3959 7.82173 14.3272 7.99914 14.3298 8.18273C14.3325 8.36632 14.4063 8.54164 14.5356 8.67148C14.6649 8.80131 14.8396 8.87544 15.0224 8.87811C15.2052 8.88079 15.3819 8.81181 15.5149 8.68581Z" fill="#002366"/>
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12.064" cy="12.3873" r="11.6129" fill="white"/>
                                </svg>
                            </li>
                        </ul>
                    </Social>
                </Products>

                <Solutions>
                    <Title 
                        children='SOLUTIONS'
                        fontColor='#FFF'
                        fontWeight='600'
                        fontSize='16px'
                    />
                    <List>
                        <ul>
                            <li>Revolution for Entrepreneurs</li>
                            <li>Enterprise Solutions</li>
                            <li>High Value Goods</li>
                            <li>Global Brands</li>
                            <li>Nonprofits</li>
                        </ul>
                    </List>
                </Solutions>

                <Developers>
                    <Title 
                        children='DEVELOPERS'
                        fontColor='#FFF'
                        fontWeight='600'
                        fontSize='16px'
                    />
                    <List>
                        <ul>
                            <li>Developer Portal</li>
                            <li>API Documentation</li>
                            <li>API Tutorials</li>
                            <li>EDI Documentation</li>
                            <li>FAQ</li>
                            <li>API Status</li>
                        </ul>
                    </List>
                </Developers>

                <Resources>
                    <Title 
                        children='RESOURCES'
                        fontColor='#FFF'
                        fontWeight='600'
                        fontSize='16px'
                    />
                    <List>
                        <ul>
                            <li>Blog</li>
                            <li>Market Updates</li>
                            <li>Research</li>
                            <li>Air Freight</li>
                            <li>Videos and Webinars</li>
                            <li>E-Guides</li>
                            <li>FlexU</li>
                            <li>Help Center</li>
                            <li>Glossary</li>
                            <li>Case Studies</li>
                            <li>Pricing Calculator</li>
                            <li>Fulfillment Help Center</li>
                            <li>Flexport+</li>
                        </ul>
                    </List>
                </Resources>

                <Company>
                    <Title 
                        children='COMPANY'
                        fontColor='#FFF'
                        fontWeight='600'
                        fontSize='16px'
                    />
                    <List>
                        <ul>
                            <li>About Us</li>
                            <li>Customers</li>
                            <li>Engineering</li>
                            <li>Newsroom</li>
                            <li>Contact</li>
                            <li>Terms of Use</li>
                            <li>Leadership</li>
                            <li>Careers</li>
                            <li>Flexport.org</li>
                            <li>Global Network</li>
                            <li>Events</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </List>
                </Company>
            </FooterContent>
            <hr />
            <Copyright>
                <ul>
                    <li>Copyright © 2023 Taram.Inc</li>
                    <li>Privacy policy</li>
                    <li>Terms of service</li>
                </ul>
            </Copyright>
        </Wrapper>
    )
};
