import { FooterProps, FooterItensType, Footer } from '../Footer/Footer';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const footerItens: FooterItensType = {
  id: 1,
  imageSrc: 'src/assets/logo.png',
  footerItemName: '',
  description: '',
  footerItensX: {
    footerSuperior: [
      {
        id: 1,
        footerItemName: 'Horário de Atendimento',
        description: 'Segunda-Sexta: 08h-12h e das 13h30-18h',
      },

      {
        id: 1,
        footerItemName: 'Entre em Contato:',
        description: '(54) 3229-5423',
        faImage: { faBars },
      },
    ],
  }
};
