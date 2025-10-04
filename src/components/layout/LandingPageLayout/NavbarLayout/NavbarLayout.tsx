import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { NAV_ITEMS } from "../LandingPageLayout.constans";

function NavbarLayout() {
  return (
    <Navbar
      maxWidth="full"
      className="py-5 px-10 bg-[#f6f9f8] z-50"
      isBlurred
      isBordered
      shouldHideOnScroll={false}
    >
      {/* menu 1 */}
      <NavbarContent
        justify="start"
        className="hidden lg:flex flex-wrap text-sm"
      >
        <p className="max-w-48 break-words text-sm">
          One of our specialties is our healthy breakfast
        </p>
        <p className="">Healty & Safety</p>
      </NavbarContent>

      {/* menu 2 */}
      <NavbarContent justify="center">
        <NavbarItem>
          <h1 className="font-didot font-bold text-3xl">IFood</h1>
        </NavbarItem>
      </NavbarContent>

      {/* menu 3 */}
      <NavbarContent justify="end">
        <div className="hidden lg:flex lg:gap-5">
          {NAV_ITEMS.map((item) => (
            <NavbarItem key={`nav-${item.label}`}>{item.label}</NavbarItem>
          ))}
        </div>

        {/* mobile */}
        <NavbarMenuToggle className="lg:hidden" />
        <NavbarMenu className=" mt-10 bg-[#f6f9f8]">
          {NAV_ITEMS.map((item) => (
            <NavbarMenuItem key={`nav-${item.label}`}>
              {item.label}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
}

export default NavbarLayout;
