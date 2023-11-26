import React from 'react';
import { 
    Wrapper,
    Title,
    FromBlogTitle,
    BlogGroup,
    Image,
    Img1,
    ImgTitle,
    Calendar,
    Icon,
    Date,
    Button,
    Topbar
} from './index.styled';

export const FromBlog: React.FC = () => {
    return (
        <Wrapper>
            <Topbar>
                <FromBlogTitle>
                    From the <span>blog</span>
                </FromBlogTitle>
                <Button>
                View all articles
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8.4043 1.6543L14.7499 7.99995L8.4043 14.3456" stroke="#155DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.7499 8L1.25 8" stroke="#155DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Button>
            </Topbar>

            <BlogGroup>
                <Image>
                    <Img1>
                        <img src={require('../../images/Rectangle 4723 (1).png')}/>  
                    </Img1>

                    <ImgTitle>
                        Video
                    </ImgTitle>

                    <Title>
                        Taram Revolution: A Q&A With EVP of SMB Product and Technology Parisa Sadrzadeh
                    </Title>

                    <Calendar>
                        <Icon>
                            <img src={require('../../images/Calendar.png')}/>
                        </Icon>
                        <Date>
                            SEP 11, 2023
                        </Date>
                    </Calendar>
                </Image>
                <Image>
                    <Img1>
                        <img src={require('../../images/Rectangle 4723.png')}/>  
                    </Img1>

                    <ImgTitle>
                        Video
                    </ImgTitle>

                    <Title>
                        Taram Revolution: A Q&A With EVP of SMB Product and Technology Parisa Sadrzadeh
                    </Title>
                    <Calendar>
                        <Icon>
                            <img src={require('../../images/Calendar.png')}/>
                        </Icon>
                        <Date>
                            SEP 11, 2023
                        </Date>
                    </Calendar>
                </Image>
                <Image>
                    <Img1>
                        <img src={require('../../images/Rectangle 4723.png')}/>  
                    </Img1>

                    <ImgTitle>
                        Video
                    </ImgTitle>

                    <Title>
                        Taram Revolution: A Q&A With EVP of SMB Product and Technology Parisa Sadrzadeh
                    </Title>
                    <Calendar>
                        <Icon>
                            <img src={require('../../images/Calendar.png')}/>
                        </Icon>
                        <Date>
                            SEP 11, 2023
                        </Date>
                    </Calendar>
                </Image>
            </BlogGroup>
        </Wrapper>
    )
};