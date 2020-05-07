import React from 'react';
import { styled, Theme } from '../theme';

export const Container = styled.div`
	background-color: #56A1AE;
	padding: 25px 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const LogoLink = styled.a`
	text-decoration: none;
	cursor: pointer;
`;

export const LogoText = styled.span<{ color: keyof Theme['color'] }>`
	font: 35px ${({ theme }) => theme.font.headerFont};
	color: ${({ theme, color }) => theme.color[color]};
	${({ theme }) => theme.generateTransition('color')}

	${LogoLink}:hover & {
		color: ${({ color, theme }) => theme.hover(theme.color[color])};
	}
`;

const LinkText = styled.a`
	font: 18px ${({ theme }) => theme.font.bodyFont};
	color: ${({ theme }) => theme.color.white};
`;

const LinkWrapper = styled.div<{ color: keyof Theme['color'] }>`
	width: 68px;
	height: 68px;
	background-color: ${({ theme, color }) => theme.color[color]};
	border-radius: 50%;

	margin-right: 10px;
	display: flex;
	align-items: center;
	justify-content: center;

	&:last-child {
		margin-right: 0;
	}
`;

export const Link: React.FC<{ color: keyof Theme['color']; href?: string }> = ({
	color,
	children,
	href,
}) => (
	<LinkWrapper color={color}>
		<LinkText href={href}>{children}</LinkText>
	</LinkWrapper>
);

export const LinkContainer = styled.div`
	display: flex;
`;
