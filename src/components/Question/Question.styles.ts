import {
  styled,
  Stack,
  Button,
  buttonClasses,
  Typography,
  Theme
} from '@mui/material'

interface DifficultySubititleProps {
  difficulty: string
}

interface QuestionContainerProps {
  readOnly: boolean
}

const difficultySubititleColors = {
  easy: (theme: Theme) => theme.palette.success.main,
  medium: (theme: Theme) => theme.palette.warning.main,
  hard: (theme: Theme) => theme.palette.error.main
}

export const QuestionToolbarButton = styled(Button)`
  background: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.colors.white[50]};
  padding: 6px 15px;
  height: 37px;
  box-shadow: 0;

  &.${buttonClasses.contained} {
    box-shadow: none;
  }

  &:hover {
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.colors.white[50]};
    filter: brightness(0.8);
  }
`

export const QuestionContainer = styled(Stack)<QuestionContainerProps>`
  display: flex;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up('md')} {
    width: ${({ readOnly }) => (readOnly ? 'auto' : '800px')};
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 340px;
  }

  height: 400px;
`

export const DifficultySubtitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'difficulty'
})<DifficultySubititleProps>(({ theme, difficulty }) => ({
  '& > span': {
    color:
      difficultySubititleColors[
        difficulty as keyof typeof difficultySubititleColors
      ](theme)
  }
}))
