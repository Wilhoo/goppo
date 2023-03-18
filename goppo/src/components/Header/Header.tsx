import styles from './Header.module.css';

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
  return (
    <div>
      <div className={styles.headerSuperior}>
        {headerItens?.headerSuperior.map((item: HeaderItensType) => {
            return <button>{item.headerItemName}</button>
          })}
      </div>
      <div className={styles.containerHeader}>
        <img src= {headerItens?.imageSrc}/>
        <div className={styles.itensHeader}>
          {headerItens?.headerItens.map((item: HeaderItensType) => {
            return <button>{item.headerItemName}</button>
          })}
        </div>
      </div>
    </div>
  )
}