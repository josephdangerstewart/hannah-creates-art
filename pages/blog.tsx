import React from 'react';
import { Page } from '../components/page';
import { ContentLayout } from '../components/content-layout';

export default function Blog() {
	return (
		<Page>
			<ContentLayout
				title="Here's my Blog!"
				description="Coming soon!"
				imageUrl="https://res.cloudinary.com/josephdangerstewart/image/upload/c_scale,w_400/v1594151916/hannah-creates-art/Blog_picture.jpg"
				color="accent2"
				fillImage
			/>
		</Page>
	);
}
