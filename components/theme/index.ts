import baseStyled, { ThemedStyledInterface } from 'styled-components';

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
	}
};

export type Theme = typeof defaultTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
