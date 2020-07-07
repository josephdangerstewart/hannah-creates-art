import { styled } from '../theme';

export const HeaderContainer = styled.div`
	&::after {
		content: '';
		display: block;
		clear: both;
	}
`;

export const Container = styled.div`
	max-width: 900px;
	padding: 0 30px;
	margin: auto;
	margin-top: 30px;
	margin-bottom: 30px;
`;

export const ImageContainer = styled.div`
	float: left;
	min-width: 300px;
	margin-right: 30px;
	margin-bottom: 4px;

	@media ${({ theme }) => theme.breakpoints.mobile} {
		float: none;
		display: block;
		margin: auto;
		margin-bottom: 30px;
		margin-right: 0;
		min-width: 0;
	}
`;
