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
				description={'I am a visual artist based in Los Angeles, recent graduate from Biola University for a BFA in Design. From being interested in illustrating my own stories and creatures, to falling in love with visual design and language, I create art that strives to relate to other people. I specialize in art and spirituality, studying how the two are congruent with each other in order to better understand the humans we are designed to be.\n\n[Resume](https://res.cloudinary.com/josephdangerstewart/image/upload/v1589003199/hannah-creates-art/hannahresume.pdf)'}
				color="accent1"
				imageUrl="https://res.cloudinary.com/josephdangerstewart/image/upload/v1588995401/hannah-creates-art/Profile_Picture.jpg"
				fillImage
			/>
			<Container>
				<BodyText>
					<p>CONTACT INFO</p>
					<p>
						<A href="tel:1-949-395-4868" target="_blank" rel="noopener noreferrer nofollow">949.395.4868</A>
						<br/>
						<A href="mailto:hannah.mclaughlin.art@gmail.com" target="_blank" rel="noopener noreferrer nofollow">hannah.mclaughlin.art@gmail.com</A>
						<br/>
					</p>
				</BodyText>
			</Container>
		</Page>
	);
}
