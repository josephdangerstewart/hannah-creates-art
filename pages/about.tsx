import React from 'react';
import { Page } from '../components/page';
import { ContentHeader } from '../components/content-header';

const aboutContent = `
I am a visual artist based in Los Angeles, recent graduate from Biola University for a BFA in Design.
From being interested in illustrating my own stories and creatures, to falling in love with visual design
and language, I create art that strives to relate to other people. I specialize in art and spirituality,
studying how the two are congruent with each other in order to better understand the humans we are designed
to be.

[Resume](https://res.cloudinary.com/josephdangerstewart/image/upload/v1589003199/hannah-creates-art/hannahresume.pdf)

**CONTACT INFO**

[1-949-395-4868](tel:1-949-395-4868)

<hannah.r.mclaughlin.art@gmail.com>
`;

export default function About() {
	return (
		<Page>
			<ContentHeader
				title="Hi I'm Hannah!"
				description={aboutContent}
				color="accent1"
				imageUrl="https://res.cloudinary.com/josephdangerstewart/image/upload/v1588995401/hannah-creates-art/Profile_Picture.jpg"
				fillImage
			/>
		</Page>
	);
}
