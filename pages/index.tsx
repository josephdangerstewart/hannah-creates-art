import React from 'react';
import { Page } from '../components/page';
import { IProject } from '../types/IProject';
import { ProjectLinks } from '../components/project-links';

const projects: IProject[] = [
	{
		thumbnail: 'https://via.placeholder.com/200?text=Image%201',
		href: '/',
	},
	{
		thumbnail: 'https://via.placeholder.com/200?text=Image%202',
		href: '/',
	},
	{
		thumbnail: 'https://via.placeholder.com/200?text=Image%203',
		href: '/',
	},
	{
		thumbnail: 'https://via.placeholder.com/200?text=Image%204',
		href: '/',
	},
	{
		thumbnail: 'https://via.placeholder.com/200?text=Image%205',
		href: '/',
	},
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
