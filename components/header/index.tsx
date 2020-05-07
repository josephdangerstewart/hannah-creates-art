import React from 'react';
import {
	Container,
	LogoText,
	Link,
	LinkContainer,
} from './styled';

export const Header: React.FC = () => {
	return (
		<Container>
			<div>
				<LogoText color="accent1">hannah</LogoText>
				<LogoText color="accent2">creates</LogoText>
				<LogoText color="accent3">art</LogoText>
			</div>
			<LinkContainer>
				<Link color="accent1">about</Link>
				<Link color="accent2">blog</Link>
				<Link color="accent3">works</Link>
			</LinkContainer>
		</Container>
	);
};
