import { MacchineCardType } from './components/MacchineCard';
import styles from './App.module.css';

import './global.css';
import { CardDisplay, CardDisplayProps } from './components/CardDisplay';
import { Header } from './components/Header/Header';
import { headerItens } from './components/Header/HeaderInterface';
import { Footer } from './components/Footer/Footer';
import { footerItens } from './components/Footer/FooterInterface';

export interface TitleProps {
  bold?: boolean;
  content: string;
}

const cardDisplay: CardDisplayProps = {
  leftSide: true,
  color: 'color-blue',
  description:
    'Esses equipamentos são a escolha ideal para quem busca qualidade e durabilidade.',
  title: [
    { content: 'Confira algumas das ', bold: false },
    { content: 'máquinas em destaque ', bold: true },
    { content: 'para malharia', bold: false },
  ],
  macchineCards: [
    {
      id: 1,
      imageSrc: `public/assets/mesa-de-passadoria.jpg`,
      macchineName: 'Mesa Vaporizadora',
      description: 'Utilizada na vaporização de diversos tipos de tecidos',
      buttonText: 'Veja mais',
    },

    {
      id: 2,
      imageSrc: `public/assets/mesa-de-passadoria.jpg`,
      macchineName: 'Mesa Vaporizadora',
      description:
        'Utilizada na vaporização de diversos tipos de tecidos Utilizada na vaporização de diversos tipos de tecidos Utilizada na vaporização de diversos tipos de tecidos',
      buttonText: 'Veja mais',
    },
  ],
};

const cardDisplay2: CardDisplayProps = {
  leftSide: false,
  color: 'color-dark-blue',
  description:
    'Esses equipamentos são a escolha ideal para quem busca qualidade e durabilidade.',
  title: [
    { content: 'Confira algumas das ', bold: false },
    { content: 'máquinas em destaque ', bold: true },
    { content: 'para malharia', bold: false },
  ],
  macchineCards: [
    {
      id: 1,
      imageSrc: `public/assets/mesa-de-passadoria.jpg`,
      macchineName: 'Mesa Vaporizadora',
      description: 'Utilizada na vaporização de diversos tipos de tecidos',
      buttonText: 'Veja mais',
    },

    {
      id: 2,
      imageSrc: `public/assets/mesa-de-passadoria.jpg`,
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
      <Header headerItens={headerItens} />
      <CardDisplay cardDisplay={cardDisplay} />
      <CardDisplay cardDisplay={cardDisplay2} />
      <Footer footerItens={footerItens} />
    </div>
  );
}

export default App;
