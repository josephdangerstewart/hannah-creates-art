import { IProject } from '../types/IProject';

function generateSiteMapForProjects(projects: IProject[], domain: string) {
	let lastProject = 0;
	let lastProjectDateString = '';
	let projectsXml = '';

	for (const project of projects) {
		const projectDate = Date.parse(project.lastModified ?? project.createdAt);
		if (projectDate > lastProject) {
			lastProject = projectDate;
			lastProjectDateString = project.lastModified ?? project.createdAt;
		}

		projectsXml += `
			<url>
				<loc>${domain}${project.href}</loc>
				<lastmod>${project.lastModified ?? project.createdAt}</lastmod>
			</url>
		`;
	}

	return {
		lastProject: lastProjectDateString,
		projectsXml,
	};
}

export function generateSitemap(projects: IProject[], domain: string) {
	const { lastProject, projectsXml } = generateSiteMapForProjects(projects, domain);

	return `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			<url>
				<loc>${domain}/</loc>
				<lastmod>${lastProject}</lastmod>
				<priority>1.00</priority>
			</url>
			<url>
				<loc>${domain}/about</loc>
				<priority>0.5</priority>
			</url>
			${projectsXml}
		</urlset>`;
}
