const { motion } = require('framer-motion');

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const MenuButton = ({ onClick, isOpen }) => (
  <motion.button
    className="menu-button"
    onClick={onClick}
    animate={isOpen ? 'open' : 'closed'}
    initial={false}
  >
    <svg
      width="23"
      height="23"
      style={{ margin: '4px 0 0 2px' }}
      viewBox="0 0 23 23"
    >
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </motion.button>
);

const leftMenu = [
  'Accessory',
  'Beanie',
  'Hoodie',
  'Long Sleeve',
  'Shirt',
  'Shorts',
];
const rightMenu = ['Small', 'Medium', 'Large', 'X Large', 'XX Large'];

const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: 'spring',
    },
    display: 'block',
  },
  close: {
    rotateX: -15,
    y: -320,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const slideHorizontalAnimation = {
  left: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  right: {
    x: -250,
    transition: {
      duration: 0.3,
    },
  },
};

export const SidebarFr = () => {
  const [isOpen, toggleDropdown] = useCycle(false, true);
  const [isLeftMenu, toggleMenu] = useCycle(true, false);
  const leftMenuHeight = (leftMenu.length + 1) * 65;
  const rightMenuHeight = (rightMenu.length + 1) * 65;
  const height = isLeftMenu ? leftMenuHeight : rightMenuHeight;

  return (
    <div className="wrapper">
      <MenuButton onClick={toggleDropdown} isOpen={isOpen} />
      <motion.div
        className="dropdown-container"
        style={{ height }}
        initial="close"
        animate={isOpen ? 'open' : 'close'}
        variants={slideVerticalAnimation}
      >
        <motion.div
          className="dropdown"
          initial="left"
          animate={isLeftMenu ? 'left' : 'right'}
          variants={slideHorizontalAnimation}
        >
          <motion.div className="menu menu-categories">
            <h4 onClick={toggleMenu}>SIZE OPTIONS &#8594;</h4>
            <ul className="item-list">
              {leftMenu.map((text, i) => (
                <li key={i} className="item">
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="menu menu-sizes">
            <h4 onClick={toggleMenu}>&#8592; CATEGORIES</h4>
            <ul className="item-list">
              {rightMenu.map((text, i) => (
                <li key={i} className="item">
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
