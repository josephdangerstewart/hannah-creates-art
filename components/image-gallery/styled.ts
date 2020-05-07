import { styled } from '../theme';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 60px;
`;

export const ImageWrapper = styled.div`
	flex: 0 0 50%;
	padding: 18px;
`;

export const Image = styled.img`
	width: 100%;
	object-fit: contain;
	cursor: pointer;
`;
