import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Theme } from '../theme';
import { CircleImage } from '../circle-image';
import { Title, BodyText } from '../common-styled';
import { ColumnLayout, Column } from '../column-layout';
import { ContentContainer, ColumnContent } from './styled';

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
	<ColumnLayout margin="30px 0 60px">
		<Column>
			<ColumnContent desktopPadding="0 60px 0 0" mobilePadding="0 15px">
				<ContentContainer position="left" maxWidth={350}>
					<CircleImage
						imageUrl={imageUrl}
						color={color}
						fillImage={fillImage}
					/>
				</ContentContainer>
			</ColumnContent>
		</Column>
		<Column>
			<ColumnContent mobilePadding="30px 15px 0">
				<ContentContainer position="right" maxWidth={400}>
					<Title color={color}>{title}</Title>
					<BodyText>
						<ReactMarkdown
							source={description}
							linkTarget="_blank"
						/>
					</BodyText>
				</ContentContainer>
			</ColumnContent>
		</Column>
	</ColumnLayout>
);
