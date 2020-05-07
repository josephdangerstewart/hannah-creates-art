import React from 'react';
import NextLink from 'next/link';
import {
	Container,
	LogoText,
	Link,
	LinkContainer,
	LogoLink,
} from './styled';

export const Header: React.FC = () => {
	return (
		<Container>
			<NextLink href="/">
				<LogoLink>
					<span>
						<LogoText color="accent1">hannah</LogoText>
						<LogoText color="accent2">creates</LogoText>
						<LogoText color="accent3">art</LogoText>
					</span>
				</LogoLink>
			</NextLink>
			<LinkContainer>
				<Link color="accent1">about</Link>
				<Link color="accent2">blog</Link>
				<Link color="accent3" href="/">works</Link>
			</LinkContainer>
		</Container>
	);
};
