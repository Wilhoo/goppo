import {MacchineCardType} from './components/MacchineCard';
import styles from './App.module.css';

import './global.css';
import {CardDisplay, CardDisplayProps} from './components/CardDisplay';

export interface TitleProps {
  bold?: boolean;
  content: string;
}

const cardDisplay: CardDisplayProps = {
  description:
    'Esses equipamentos são a escolha ideal para quem busca qualidade e durabilidade.',
  title: [
    {content: 'Confira algumas das ', bold: false},
    {content: 'máquinas em destaque ', bold: true},
    {content: 'para malharia', bold: false},
  ],
  macchineCards: [
    {
      id: 1,
      imageSrc: `src/assets/mesa-de-passadoria.jpg`,
      macchineName: 'Mesa Vaporizadora',
      description: 'Utilizada na vaporização de diversos tipos de tecidos',
      buttonText: 'Veja mais',
    },

    {
      id: 2,
      imageSrc: `src/assets/mesa-de-passadoria.jpg`,
      macchineName: 'Mesa Vaporizadora',
      description:
        'Utilizada na vaporização de diversos tipos de tecidos Utilizada na vaporização de diversos tipos de tecidos Utilizada na vaporização de diversos tipos de tecidos',
      buttonText: 'Veja mais',
    },
  ],
};

function App() {
  return (
    <div className={styles.wrapper}>
      <CardDisplay cardDisplay={cardDisplay} />
    </div>
  );
}

export default App;
