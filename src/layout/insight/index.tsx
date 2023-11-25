import React from 'react';
import { 
    Wrapper ,
    InsightTitle,
    InsightContent,
    Description,
    Image,
    Title,
    Text,
    List,
    ListGroup,
    ListImg,
    ListImgTitle,
    ImgTitle,
    ListDescrip,
    ListTitle,
    Button
} from './index.styled';
export const Insight: React.FC = () => {
    return (
        <Wrapper>
            <InsightTitle>
                Latest <span>Insights</span>
            </InsightTitle>
            <InsightContent>
                <Description>
                    <Image>
                        <img src={require('../../images/Rectangle 4752.png')}/>
                    </Image>
                    <ImgTitle>
                        Taram.ORG
                    </ImgTitle>
                    <Title>
                        Fueling Maritime Decarbonization through Marine Biofuels
                    </Title>
                    <Text>
                        The global maritime sector is responsible for nearly 3% of global greenhouse gas (GHG) emissions according to the International Maritime Organization (IMO), a UN regulatory body that oversees global...
                    </Text>

                </Description>

                <ListGroup>
                    <List>
                        <ListImg>
                            <img src={require('../../images/Rectangle 4694.png')}/>
                        </ListImg>
                        <ListDescrip>
                            <ListImgTitle>
                                Economic Insights,
                            </ListImgTitle>
                            <ListTitle>
                                The Mighty U.S. Consumer - Taram Weekly Economic Report
                            </ListTitle>
                            <Button>
                                Read More 
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8.4043 1.6543L14.7499 7.99995L8.4043 14.3456" stroke="#155DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.7499 8L1.25 8" stroke="#155DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Button>
                        </ListDescrip>
                    </List>
                    <List>
                        <ListImg>
                            <img src={require('../../images/Rectangle 4753.png')}/>
                        </ListImg>
                        <ListDescrip>
                            <ListImgTitle>
                                Economic Insights,
                            </ListImgTitle>
                            <ListTitle>
                                The Mighty U.S. Consumer - Taram Weekly Economic Report
                            </ListTitle>
                            <Button>
                                Read More 
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8.4043 1.6543L14.7499 7.99995L8.4043 14.3456" stroke="#155DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.7499 8L1.25 8" stroke="#155DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Button>
                        </ListDescrip>
                    </List>
                    <List>
                        <ListImg>
                            <img src={require('../../images/Rectangle 4754.png')}/>
                        </ListImg>
                        <ListDescrip>
                            <ListImgTitle>
                                Economic Insights,
                            </ListImgTitle>
                            <ListTitle>
                                The Mighty U.S. Consumer - Taram Weekly Economic Report
                            </ListTitle>
                            <Button>
                                Read More 
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8.4043 1.6543L14.7499 7.99995L8.4043 14.3456" stroke="#155DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.7499 8L1.25 8" stroke="#155DE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Button>
                        </ListDescrip>
                    </List>
                </ListGroup>
            </InsightContent>
        </Wrapper>
    )
};