import React from 'react';
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
}

export const ContentHeader: React.FC<ContentHeaderProps> = ({
	title,
	description,
	imageUrl,
	color,
}) => (
	<ColumnLayout margin="30px 0 60px">
		<Column>
			<ColumnContent padding="0 60px 0 0">
				<ContentContainer position="left" maxWidth={350}>
					<CircleImage
						imageUrl={imageUrl}
						color={color}
					/>
				</ContentContainer>
			</ColumnContent>
		</Column>
		<Column>
			<ColumnContent>
				<ContentContainer position="right" maxWidth={400}>
					<Title color={color}>{title}</Title>
					<BodyText>{description}</BodyText>
				</ContentContainer>
			</ColumnContent>
		</Column>
	</ColumnLayout>
);
