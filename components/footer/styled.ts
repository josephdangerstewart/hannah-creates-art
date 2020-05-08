import { styled, Theme } from '../theme';

export const Container = styled.div`
	background-color: ${({ theme }) => theme.color.primary};
	padding: 20px 35px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	@media ${({ theme }) => theme.breakpoints.mobile} {
		flex-direction: column-reverse;
		align-items: center;
	}
`;

export const LogoCircle = styled.div<{ color: keyof Theme['color' ] }>`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background-color: ${({ color, theme }) => theme.color[color]};
	margin-right: 8px;
	&:last-child {
		margin-right: 0;
	}
`;

export const LogoCircleContainer = styled.div`
	display: flex;
`;

export const ContactLink = styled.a<{ color: keyof Theme['color'] }>`
	cursor: pointer;
	margin-right: 8px;

	&:last-child {
		margin-right: 0;
	}

	& svg path {
		fill: ${({ color, theme }) => theme.color[color]};
		${({ theme }) => theme.generateTransition('fill')}
	}

	&:hover svg path {
		fill: ${({ color, theme }) => theme.hover(theme.color[color])};
	}
`;

export const ContactLinksContainer = styled.div`
	display: flex;

	@media ${({ theme }) => theme.breakpoints.mobile} {
		margin-bottom: 8px;
	}
`;
