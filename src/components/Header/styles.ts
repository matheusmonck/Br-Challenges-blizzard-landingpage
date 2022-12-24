import tw from 'tailwind-styled-components';

const Container = tw.div`
w-full
h-24
`;
const Main = tw.main`
max-w-7xl
m-auto
pt-7
lg:px-28
md:px-11 
sm:px-6    
`;
const LogoBlizar = tw.img`
mr-28
`;
const Nav = tw.nav`
flex
items-center
justify-between
`;
const NavOption = tw.span`
p-2
hover:bg-[#5d60615d]
cursor-pointer
text-text
mr-[34px]
rounded-md
activeAnimation
flex
gap-[14px]
items-center
`;
const BtnLogin = tw.button`
p-2
rounded-md
border
w-28
text-text
activeAnimation
hover:brightness-90
`;
export { Container, Main, LogoBlizar, Nav, NavOption, BtnLogin };
