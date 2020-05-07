import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { lighten } from 'polished';

export const defaultTheme = {
	color: {
		yellow: '#F8DE6F',
		lightOrange: '#F2A765',
		darkOrange: '#D87152',
		cyan: '#56A1AE',
		white: '#FDFFF7',
	},
	font: {
		bodyFont: 'Nunito',
		headerFont: 'Nunito',
	},
	hover: lighten(0.1),
	transitionDuration: '0.6s',
	generateTransition: (property: string) => `transition: ${property} 0.6s;`
};

export type Theme = typeof defaultTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
