import { Link } from "react-router-dom";
import { StyledNavbar } from "./styled";
import { Icon } from "../Icon/styled";
import { images } from "../../constants/images";

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link to="/">
        <Icon src={images.Eye.src} alt={images.Eye.alt} />
      </Link>
      <Link to="/settings">
        <Icon src={images.Gear.src} alt={images.Gear.alt} />
      </Link>
    </StyledNavbar>
  );
}
