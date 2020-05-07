import React from 'react';
import { Page } from '../../components/page';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getServerOnlyProjectRepository } from '../../api/server-util';
import { IProject } from '../../types/IProject';
import { ContentHeader } from '../../components/content-header';

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { project: id } = params;

	const repository = getServerOnlyProjectRepository();

	const project = await repository.getProject(id as string);

	return {
		props: { project },
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const repository = getServerOnlyProjectRepository();
	const projects = await repository.getProjects();

	return {
		paths: projects.map(p => ({ params: { project: p.id }})),
		fallback: false,
	};
};

export default function ProjectPage({ project }: { project: IProject }) {
	if (!project) {
		return null;
	}

	return (
		<Page>
			<ContentHeader
				title={project.name}
				imageUrl={project.thumbnail}
				description={project.projectDescription}
				color="accent2"
			/>
		</Page>
	);
}
