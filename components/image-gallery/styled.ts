import { styled } from '../theme';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 60px;

	@media ${({ theme }) => theme.breakpoints.mobile} {
		flex-direction: column;
		margin: auto;
	}
`;

export const ImageWrapper = styled.div`
	flex: 0 0 50%;
	padding: 18px;

	@media ${({ theme }) => theme.breakpoints.mobile} {
		width: 100%;
		margin: auto;
		flex: 0 0 100%;
	}
`;

export const Image = styled.img`
	width: 100%;
	object-fit: contain;
	cursor: pointer;
`;
