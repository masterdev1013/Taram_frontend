import React from 'react';
import { 
    Wrapper, 
    NewsTitle,
    Title ,
    Images,
    Image,
    Img1, 
    ImgTitle,
    Button,
    Circles
} from './index.styled';

export const News: React.FC = () => {
    return (
        <Wrapper>
            <NewsTitle>
                News & <span>Events</span>
            </NewsTitle>

            <Images>
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

                    <Button>
                        Read Their Stories 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.4043 1.6543L14.7499 7.99995L8.4043 14.3456" stroke="#155DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.7499 8L1.25 8" stroke="#155DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Button>
                </Image>
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

                    <Button>
                        Read Their Stories 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.4043 1.6543L14.7499 7.99995L8.4043 14.3456" stroke="#155DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.7499 8L1.25 8" stroke="#155DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Button>
                </Image>
                <Image>
                    <Img1>
                        <img src={require('../../images/Rectangle 4723 (3).png')}/>  
                    </Img1>

                    <ImgTitle>
                        Video
                    </ImgTitle>

                    <Title>
                        Taram Revolution: A Q&A With EVP of SMB Product and Technology Parisa Sadrzadeh
                    </Title>

                    <Button>
                        Read Their Stories 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.4043 1.6543L14.7499 7.99995L8.4043 14.3456" stroke="#155DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.7499 8L1.25 8" stroke="#155DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Button>
                </Image>
            </Images>

            <Circles>
                <svg xmlns="http://www.w3.org/2000/svg" width="110" height="14" viewBox="0 0 110 14" fill="none">
                    <circle cx="7" cy="7" r="7" fill="#155DE9"/>
                    <circle cx="39" cy="7" r="6.5" stroke="#155DE9"/>
                    <circle cx="71" cy="7" r="6.5" stroke="#155DE9"/>
                    <circle cx="103" cy="7" r="6.5" stroke="#155DE9"/>
                </svg>
            </Circles>
        </Wrapper>
    )
}