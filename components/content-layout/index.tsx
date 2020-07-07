import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Theme } from '../theme';
import { CircleImage } from '../circle-image';
import { Title, BodyText } from '../common-styled';
import { Container, ImageContainer, HeaderContainer } from './styled';

export interface ContentLayoutProps {
	title: string;
	description: string;
	bodyContent?: string;
	imageUrl: string;
	color: keyof Theme['color'];
	fillImage?: boolean;
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({
	title,
	description,
	imageUrl,
	color,
	fillImage,
	bodyContent,
}) => (
	<Container>
		<HeaderContainer>
			<ImageContainer>
				<CircleImage
					imageUrl={imageUrl}
					color={color}
					fillImage={fillImage}
				/>
			</ImageContainer>
			<Title color={color}>{title}</Title>
			<BodyText>
				<ReactMarkdown
					source={description}
					linkTarget="_blank"
				/>
			</BodyText>
		</HeaderContainer>
		{bodyContent && (
			<BodyText>
				<ReactMarkdown
					source={bodyContent}
					linkTarget="_blank"
				/>
			</BodyText>
		)}
	</Container>
);
