import useFetch from 'react-fetch-hook';

export const App = () => {
  const { isLoading, data } = useFetch(
    'https://content.headbox.com/mega-menus?_sort=updated_at:DESC&_limit=1&published=true&locale=GB'
  );

  if (isLoading) {
    return null;
  }

  const megamenu = data[0].menus;

  return (
    <div id="mega-menu-id" className="mega-menu">
      <nav className="mega-menu_nav">
        <ul className="mega-menu_nav-list">
          {megamenu.map((menu, i) => (
            <li className="mega-menu_nav-list-item" key={i}>
              <h5 role="button" className="mega-menu_nav-heading">
                {menu.title}
              </h5>
              <div className="dialog-box-overlay">
                <div role="dialog" aria-modal className="mega-menu_dialog">
                  <h5 className="mega-menu_nav-heading--mobile">
                    {menu.title}
                  </h5>
                  <ul className="mega-menu_dialog-list">
                    {menu.links.map((links, j) => (
                      <li className="mega-menu_dialog-list-item" key={j}>
                        <h5 className="mega-menu_dialog-heading">
                          {links.title}
                        </h5>
                        {links.link.map(({ url, title }, k) => (
                          <a
                            className="mega-menu_dialog-link"
                            href={url}
                            key={k}
                          >
                            {title}
                          </a>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
