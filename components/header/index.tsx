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
				<LogoText color="yellow">hannah</LogoText>
				<LogoText color="lightOrange">creates</LogoText>
				<LogoText color="darkOrange">art</LogoText>
			</div>
			<LinkContainer>
				<Link color="yellow">about</Link>
				<Link color="lightOrange">blog</Link>
				<Link color="darkOrange">works</Link>
			</LinkContainer>
		</Container>
	);
};
