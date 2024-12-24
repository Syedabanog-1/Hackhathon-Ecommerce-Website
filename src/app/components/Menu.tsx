import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

function Menu() {
  return (
    <div>
      <div className="lg:hidden">
        <MobileMenu />
      </div>
      <div className="hidden lg:block">
        <DesktopMenu />
      </div>
    </div>
  );
}

export default Menu;