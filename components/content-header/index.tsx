import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Theme } from '../theme';
import { CircleImage } from '../circle-image';
import { Title, BodyText } from '../common-styled';
import { Container, ImageContainer } from './styled';

export interface ContentHeaderProps {
	title: string;
	description: string;
	imageUrl: string;
	color: keyof Theme['color'];
	fillImage?: boolean;
}

export const ContentHeader: React.FC<ContentHeaderProps> = ({
	title,
	description,
	imageUrl,
	color,
	fillImage,
}) => (
	<Container>
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
	</Container>
);
