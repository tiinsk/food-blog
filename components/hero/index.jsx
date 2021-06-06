import Image from 'next/image';
import styled from 'styled-components';

import { Box } from '../styled/box';
import { H1, P1 } from '../styled/text';

const HeroDefaultHeight = '120vh';

const StyledHero = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  height: ${({ height }) => height || HeroDefaultHeight};
  width: 100%;

  display: flex;
  align-items: center;
`;

const ImageGradient = styled.div`
  height: ${({ height }) => height || HeroDefaultHeight};
  width: 100%;
  background: linear-gradient(0, rgba(0, 0, 0, 0.8) 16%, rgba(0, 0, 0, 0) 100%);
  position: absolute;
`;

const HeroContent = styled(Box).attrs({
  px: 'L',
})`
  position: absolute;
  width: ${({ theme }) => theme.sizes.pageMaxWidth};
  max-width: 90%;
`;

export const Hero = ({ data, height, children }) => {
  return (
    <StyledHero>
      <ImageWrapper height={height}>
        <Image
          src={data.image.url}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <ImageGradient height={height} />
        <HeroContent>
          {data.title && <H1 color="white">{data.title}</H1>}
          {data.subtitle && (
            <P1
              color="white"
              maxWidth="contentSmallWidth"
              richText={data.subtitle.json}
            />
          )}
          {children}
        </HeroContent>
      </ImageWrapper>
    </StyledHero>
  );
};
