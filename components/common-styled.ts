import { styled, Theme } from './theme';
import { css } from 'styled-components';

export const Title = styled.h1<{ color?: keyof Theme['color'] }>`
	text-transform: uppercase;
	margin-top: 0;
	text-align: center;
	margin-bottom: 10px;
	font: 35px ${({ theme }) => theme.font.headerFont};
	color: ${({ theme, color }) => color ? theme.color[color] : theme.color.accent2};
`;

const linkStyles = css`
	font: 16px ${({ theme }) => theme.font.bodyFont};
	color: ${({ theme }) => theme.color.primary};
	text-decoration: underline;

	&:hover {
		color: ${({ theme }) => theme.hover(theme.color.primary)}
	}
`;

export const BodyText = styled.p`
	font: 16px ${({ theme }) => theme.font.bodyFont};
	color: ${({ theme }) => theme.color.primary};
	margin: 0;

	& a {
		${linkStyles}
	}
`;

export const A = styled.a`
	${linkStyles}
`;
