import {TitleProps} from '../App';
import styles from './CardDisplay.module.css';
import {MacchineCard, MacchineCardType} from './MacchineCard';

export interface CardDisplayProps {
  macchineCards: MacchineCardType[];
  title: TitleProps[];
  description: string;
}

interface CardDisplayType {
  cardDisplay: CardDisplayProps;
}

export function CardDisplay({cardDisplay}: CardDisplayType) {
  return (
    <div className={styles.cardList}>
      <div className={styles.macchinesDescription}>
        <h2>
          {cardDisplay.title.map((title: TitleProps) => {
            if (title.bold) {
              return <b>{title.content}</b>;
            } else {
              {
                return title.content;
              }
            }
          })}
        </h2>
        <p>{cardDisplay.description}</p>
      </div>
      {cardDisplay.macchineCards.map((macchineCard) => {
        return (
          <MacchineCard
            key={macchineCard.id}
            macchineCard={macchineCard}
          />
        );
      })}
    </div>
  );
}
