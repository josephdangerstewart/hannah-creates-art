import { styled, Theme } from '../theme';

export const Container = styled.div`
	background-color: ${({ theme }) => theme.color.primary};
	padding: 20px 35px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const LogoCircle = styled.div<{ color: keyof Theme['color' ] }>`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	margin-right: 8px;
	background-color: ${({ color, theme }) => theme.color[color]};
`;

export const LogoCircleContainer = styled.div`
	display: flex;
`;

export const ContactLinksContainer = styled.div`
	display: flex;

	& svg {
		margin-left: 8px;
	}
`;

export const ContactLink = styled.a<{ color: keyof Theme['color'] }>`
	cursor: pointer;

	& svg path {
		fill: ${({ color, theme }) => theme.color[color]};
		${({ theme }) => theme.generateTransition('fill')}
	}

	&:hover svg path {
		fill: ${({ color, theme }) => theme.hover(theme.color[color])};
	}
`;
