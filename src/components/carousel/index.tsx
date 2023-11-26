import React from 'react';
import { 
    Wrapper, 
    Title ,
    Image,
    Img1, 
    ImgTitle,
    Button,
} from './index.styled';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
const items = [
    <div className="item" data-value="1">
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
    </div>,
    <div className="item" data-value="2">
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
    </div>,
    <div className="item" data-value="3">
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
    </div>,
    <div className="item" data-value="4">
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
    </div>,
    <div className="item" data-value="5">
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
    </div>,
];

export const Carousel: React.FC = () => {
    return (
        <Wrapper>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
            />
        </Wrapper>
    )
}