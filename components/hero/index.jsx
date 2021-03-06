import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { Box } from '../styled/box';
import { Flex } from '../styled/flex';
import { Icon } from '../styled/icon';
import { H1, Label, RichText } from '../styled/text';

const HeroDefaultHeight = '110vh';

const heroGradientVariants = variant({
  variants: {
    default: {
      background:
        'linear-gradient(0, rgba(0, 0, 0, 0.8) 16%, rgba(0, 0, 0, 0) 100%)',
    },
    colored: {
      bg: 'purble100',
      opacity: 0.25,
    },
  },
});

const StyledHero = styled.div`
  height: ${({ height }) => height || HeroDefaultHeight};
  position: relative;
`;

const ImageWrapper = styled.div`
  position: fixed;

  height: ${({ height }) => height || HeroDefaultHeight};
  width: 100%;

  display: flex;
  align-items: center;
  .image {
    max-height: none !important;
    bottom: unset !important;
    height: unset !important;

    top: -40% !important;
    ${({ theme }) => theme.mediaQueries.tablet} {
      top: initial !important;
    }
  }
`;

const ImageGradient = styled.div`
  height: ${({ height }) => height || HeroDefaultHeight};
  width: 100%;
  position: absolute;
  ${heroGradientVariants};
`;

const HomeLink = styled(Box).attrs({
  mt: 'M',
  ml: 'M',
})`
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  cursor: pointer;
`;

const ContentWrapper = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const HeroContent = styled(Box).attrs({
  px: 'L',
})`
  position: absolute;
  width: ${({ theme }) => theme.sizes.pageMaxWidth};
  max-width: 90%;
`;

export const Hero = ({
  data,
  height,
  children,
  variant = 'default',
  showHomeLink = false,
  ...props
}) => {
  return (
    <StyledHero height={height}>
      <ImageWrapper height={height}>
        <Image
          className="image"
          src={`${data.image.url}?w=2000&fm=jpg&fl=progressive`}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <ImageGradient variant={variant} height={height} />
      </ImageWrapper>
      <ContentWrapper>
        {showHomeLink && (
          <HomeLink>
            <Link href="/">
              <div>
                <Flex alignItems="center">
                  <Icon color="white" type="arrow_back" mr="S" />
                  <Label color="white">Home</Label>
                </Flex>
              </div>
            </Link>
          </HomeLink>
        )}
        <HeroContent {...props}>
          {data.title && <H1 color="white">{data.title}</H1>}
          {data.subtitle && (
            <RichText
              color="white"
              maxWidth="contentSmallWidth"
              richText={data.subtitle.json}
            />
          )}
          {children}
        </HeroContent>
      </ContentWrapper>
    </StyledHero>
  );
};
