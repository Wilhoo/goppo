import styles from './Footer.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

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
    <div>
      <div className={styles.containerFooter}>
        <div className={styles.containerLogoFooter}>
          <img
            className={styles.logoStyle}
            src={footerItens?.imageSrc}
          />
        </div>

        <div className={styles.textItensFooter}>
          {footerItens?.footerSuperior.map((item: FooterItensType) => {
            return (
              <div className={styles.textItensFooter}>
                <span className={styles.textItensTitle}>
                  {item.footerItemName}
                </span>
                <span>
                  {item.description}{' '}
                  {item.imageSrc && (
                    <FontAwesomeIcon
                      className="hamburguer-dropdown"
                      icon={faPhone}
                    />
                  )}{' '}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <span>
          2023 - Todos os direitos reservados a Goppo | Caxias do Sul - RS
        </span>
      </div>
    </div>
  );
}
