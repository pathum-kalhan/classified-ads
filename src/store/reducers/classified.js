import { ADD_ITEM, TOGGLE_FAV, SET_CATEGORY } from '../actions/types';

const initialState = {
  items: [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'HOUSING',
      title: `Toute personne a droit à l'éducation`,
      description: `Nous et nos partenaires stockons et utilisons des informations non sensibles sur votre appareil,
     comme des cookies ou l'identifiant unique de votre`,
      isFavorite: false,
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'SELLING',
      title: `De nos contenus, produits et services`,
      description: `Partage sociaux, l'affichage de publicités personnalisées, l'affichage de contenu personnalisé,
       la mesure de performance des publicités et du contenu`,
      isFavorite: false,
    },
    {
      id: 3,
      image:
        'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'EDUCATION',
      title: `Tous les groupes raciaux ou religieux`,
      description: `Humaine et au renforcement du respect des droits de l'homme et des libertés fondamentales.
       Elle doit favoriser la compréhension`,
      isFavorite: false,
    },
    {
      id: 4,
      image:
        'https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'COMMUNITY',
      title: `Partenaires stockons et utilisons des informations`,
      description: `Certains partenaires ne demandent pas votre consentement et s'appuient sur leur intérêt commercial légitime 
      pour traiter vos données`,
      isFavorite: false,
    },
    {
      id: 5,
      image:
        'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'PROFESSIONAL',
      title: `De nos contenus, produits et services`,
      description: `Partage sociaux, l'affichage de publicités personnalisées, l'affichage de contenu personnalisé,
       la mesure de performance des publicités et du contenu`,
      isFavorite: false,
    },
    {
      id: 6,
      image:
        'https://images.pexels.com/photos/1787034/pexels-photo-1787034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'HOUSING',
      title: `Toute personne a droit à l'éducation`,
      description: `Nous et nos partenaires stockons et utilisons des informations non sensibles sur votre appareil,
     comme des cookies ou l'identifiant unique de votre`,
      isFavorite: false,
    },
  ],
  item: {},
  categories: [
    'Community',
    'Professional',
    'Housing',
    'Buying',
    'Selling',
    'Jobs',
    'Education',
    'Commercial',
  ],
  selectedCategory: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, selectedCategory: action.payload };
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };

    case TOGGLE_FAV:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            item.isFavorite = !item.isFavorite;
          }
          return item
        }),
      };

    default:
      return state;
  }
}
