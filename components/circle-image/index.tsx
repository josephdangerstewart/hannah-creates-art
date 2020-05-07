import React from 'react';
import { styled, Theme } from '../theme';

const ImageOuterCircle = styled.div<{ color?: keyof Theme['color'] }>`
	width: 100%;
	padding-top: 100%;
	flex-shrink: 0;
	position: relative;
	border-radius: 50%;
	${({ color, theme }) => color ? `background-color: ${theme.color[color]};` : ''}
`;

const ImageContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Image = styled.div<{ imageUrl: string }>`
	width: 80%;
	height: 80%;
	border-radius: 50%;
	background-image: url(${({ imageUrl }) => imageUrl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
`;

export interface CircleImageProps {
	imageUrl: string;
	color?: keyof Theme['color'];
	className?: string;
}

export const CircleImage: React.FC<CircleImageProps> = ({
	imageUrl,
	color,
	className,
}) => (
	<ImageOuterCircle color={color} className={className}>
		<ImageContainer>
			<Image imageUrl={imageUrl} />
		</ImageContainer>
	</ImageOuterCircle>
);
