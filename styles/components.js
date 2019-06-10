import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
		margin: 0;
		padding: 0;

		@import url('https://fonts.googleapis.com/css?family=Dosis');
		font-family: 'Dosis', sans-serif;

		background-color: var(--secondary-color);

		text-align: center;
	}
	:root {
		--main-color: #3d1f68;
		--secondary-color: #efefef;
	}
`;

export const HeaderWrapper = styled.div`
  border-bottom: 3px solid var(--main-color);
  width: 100vw;
  height: 50px;
`;

export const LinkWrapper = styled.button`
  color: var(--main-color);
  text-transform: uppercase;
  font-family: 'Dosis', sans-serif;
  font-size: inherit;
  background-color: transparent;
  height: 100%;
  cursor: pointer;

  border: none;
  text-align: center;
  text-decoration: none;

  transition: 0.3s;

  :hover {
    color: var(--secondary-color);
    background-color: var(--main-color);
  }
`;

export const Button = styled.button`
  color: var(--main-color);
  text-transform: uppercase;
  font-family: 'Dosis', sans-serif;
  font-size: inherit;
  background-color: transparent;
  height: 3.43rem;
  width: 6.68rem;
  cursor: pointer;

  border: none;
  text-align: center;
  text-decoration: none;

  transition: 0.3s;

  :hover {
    color: var(--secondary-color);
    background-color: ${props => (props.danger ? '#ff2323' : 'var(--main-color)')};
  }
`;

export const InputWrapper = styled.input`
  border: 2px #fff solid !important;
  border: none;
  border-radius: 0;
  color: inherit;
  outline: 0;
  padding: 1rem;
  text-decoration: none;
  width: 40%;
  font-size: 1rem;
`;

export const Select = styled.select`
  font-size: 1.2rem;
  font-family: 'Dosis', sans-serif;
  font-weight: 400;
  color: var(--main-color);
  padding: 0.8rem 1.4rem 1.05rem 0.8rem;
  width: 46%;
  border: none;
  border-radius: 0 !important;
  display: inline-block;
  background-color: #ffffff;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -ms-appearance: none;
`;

export const TableCell = styled.td`
  padding-right: 20px;
`;

export const LayoutWrapper = styled.div`
  color: var(--main-color);
`;
