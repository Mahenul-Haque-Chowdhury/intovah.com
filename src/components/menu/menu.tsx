import MenuItem from '@/components/menu/menu-item'

type MenuLink = {
  name: string
  to: string
}

const MENU_ITEMS: MenuLink[] = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
  { name: 'FAQs', to: '/faqs' },
  { name: 'Support', to: '/support' },
]

type MenuProps = {
  className?: string
  itemClassName?: string
  onItemClick?: () => void
}

function Menu({ className, itemClassName = 'text-gray-700', onItemClick }: MenuProps) {
  return (
    <ul className={className}>
      {MENU_ITEMS.map((link) => (
        <MenuItem
          key={link.name}
          className={itemClassName}
          to={link.to}
          name={link.name}
          onClick={onItemClick}
        />
      ))}
    </ul>
  )
}

export default Menu
