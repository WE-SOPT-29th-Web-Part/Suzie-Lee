import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <StyledLeft>sopt.log</StyledLeft>
      <StyledRight>
        <Link to="/write"></Link>
        <button>새 글 작성</button>
      </StyledRight>
    </div>
  );
};

export default Header;

const StyledLeft = styled.div``;
const StyledRight = styled.div``;
