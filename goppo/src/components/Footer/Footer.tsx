import styles from './Footer.module.css';
import { Button } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';

export interface FooterItensType {
  id: number;
  footerItemName: string;
  description: string;
  footerItens?: FooterProps;
  imageSrc?: string;
}

export interface FooterProps {
  footerItens: FooterItensType[];
  footerSuperior: FooterItensType[];
  imageSrc: string;
}


export function Footer({footerItens}: FooterItensType) {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.teste}>
        <img className={styles.logoStyle} src= {footerItens?.imageSrc}/>
      </div>
    
      <div className={styles.textItensFooter}>
        {footerItens?.footerSuperior.map((item: FooterItensType) => {
            return (
              <div className={styles.textItensFooter}>
                <span className={styles.textItensTitle}>{item.footerItemName}</span>
                <span>{item.description}</span>    
              </div>
          )})}
      </div>
    </div>
  )
}