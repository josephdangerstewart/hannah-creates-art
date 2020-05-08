import React from 'react';
import { Page } from '../components/page';
import { ContentHeader } from '../components/content-header';
import { BodyText } from '../components/common-styled';
import styled from 'styled-components';

const Container = styled.div`
	max-width: 800px;
	padding: 0 60px;
	margin: auto;
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
						949.395.4868
						<br/>
						hannah.mclaughlin.art@gmail.com
					</p>
				</BodyText>
			</Container>
		</Page>
	);
}
