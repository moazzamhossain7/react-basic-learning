import nerdImage from '../assets/images/illustration.png';
import Button from './Button';
import { StyledTitle } from './styled/Custom.styles';
import { H1, Image, P, Tag } from './styled/Elements.styles';
import { ButtonContainer, CardContainer, ContentContainer } from './styled/StyledContainer.styles';

export default function Card() {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag>EXCLUSIVE</Tag>
                <H1>
                    <StyledTitle color="#fff" text="React Styled Components" />
                </H1>
                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </P>
                <ButtonContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </ButtonContainer>
            </ContentContainer>
            <Image src={nerdImage} altTag="Nerd" width="300px" />
        </CardContainer>
    );
}
