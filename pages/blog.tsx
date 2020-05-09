import React from 'react';
import { Page } from '../components/page';
import { ContentHeader } from '../components/content-header';

export default function Blog() {
	return (
		<Page>
			<ContentHeader
				title="Here's my Blog!"
				description="Coming soon!"
				imageUrl="https://res.cloudinary.com/josephdangerstewart/image/upload/v1588995401/hannah-creates-art/Profile_Picture.jpg"
				color="accent2"
				fillImage
			/>
		</Page>
	);
}
