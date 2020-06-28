import React from 'react';
import { Page } from '../components/page';
import { ProjectLinks } from '../components/project-links';
import { GetStaticProps } from 'next';
import { getServerOnlyProjectRepository } from '../api/server-util';

export const getStaticProps: GetStaticProps = async () => {
	const repository = getServerOnlyProjectRepository();
	const projects = (await repository.getProjects()).filter(x => !x.isHidden);
	return {
		props: { projects },
	};
};

export default function Index({ projects }) {
	return (
		<Page>
			<ProjectLinks
				projects={projects}
			/>
		</Page>
	);
}
