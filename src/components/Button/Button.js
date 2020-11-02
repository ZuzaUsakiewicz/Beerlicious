const Button = styled.button`
  border-radius: 10px;
  border: none;
  background: ${({ primary }) => (primary ? "red" : "blue")};
  color: ${({ mainfont }) => (mainfont ? "blue" : "red")};
  font-size: 40px;
`;

export default Button;
