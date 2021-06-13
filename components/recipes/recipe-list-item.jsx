import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Flex } from '../styled/flex';
import { Icon } from '../styled/icon';
import { Label, P2, Small } from '../styled/text';

const StyledRecipeListItem = styled(Flex).attrs({
  p: 'S',
  mt: 'S',
})`
  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.grey20};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 275px;
  position: relative;
  border-radius: 6px;
  overflow: hidden;

  .image {
    max-height: none !important;
    bottom: unset !important;
    height: unset !important;

    top: -50% !important;
  }
`;

export const RecipeListItem = ({ data }) => {
  return (
    <Link href={`/recipes/${data.slug}`}>
      <StyledRecipeListItem>
        <Flex width="100%" flexDirection="column">
          <ImageContainer>
            <Image
              className="image"
              src={data.heroSection.image.url}
              layout="fill"
            />
          </ImageContainer>
          <Small color="purble70" mt="M">
            {data.categoriesCollection.items.map(c => c.name).join(', ')}
          </Small>
          <Label>{data.name}</Label>
          <P2>{data.description}</P2>
          <Flex>
            <Flex alignItems="center" mr="M">
              <Icon type="schedule" size="1.6rem" color="green40" />
              <Small ml="S" color="green40">
                {data.cookTime} min
              </Small>
            </Flex>
            <Flex alignItems="center">
              <Icon type="leaderboard" size="1.6rem" color="green40" />
              <Small ml="S" color="green40">
                {data.difficultyLevel.name}
              </Small>
            </Flex>
          </Flex>
        </Flex>
      </StyledRecipeListItem>
    </Link>
  );
};
