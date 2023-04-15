import styles from './Header.module.css';
import Dropdown from 'react-bootstrap/Dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export interface HeaderItensType {
  id: number;
  headerItemName: string;
  headerItens?: HeaderProps;
  imageSrc?: string;
}

export interface HeaderProps {
  headerItens: HeaderItensType[];
  headerSuperior: HeaderItensType[];
  imageSrc: string;
}


export function Header({headerItens}: HeaderItensType) {
  if(window.screen.width < 1000) {
    return (
      <div className={styles.headerContainerMobile}>
        <div className={styles.headerLogoMobile}>
          <img className={styles.logoStyle} src= {headerItens?.imageSrc}/>
        </div>
        <div>  
          <Dropdown className={styles.dropdownStyle}>
            <Dropdown.Toggle className={styles.dropdownIcon} id="dropdown-basic">
              <FontAwesomeIcon className='hamburguer-dropdown' icon={faBars} />
              
            </Dropdown.Toggle>

            <Dropdown.Menu className={styles.dropdownItensContainer}>
                {headerItens?.headerSuperior.map((item: HeaderItensType) => {
                  return <Dropdown.Item className={styles.itemDropdown} href="#">{item.headerItemName}</Dropdown.Item>
                })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    )
  } else {
    return (
      <div>        
        <div className={styles.headerSuperior}>
          {headerItens?.headerSuperior.map((item: HeaderItensType) => {
              return <button className='fa fa-phone'>{item.headerItemName}</button>
            })}
        </div>
        <div className={styles.containerHeader}>
          <div>
            <img className={styles.logoStyle} src= {headerItens?.imageSrc}/>
          </div>
          <div className={styles.itensHeader}>
            {headerItens?.headerItens.map((item: HeaderItensType) => {
              return <button>{item.headerItemName}</button>
            })}
          </div>
        </div>
      </div>
    )
  }
}