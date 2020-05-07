import React from 'react';
import { Page } from '../components/page';
import { IProject } from '../types/IProject';
import { ProjectLinks } from '../components/project-links';

const projects: IProject[] = [
];

export default function Index() {
	return (
		<Page>
			<ProjectLinks
				projects={projects}
			/>
		</Page>
	);
}
