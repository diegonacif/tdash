import * as React from 'react';
/* import { FiPower } from "react-icons/fi"; */
import { Container } from "./styles";
import { useAuth } from '../../hooks/authContext'
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import PermissionComponent from '../PermissionComponent';


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
        <div className="loginAvatarArea">
          {/* <img
            src={avatar}
            alt="avatar"
          /> */}
        </div>

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
            <Link to="/perfil-usuario">  <MenuItem onClick={handleClose}>Perfil</MenuItem></Link>


            <PermissionComponent role="root,admin">
              <Link to="/gerenciar-usuarios"><MenuItem onClick={handleClose}>Gerenciar Usuários</MenuItem></Link>
            </PermissionComponent>
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