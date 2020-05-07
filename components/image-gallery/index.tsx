import React from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import {
	Container,
	ImageWrapper,
	Image,
} from './styled';

export interface ImageGalleryProps {
	images: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
	images,
}) => {
	return (
		<SimpleReactLightbox>
			<SRLWrapper>
				<Container>
					{images.map((src) => (
						<ImageWrapper key="src">
							<Image src={src} />
						</ImageWrapper>
					))}
				</Container>
			</SRLWrapper>
		</SimpleReactLightbox>
	);
};
