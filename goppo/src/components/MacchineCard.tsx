import styles from './MacchineCard.module.css';

export interface MacchineCardType {
  id: number;
  imageSrc: string;
  macchineName: string;
  description: string;
  buttonText: string;
}

interface MacchineCardProps {
  macchineCard: MacchineCardType;
}

export function MacchineCard({macchineCard}: MacchineCardProps) {
  return (
    <div className={styles.macchineCard}>
      <img src={macchineCard.imageSrc} />
      <div className={styles.macchineInfo}>
        <span>{macchineCard.macchineName}</span>
        <span>{macchineCard.description}</span>
      </div>
      <button>{macchineCard.buttonText}</button>
    </div>
  );
}
