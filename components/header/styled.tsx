import React from 'react';
import NextLink from 'next/link';
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

	${LogoLink}:hover span & {
		color: ${({ color, theme }) => theme.hover(theme.color[color])};
	}
`;

const LinkText = styled.span`
	font: 18px ${({ theme }) => theme.font.bodyFont};
	color: ${({ theme }) => theme.color.white};
	text-decoration: none !important;
`;

const LinkWrapper = styled.div<{ color: keyof Theme['color'] }>`
	width: 68px;
	height: 68px;
	background-color: ${({ theme, color }) => theme.color[color]};
	border-radius: 50%;
	${({ theme }) => theme.generateTransition('background-color')}

	margin-right: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme, color }) => theme.hover(theme.color[color])}
	}

	&:last-child {
		margin-right: 0;
	}
`;

const StyledLink = styled.a`
	text-decoration: none;
`;

export const Link: React.FC<{ color: keyof Theme['color']; href?: string }> = ({
	color,
	children,
	href,
}) => href ? (
	<NextLink href={href}>
		<StyledLink>
			<LinkWrapper color={color}>
				<LinkText>{children}</LinkText>
			</LinkWrapper>
		</StyledLink>
	</NextLink>
) : (
	<LinkWrapper color={color}>
		<LinkText>{children}</LinkText>
	</LinkWrapper>
);

export const LinkContainer = styled.div`
	display: flex;
`;
