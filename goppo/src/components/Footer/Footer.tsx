import styles from './Footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export interface FooterType {
  footerItens: FooterItensType;
}

export interface FooterItensType {
  id: number;
  description: string;
  imageSrc?: string;
  footerItensX?: FooterProps;
  footerItemName: string;
  faImage?: object;
}

export interface FooterProps {
  footerSuperior: FooterItensType[];
  imageSrc?: string;
}

export function Footer({ footerItens }: FooterType) {
  return (
    <div>
      <div className={styles.containerFooter}>
        <div className={styles.containerLogoFooter}>
          <img
            className={styles.logoStyle}
            src={footerItens.imageSrc}
          />
        </div>

        <div className={styles.textItensFooter}>
          {footerItens.footerItensX?.footerSuperior.map((item: FooterItensType) => {
            return (
              <div className={styles.textItensFooter}>
                <span className={styles.textItensTitle}>
                  {item.footerItemName}
                </span>
                <span>
                  {item.description}{' '}
                  {item.faImage && (
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
