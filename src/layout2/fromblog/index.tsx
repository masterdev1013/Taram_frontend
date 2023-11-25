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
} from './index.styled';

export const FromBlog: React.FC = () => {
    return (
        <Wrapper>
            <FromBlogTitle>
                From the <span>blog</span>
            </FromBlogTitle>

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