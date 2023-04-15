import styles from './Header.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {useEffect, useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

export interface HeaderType {
  headerItens: HeaderItensType;
}
export interface HeaderItensType {
  id: number;
  imageSrc?: string;
  headerItensX?: HeaderProps;
  headerItemName: string;
}

export interface HeaderProps {
  headerItens: HeaderItensType[];
  headerSuperior: HeaderItensType[];
  imageSrc: string;
}

export function Header(headerItens: HeaderType) {
  const headerItensX = headerItens?.headerItens?.headerItensX;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className={styles.headerContainerMobile}>
          <div className={styles.headerLogoMobile}>
            <img
              className={styles.logoStyle}
              src={headerItensX?.imageSrc}
            />
          </div>
          <div>
            <Dropdown className={styles.dropdownStyle}>
              <Dropdown.Toggle
                className={styles.dropdownIcon}
                id="dropdown-basic"
              >
                <FontAwesomeIcon
                  className="hamburguer-dropdown"
                  icon={faBars}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className={styles.dropdownItensContainer}>
                {headerItensX?.headerSuperior.map((item: HeaderItensType) => (
                  <Dropdown.Item
                    className={styles.itemDropdown}
                    href="#"
                  >
                    {item.headerItemName}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.headerSuperior}>
            {headerItensX?.headerSuperior.map((item: HeaderItensType) => (
              <button className="fa fa-phone">{item.headerItemName}</button>
            ))}
          </div>
          <div className={styles.containerHeader}>
            <div>
              <img
                className={styles.logoStyle}
                src={headerItensX?.imageSrc}
              />
            </div>
            <div className={styles.itensHeader}>
              {headerItensX?.headerItens.map((item: HeaderItensType) => (
                <button>{item.headerItemName}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
