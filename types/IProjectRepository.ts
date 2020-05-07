import { IProject } from './IProject';

export interface IProjectRepository {
	getProjects(): Promise<IProject[]>;
	getProject(href: string): Promise<IProject>;
}
