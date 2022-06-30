import { Box, Paper, Stack, styled, TextField } from "@mui/material";

export const CustomForm = styled("form")`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CustomPaper = styled(Paper)`
  display: flex;
  width: 30rem;
  height: 32rem;
  flex-direction: column;
  padding: 2rem 4rem;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
`;

export const CustomBox = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const CustomStack = styled(Stack)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const CustomTextField = styled(TextField)`
  background-color: ${({theme}) => theme.palette.common.black};
  height: 3.5rem;
  border-radius: 0.5rem;
`
