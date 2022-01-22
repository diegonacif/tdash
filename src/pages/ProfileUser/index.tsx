import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { Summary } from "../../components/Summary";
import { api } from '../../services/api';
import { Container, Content } from "./styles";
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Profile {
  id?: string;
  name: string;
  email: string;
  roles: Array<Roles>
}
interface Roles {
  id: string;
  name: string;
  description: string
}

export const ProfileUser = () => {


  const [profile, setProfile] = useState<Profile | null>(null)

  //buscar perfil do usuario
  useEffect(() => {
    api.get("users/profile")
      .then(response => {
        setProfile(response.data)
      }).catch(error => console.log(error));

  }, [])


  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Summary />
      <Content>


        <Link to="/dashboard"> <AiOutlineLeft /> </Link>


        <h2>Meu Perfil</h2>

        <div className="row1"></div>
        <div>
          <h4> nome </h4>
          <span>{profile?.name}</span>
        </div>
        <div>
          <h4> email </h4>
          <span>{profile?.email}</span>
        </div>

        <div>
          {profile?.roles.map(prof => {
            return (
              <div key={prof.id}>
                <div>
                  <h4> permissão </h4>
                  <span>{prof.name} </span>
                </div>
                <div>
                  <h4> detalhes da permissão </h4>
                  <span>{prof.description} </span>
                </div>

              </div>
            )
          })}
        </div>
        <div />

      </Content>

    </Container>
  )
}