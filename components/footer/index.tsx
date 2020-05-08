import React from 'react';
import {
	Container,
	LogoCircle,
	LogoCircleContainer,
	ContactLinksContainer,
	ContactLink,
} from './styled';
import {
	MailIcon,
	InstagramIcon,
	LinkedInIcon,
} from '../icons';

export const Footer: React.FC = () => {
	return (
		<Container>
			<LogoCircleContainer>
				<LogoCircle color="accent1" />
				<LogoCircle color="accent2" />
				<LogoCircle color="accent3" />
			</LogoCircleContainer>
			<ContactLinksContainer>
				<ContactLink color="accent1" href="mailto:hannah.mclaughlin.art@gmail.com" target="_blank" rel="noopener noreferrer nofollow">
					<MailIcon />
				</ContactLink>
				<ContactLink color="accent2" href="https://www.instagram.com/hannah.creates.art/" target="_blank" rel="noopener noreferrer nofollow">
					<InstagramIcon />
				</ContactLink>
				<ContactLink color="accent3" href="https://www.linkedin.com/in/hannah-mclaughlin-126b24143" target="_blank" rel="noopener noreferrer nofollow">
					<LinkedInIcon />
				</ContactLink>
			</ContactLinksContainer>
		</Container>
	);
};
