import styles from './Header.module.css';
import Dropdown from 'react-bootstrap/Dropdown';

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
  console.log(headerItens.headerItens);

  if (window.screen.width < 1000) {
    return (
      <div className={styles.headerContainerMobile}>
        <div className={styles.headerLogoMobile}>
          <img
            className={styles.logoStyle}
            src={headerItens.headerItens.headerItensX?.imageSrc}
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
              {headerItens?.headerItens?.headerItensX?.headerSuperior.map(
                (item: HeaderItensType) => {
                  return (
                    <Dropdown.Item
                      className={styles.itemDropdown}
                      href="#"
                    >
                      {item.headerItemName}
                    </Dropdown.Item>
                  );
                }
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.headerSuperior}>
          {headerItens?.headerItens?.headerItensX?.headerSuperior.map(
            (item: HeaderItensType) => {
              return (
                <button className="fa fa-phone">{item.headerItemName}</button>
              );
            }
          )}
        </div>
        <div className={styles.containerHeader}>
          <div>
            <img
              className={styles.logoStyle}
              src={headerItens?.headerItens?.imageSrc}
            />
          </div>
          <div className={styles.itensHeader}>
            {headerItens?.headerItens?.headerItensX?.headerItens.map(
              (item: HeaderItensType) => {
                return <button>{item.headerItemName}</button>;
              }
            )}
          </div>
        </div>
      </div>
    );
  }
}
