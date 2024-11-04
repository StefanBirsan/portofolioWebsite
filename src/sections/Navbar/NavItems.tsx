import { navLinks } from '@Constants';

interface NavItemsProps {
    onClick?: () => void;
}

const NavItems = ({onClick}  : NavItemsProps) => (
    <ul className="nav-ul">
        {navLinks.map((items) => (
            <li key={items.id} className="nav-li">
                <a href={items.href} className="nav-li_a" onClick={onClick}>
                    {items.name}
                </a>
            </li>
        ))}
    </ul>
);

export default NavItems;