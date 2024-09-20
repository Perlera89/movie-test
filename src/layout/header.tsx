import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Clapperboard } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';

const NavItem = ({ to, children, isActive }: { to: string, children: ReactNode, isActive: boolean }) => (
  <NavbarItem isActive={isActive} className={isActive ? 'text-blue-400' : ''}>
    <Link to={to}>
      {children}
    </Link>
  </NavbarItem>
);

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Navbar isBordered isBlurred={false} shouldHideOnScroll>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarBrand>
        <Link to="/"><p className="font-bold text-inherit flex gap-2 text-2xl items-center text-blue-300"><Clapperboard /> Cine López</p></Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavItem to="/" isActive={pathname === "/"}>
          Inicio
        </NavItem>
        <NavItem to="/movies" isActive={pathname === "/movies"}>
          Películas
        </NavItem>
        <NavItem to="/series" isActive={pathname === "/series"}>
          Series
        </NavItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to="/">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/">
            <Button color="primary">Sign Up</Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link to="/" className={pathname === "/" ? 'text-blue-400' : ''}>Inicio</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/movies" className={pathname === "/movies" ? 'text-blue-400' : ''}>Películas</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/series" className={pathname === "/series" ? 'text-blue-400' : ''}>Series</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;