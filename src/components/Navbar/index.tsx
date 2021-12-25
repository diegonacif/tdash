import * as React from 'react';
/* import { FiPower } from "react-icons/fi"; */
import { Container } from "./styles";
import { useAuth } from '../../hooks/authContext'
import avatar from '../../assets/avatar.jpg'
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


export function Navbar() {
  const { signOut, user } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <h3>TDash Project</h3>

      <div className="loginArea">
        <img
            src={avatar}
            alt="avatar"
          />
        
        <p>{user.name} </p>


        <div className="loginAreaButton">
          <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          >          
            <MoreVertOutlinedIcon sx={{ color: "#ffffff" }} />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
            <MenuItem onClick={signOut}>Logout</MenuItem>
          </Menu>
        </div>

        {/* <h3>        
          <button type="button" onClick={signOut}>
            <FiPower size={20} />
          </button>
        </h3> */}
      </div>

    </Container>
  )
};