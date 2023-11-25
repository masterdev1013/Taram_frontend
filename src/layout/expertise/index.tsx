import React from 'react';
import { Wrapper, Title , Image, Schedule, ScheduleTitle, Text } from './index.styled';
import { Button } from '../../components/button';
export const Expertise: React.FC = () => {
    return (
        <Wrapper>
            <Title>
                Global Reach, Local On-the-Ground <span>Expertise</span>
            </Title>

            <Image>
                <img src={require('../../images/Rectangle 4757.png')}/>
            </Image>

            <Schedule>
                <ScheduleTitle>
                    Put Us to Work as Your Global Logistics Platform
                </ScheduleTitle>
                <Text>
                    Schedule a call to learn how our platform delivers end-to-end results.
                </Text>

                <Button 
                    children='Sign Up Now ->'
                    fontSize='16px'
                    fontColor='#155DE9'
                    btnColor='#fff'
                    borderColor='#fff'
                />
            </Schedule>
        </Wrapper>
    )
};