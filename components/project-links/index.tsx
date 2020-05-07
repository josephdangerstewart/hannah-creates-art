import React from 'react';
import {
	Container,
	LinkImageContainer,
	LinkImage,
	LinkOuterCircle,
	FlexLinkWrapper,
} from './styled';
import { IProject } from '../../types/IProject';

interface ProjectLinksProps {
	projects: IProject[];
}

export const ProjectLinks: React.FC<ProjectLinksProps> = ({ projects }) => {
	return (
		<Container>
			{projects.map(p => (
				<FlexLinkWrapper key={p.href}>
					<LinkOuterCircle>
						<LinkImageContainer>
							<LinkImage
								imageUrl={p.thumbnail}
							/>
						</LinkImageContainer>
					</LinkOuterCircle>
				</FlexLinkWrapper>
			))}
		</Container>
	);
};
