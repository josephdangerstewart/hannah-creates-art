import { styled } from '../theme';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
	max-width: 1600px;
`;

export const LinkOuterCircle = styled.div`
	width: 100%;
	padding-top: 100%;
	flex-shrink: 0;
	position: relative;
	border-radius: 50%;
	cursor: pointer;
	${({ theme }) => theme.generateTransition('background-color')}
`;

export const FlexLinkWrapper = styled.div`
	flex: 0 0 33.33333333%;
	padding: 50px;

	&:nth-child(3n+1) {
		${LinkOuterCircle} {
			background-color: ${({ theme }) => theme.color.yellow};

			&:hover {
				background-color: ${({ theme }) => theme.hover(theme.color.yellow)}
			}
		}
	}

	&:nth-child(3n+2) {
		${LinkOuterCircle} {
			background-color: ${({ theme }) => theme.color.darkOrange};

			&:hover {
				background-color: ${({ theme }) => theme.hover(theme.color.darkOrange)}
			}
		}
	}

	&:nth-child(3n) {
		${LinkOuterCircle} {
			background-color: ${({ theme }) => theme.color.lightOrange};

			&:hover {
				background-color: ${({ theme }) => theme.hover(theme.color.lightOrange)}
			}
		}
	}
`;

export const LinkImageContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const LinkImage = styled.div<{ imageUrl: string }>`
	width: 60%;
	height: 60%;
	border-radius: 50%;
	background-image: url(${({ imageUrl }) => imageUrl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
`;
