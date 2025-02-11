import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = ({ items, onClose }: { items: any[]; onClose?: () => void }) => {
      const pathname = usePathname();

      return (
            <>
                  {items.map((item, index) => (
                        <Link
                              key={index}
                              onClick={onClose}
                              className={` leading-4 ${pathname === item.path ? 'bg-primary font-medium p-2 rounded-lg' : ''}`}
                              href={item.path}
                        >
                              {item.label}
                        </Link>
                  ))}
            </>
      );
};

export default NavItems;
