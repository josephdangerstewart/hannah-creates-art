import React from 'react';
import Link from 'next/link';
import {
	Container,
	FlexLinkWrapper,
	StyledCircleImage,
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
					<Link href={p.href}>
						<a>
							<StyledCircleImage
								imageUrl={p.thumbnail}
							/>
						</a>
					</Link>
				</FlexLinkWrapper>
			))}
		</Container>
	);
};
