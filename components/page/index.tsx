import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../theme';
import { Header } from '../header';

export const Page: React.FC = ({ children }) => {
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
			`}</style>
			<ThemeProvider theme={defaultTheme}>
				<Header />
				{children}
			</ThemeProvider>
		</>
	);
};
