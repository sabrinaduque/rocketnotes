import styled from "styled-components"

export const Container = styled.button`
  color: ${({ theme, $isactive }) => $isactive === true ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  font-size: 16px;
  background: none;
  border: none;
`
