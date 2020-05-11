import { styled } from '../theme';
import { CircleImage } from '../circle-image';

export const StyledCircleImage = styled(CircleImage)`
	cursor: pointer;
	${({ theme }) => theme.generateTransition('background-color')}
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
	max-width: 1600px;

	@media ${({ theme }) => theme.breakpoints.mobile} {
		flex-direction: column;
		flex-wrap: nowrap;
	}
`;

export const FlexLinkWrapper = styled.div`
	flex: 0 0 33.33333333%;
	padding: 50px;
	perspective: 3000px;

	&:nth-child(3n+1) {
		${StyledCircleImage} {
			background-color: ${({ theme }) => theme.color.accent1};

			&:hover {
				background-color: ${({ theme }) => theme.hover(theme.color.accent1)}
			}
		}
	}

	&:nth-child(3n+2) {
		${StyledCircleImage} {
			background-color: ${({ theme }) => theme.color.accent3};

			&:hover {
				background-color: ${({ theme }) => theme.hover(theme.color.accent3)}
			}
		}
	}

	&:nth-child(3n) {
		${StyledCircleImage} {
			background-color: ${({ theme }) => theme.color.accent2};

			&:hover {
				background-color: ${({ theme }) => theme.hover(theme.color.accent2)}
			}
		}
	}

	@media ${({ theme }) => theme.breakpoints.mobile} {
		width: 100%;
		padding: 40px 10px;
		max-width: 300px;
		margin: auto;
	}

	@media ${({ theme }) => theme.breakpoints.desktop} {
		min-width: 300px;
	}
`;
