import { NextApiRequest, NextApiResponse } from 'next';
import { getServerOnlyProjectRepository } from '../../api/server-util';
import { generateSitemap } from '../../sitemap';

const DOMAIN = 'https://hannahcreatesart.com';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const repository = getServerOnlyProjectRepository();
	const projects = await repository.getProjects();

	res.setHeader('Content-Type', 'text/xml');
	res.write(generateSitemap(projects, DOMAIN));
	res.end();
};
