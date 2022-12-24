import {
  BtnLogin,
  Container,
  LogoBlizar,
  Main,
  Nav,
  NavOption,
} from './styles';
import logoBlizard from '../../../public/assets/logo-blizzard.png';
import { navigation } from '../../app/utils/constants';
import { GrFormDown } from 'react-icons/gr';
function Header() {
  return (
    <>
      <Container>
        <Main>
          <Nav>
            <div className='flex items-center relative'>
              <LogoBlizar alt='Logo Blizard' src={logoBlizard} />
              <div className='absolute w-11 h-[2px] bg-primary top-[67px]' />
              {navigation.map((nav) => (
                <NavOption>
                  {nav.name}

                  {nav.name === 'Jogos' || nav.name === 'Esportes' ? (
                    <GrFormDown
                      fill='#FFFFFF'
                      className='w-6 h-6 opacity-[0.6] text-red-500'
                    />
                  ) : null}
                </NavOption>
              ))}
            </div>

            <div className='flex gap-4 items-center'>
              <BtnLogin>Criar conta</BtnLogin>
              <BtnLogin className='bg-primary border-primary'>Logar</BtnLogin>
            </div>
          </Nav>
        </Main>
      </Container>
      <div className='h-[1.5px] w-full bg-text opacity-[0.1]' />
    </>
  );
}

export { Header };
