import { styled } from '../theme';

type Position = "left" | "right";
export const ContentContainer = styled.div<{ position: Position; maxWidth: number }>`
	max-width: ${({ maxWidth }) => maxWidth}px;
	width: 100%;
	${({ position }) => position === 'left' ? 'margin-left: auto;' : 'margin-right: auto;'}

	@media ${({ theme }) => theme.breakpoints.mobile} {
		margin: auto;
	}
`;

export const ColumnContent = styled.div<{ desktopPadding?: string; mobilePadding?: string }>`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	${({ desktopPadding }) => desktopPadding ? `padding: ${desktopPadding};` : ''}

	@media ${({ theme }) => theme.breakpoints.mobile} {
		padding: ${({ mobilePadding }) => mobilePadding ?? '0'};
	}
`;
