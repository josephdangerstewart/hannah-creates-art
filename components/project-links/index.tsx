import React, { useCallback } from 'react';
import Link from 'next/link';
import { useTrail, useSpring, animated, config } from 'react-spring';
import {
	Container,
	FlexLinkWrapper,
	StyledCircleImage,
	ProjectTitleContainer,
	ProjectTitle,
} from './styled';
import { IProject } from '../../types/IProject';

const AnimatedProjectTitleContainer = animated(ProjectTitleContainer);

const ProjectImage: React.FC<{ project: IProject }> = ({ project }) => {
	const [vals, set] = useSpring(() => ({
		scale: 1,
		dropShadow: -200,
		titleOpacity: 0,
		config: config.stiff,
	}));

	const onMouseMove = useCallback(() => {
		set({ scale: 1.1, dropShadow: -25, titleOpacity: 1 });
	}, [set]);

	const onMouseLeave = useCallback(() => {
		set({ scale: 1, dropShadow: -200, titleOpacity: 0 });
	}, [set]);

	return (
		<animated.div
			style={{
				transform: vals.scale.interpolate(s => `scale(${s})`),
				boxShadow: vals.dropShadow.interpolate(v => `0px 30px 85px ${v}px rgba(0, 0, 0, 0.4)`),
				borderRadius: '50%',
				position: 'relative',
			}}
			onMouseMove={onMouseMove}
			onMouseLeave={onMouseLeave}
		>
			<AnimatedProjectTitleContainer
				style={{
					opacity: vals.titleOpacity,
				}}
			>
				<ProjectTitle>{project.name}</ProjectTitle>
			</AnimatedProjectTitleContainer>
			<StyledCircleImage
				imageUrl={project.thumbnail}
			/>
		</animated.div>
	);
};

interface ProjectLinksProps {
	projects: IProject[];
}

export const ProjectLinks: React.FC<ProjectLinksProps> = ({ projects }) => {
	const trail = useTrail(projects.length, {
		from: { opacity: 0, scale: 0.4 },
		opacity: 1,
		scale: 1,
		config: config.gentle,
		delay: 100,
	});

	return (
		<Container>
			{trail.map(({ scale, ...vals}, i) => (
				<FlexLinkWrapper key={projects[i].href}>
					<Link href="/projects/[project]" as={projects[i].href}>
						<a>
							<animated.div style={{
								transform: scale.interpolate(x => `scale(${x})`),
								...vals,
							}}>
								<ProjectImage
									project={projects[i]}
								/>
							</animated.div>
						</a>
					</Link>
				</FlexLinkWrapper>
			))}
		</Container>
	);
};
