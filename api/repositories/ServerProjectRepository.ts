import fs from 'fs';
import util from 'util';
import path from 'path';
import yaml from 'yaml';
import { IProjectRepository } from '../../types/IProjectRepository';
import { IProject } from '../../types/IProject';

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const exists = util.promisify(fs.exists);

const ID_REGEX = /^[a-zA-Z-0-9]*$/g;

export class ServerProjectRepository implements IProjectRepository {
	private basePath = '';
	
	constructor(basePath) {
		this.basePath = path.resolve(basePath);
	}
	
	public async getProjects(): Promise<IProject[]> {
		const files = await readdir(this.basePath);
		const readFilePromises = files.map(async fileName => ({
			content: await readFile(path.join(this.basePath, fileName), 'utf8'),
			id: fileName.split('.')[0],
		}));

		const fileContents = await Promise.all(readFilePromises);

		const parsedProjects = fileContents
			.map(({ content, id }) => {
				const parsedContent = yaml.parse(content);

				if (!parsedContent) {
					return null;
				}

				return {
					...parsedContent,
					href: `/projects/${id}`,
					id,
				};
			})
			.filter(Boolean);

		return parsedProjects as IProject[];
	}

	public async getProject(id: string): Promise<IProject> {
		if (!ID_REGEX.test(id)) {
			return null;
		}

		const filePath = path.join(this.basePath, `${id}.yaml`);
		if (!(await exists(filePath))) {
			return null;
		}

		const parsedContents = yaml.parse(await readFile(filePath, 'utf8'));
		if (!parsedContents) {
			return null;
		}

		return {
			...parsedContents,
			id,
			href: `/projects/${id}`,
		} as IProject;
	}
}
