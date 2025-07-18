import styled from "styled-components";
import {primaryColor} from "../../config/colors";

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content:center;
    a{
        color: white;
        margin: 0 10px 0 0;
        font-weight: bold;
    }
  `
