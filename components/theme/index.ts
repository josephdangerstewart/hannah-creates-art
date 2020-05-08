import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { lighten } from 'polished';

export const defaultTheme = {
	color: {
		accent1: '#F8DE6F',
		accent2: '#F2A765',
		accent3: '#D87152',
		primary: '#56A1AE',
		white: '#FDFFF7',
	},
	font: {
		bodyFont: 'Nunito',
		headerFont: 'Nunito',
	},
	breakpoints: {
		mobile: '(max-width: 630px)',
		desktop: '(min-width: 631px)',
	},
	hover: lighten(0.1),
	transitionDuration: '0.6s',
	generateTransition: (property: string) => `transition: ${property} 0.6s;`
};

export type Theme = typeof defaultTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
