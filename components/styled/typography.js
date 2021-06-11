import styled, { css } from 'styled-components';

// Headers
export const H1Style = css`
  font-family: ${({ theme }) => theme.fonts.headers};
  font-weight: 400;
  font-size: 6.1rem;
  line-height: 9rem;
  color: ${({ theme }) => theme.colors.black};
`;
export const H1 = styled.h1`
  ${H1Style};
`;

export const H2Style = css`
  margin-top: ${({ theme }) => theme.space.M}px;
  margin-bottom: ${({ theme }) => theme.space.M}px;
  font-family: ${({ theme }) => theme.fonts.headers};
  font-weight: 400;
  font-size: 4.88rem;
  line-height: 6rem;
  color: ${({ theme }) => theme.colors.black};
`;
export const H2 = styled.h2`
  ${H2Style};
`;

export const H3Style = css`
  font-family: ${({ theme }) => theme.fonts.headers};
  font-weight: 400;
  font-size: 3.91rem;
  line-height: 6rem;
  color: ${({ theme }) => theme.colors.black};
`;
export const H3 = styled.h3`
  ${H3Style};
`;

export const H4Style = css`
  font-family: ${({ theme }) => theme.fonts.headers};
  font-weight: 400;
  font-size: 3.13rem;
  line-height: 6rem;
  color: ${({ theme }) => theme.colors.black};
`;
export const H4 = styled.h4`
  ${H4Style};
`;

export const H5Style = css`
  font-family: ${({ theme }) => theme.fonts.headers};
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.black};
  margin: ${({ theme }) => theme.space.M}px 0;
`;
export const H5 = styled.h5`
  ${H5Style};
`;

export const H6Style = css`
  font-family: ${({ theme }) => theme.fonts.headers};
  font-weight: 600;
  font-size: 2rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.black};
  margin: ${({ theme }) => theme.space.M}px 0;
`;
export const H6 = styled.h6`
  ${H6Style};
`;

// Paragraphs

export const P1Style = css`
  font-family: ${({ theme }) => theme.fonts.paragraphs};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.black};
`;
export const P1 = styled.p`
  ${P1Style};
`;

export const P2Style = css`
  font-family: ${({ theme }) => theme.fonts.paragraphs};
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.black};
`;
export const P2 = styled.p`
  ${P2Style};
`;

export const SmallStyle = css`
  font-family: ${({ theme }) => theme.fonts.paragraphs};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.black};
`;
export const Small = styled.div`
  ${SmallStyle};
`;

export const LabelStyle = css`
  font-family: ${({ theme }) => theme.fonts.paragraphs};
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 3rem;
  letter-spacing: 0.08rem;
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
`;
export const Label = styled.div`
  ${LabelStyle};
`;
