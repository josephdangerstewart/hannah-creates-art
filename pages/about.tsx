import React from 'react';
import { Page } from '../components/page';
import { ContentHeader } from '../components/content-header';
import { BodyText, A } from '../components/common-styled';
import { styled } from '../components/theme';

const Container = styled.div`
	max-width: 800px;
	padding: 0 60px;
	margin: auto;
	word-break: break-all;

	@media ${({ theme }) => theme.breakpoints.mobile} {
		padding: 0 15px;
	}
`;

export default function About() {
	return (
		<Page>
			<ContentHeader
				title="Hi I'm Hannah!"
				description="Artist Statement goes here! words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words Link to a Resume!"
				color="accent1"
				imageUrl="https://via.placeholder.com/200?text=This%20is%20a%20photo"
			/>
			<Container>
				<BodyText>
					<p>CONTACT INFO</p>
					<p>
						<A href="tel:1-949-395-4868" target="_blank" rel="noopener noreferrer nofollow">949.395.4868</A>
						<br/>
						<A href="mailto:hannah.mclaughlin.art@gmail.com" target="_blank" rel="noopener noreferrer nofollow">hannah.mclaughlin.art@gmail.com</A>
					</p>
				</BodyText>
			</Container>
		</Page>
	);
}
