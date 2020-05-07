import path from 'path';
import { IProjectRepository } from '../types/IProjectRepository';
import { ServerProjectRepository } from './repositories/ServerProjectRepository';

const baseProjectsPath = path.join('./', 'content', 'projects');

export function getServerOnlyProjectRepository(): IProjectRepository {
	return new ServerProjectRepository(baseProjectsPath);
}
