import {
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material'
import { AxiosError } from 'axios'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import ErrorImg from 'assets/error.svg'

import { ErrorImage } from './RequestError.styles'

interface ErrorRequestProps {
  error: AxiosError | undefined
}

export const RequestError = ({ error }: ErrorRequestProps) => {
  return (
    <Stack
      sx={{ width: '100%', height: '100%' }}
      justifyContent="space-around"
      alignItems="center"
    >
      <ErrorImage
        src={ErrorImg}
        alt="imagem informando que ocorreu um erro durante a requisição de dados"
      />
      <Accordion elevation={0} variant="outlined">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Ocorreu um erro
        </AccordionSummary>
        <AccordionDetails>
          {error?.message && (
            <Typography component="p">{error.message}</Typography>
          )}
          <Typography component="p">{error?.stack}</Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  )
}
