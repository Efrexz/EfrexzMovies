import { Link } from 'react-router-dom';

interface LinkItem {
  to: string;
  label: string;
}

interface NavigationColumnProps {
  title: string;
  links: LinkItem[];
}


function NavigationColumn({ title, links }: NavigationColumnProps) {
  return (
    <nav className="space-y-4 text-center md:text-left">
      <h3 className="text-white font-medium mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((linkItem) => (
          <li key={linkItem.label}>
            <Link to={linkItem.to} className="hover:text-white transition-colors">
              {linkItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationColumn;