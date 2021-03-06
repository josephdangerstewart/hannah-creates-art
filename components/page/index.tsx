import React, { useEffect } from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../theme';
import { Header } from '../header';
import { Footer } from '../footer';
import { initGA, logPageView } from './ga';

export interface PageProps {
	padding?: string;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
`;

const Content = styled.div<PageProps>`
	${({ padding }) => padding ? `padding: ${padding};` : ''};
	flex-grow: 1;
`;

export const Page: React.FC<PageProps> = ({ children, padding }) => {
	useEffect(() => {
		if (!(window as any).GA_INITIALIZED) {
			initGA();
			(window as any).GA_INITIALIZED = true;
		}

		logPageView();
	}, []);

	return (
		<>
			<Head>
				<title>Hannah Creates Art</title>
				<link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet"></link>
			</Head>
			<style jsx global>{`
				* {
					box-sizing: border-box;
					-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
					-webkit-overflow-scrolling: touch;
				}

				html, body, #__next {
					height: 100%;
					padding: 0;
					margin: 0;
				}

				body {
					background-color: ${defaultTheme.color.pureWhite};
				}
			`}</style>
			<ThemeProvider theme={defaultTheme}>
				<Container>
					<Header />
					<Content padding={padding}>
						{children}
					</Content>
					<Footer />
				</Container>
			</ThemeProvider>
		</>
	);
};
