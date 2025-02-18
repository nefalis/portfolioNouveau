import Booki1 from '../assets/booki_1.jpg';
import Booki2 from '../assets/booki_2.jpg';
import Panthere from '../assets/panthere1.png';
import Ohmyfood from '../assets/ohmyfood1.png';
import Kanap1 from '../assets/kanap_1.jpg';
import Kanap2 from '../assets/kanap_2.jpg';
import Hottake from '../assets/hottake2.png'
import Kasa1 from '../assets/kasa_1.jpg';
import Kasa2 from '../assets/kasa_2.jpg';
import JustStream1 from '../assets/JustStream_1.png'
import Litrevu2 from '../assets/litrevu_2.png'
import Epicevent1 from '../assets/epicevent_1.png'
import OCLettings1 from '../assets/oc_letting_1.png'
import OCLettings2 from '../assets/oc_letting_2.png'
import OCLettings3 from '../assets/oc_letting_3.png'
import Chess1 from '../assets/chess_1.png'
import Chess2 from '../assets/chess_2.png'
import Gudlft1 from '../assets/gudlft_2.png'
import Gudlft2 from '../assets/gudlft_3.png'
import Gudlft3 from '../assets/gudlft_4.png'
import Softdesk1 from '../assets/sofdesk_1.png'
import Softdesk2 from '../assets/softdesk_2.png'
import Softdesk3 from '../assets/softdesk_3.png'
import Regulus1 from '../assets/regulus_1.png'
import Regulus2 from '../assets/regulus_2.png'
import Regulus3 from '../assets/regulus_3.png'
import Port1 from '../assets/port1.png'
import Portfolio from '../assets/portfolio.png'

const projectData = [
    {
        id: 1,
        title: 'Portfolio',
        category: 'Front-end',
        description: "Portfolio actuel",
        stack: 'React - Tailwind - HTML',
        pictures: [Portfolio],
        github: 'https://github.com/nefalis/portfolio',
        link: ' portfolio-charronemilie.vercel.app/ '
    },
    {
        id: 2,
        title: 'Regulus',
        category: 'Full-stack',
        description: "Application suivi de cycle menstruel",
        descriptionDetail: `Application qui permet aux utilisatrices de suivre leurs cycles menstruels, 
        de prévoir leurs prochaines règles, et d’analyser la durée moyenne des cycles à travers un graphique interactif.
        
        **Fonctionnalités principales :**  
        -  Ajouter un cycle menstruel avec une date de début et une date de fin  
        -  Calculer les jours restants avant les prochaines règles  
        -  Visualiser les cycles via un graphique  
        -  Supprimer un cycle de l'historique  
        `,
        stack: 'Django - Django Rest Framework SQLite - React - Tailwind - Axios',
        pictures: [Regulus1, Regulus2, Regulus3],
        github: 'https://github.com/nefalis/Regulus',
    },
    {
        id: 3,
        title: 'SoftDesk',
        category: 'Back-end',
        description: "API de gestion de problèmes",
        descriptionDetail: `SoftDesk est une API de gestion de problèmes. Cet outil permet de faire remonter et de suivre des problèmes avec la création d'utilisateurs et de projets contenant des issues et des commentaires. 
        
        **Fonctionnalités principales :**  
        -  Gestion des utilisateurs (inscription, connexion, modification du mot de passe)   
        -  Création, lecture, modification et suppression de projets  
        -  Gestion des contributeurs dans les projets   
        -  Création, lecture, modification et suppression des issues dans les projets 
        -  Ajout et gestion des commentaires pour les issues Les actions peuvent être tester à l'aide de Postman et les endpoints seront décrit plus bas. 
        `,
        stack: 'Django Rest Framework',
        pictures: [Softdesk1, Softdesk2, Softdesk3],
        github: 'https://github.com/nefalis/SoftDesk',
    },
    {
        id: 4,
        title: 'Gudlft',
        category: 'Back-end',
        description: "Amélioration application Flask",
        descriptionDetail:`Notre objectif était d'améliorer une application Flask simple hébergée sur GitHub en corrigeant des bugs, en ajoutant un tableau de bord, et en créant des tests pour garantir le bon fonctionnement de ses fonctionnalités.
        Nous avons d'abord identifié des bugs sur le dépôt GitHub, puis implémenté une nouvelle fonctionnalité : un tableau de bord affiché sous forme de tableau.
        Pour assurer la qualité du code, nous avons veillé à ce que la couverture des tests dépasse 60 %.
        Chaque correction ou nouvelle fonctionnalité a été développée sur une branche distincte, que nous avons fusionnée successivement dans la branche QA puis dans la branche main, simulant ainsi un déploiement en production. `,
        stack: 'Python - Flask - Pytest - Flake8 - JSON - Tests untitaires et intégrations - Locust',
        pictures: [Gudlft1, Gudlft2, Gudlft3],
        github: 'https://github.com/nefalis/Gudlft',
    },
    {
        id: 5,
        title: 'Chess tournament',
        category: 'Applications CLI',
        description: "Application permettant la gestion de tournoi d'échecs",
        descriptionDetail:`Application permettant la gestion de tournoi d'échecs avec plusieurs fonctionnalités comme :
        - la création de joueurs
        - la création de tournois
        - la génération de rapport `,
        stack: 'Python - Validation flake8',
        pictures: [Chess1, Chess2 ],
        github: 'https://github.com/nefalis/projet-4-chess-tournament',
    },
    {
        id: 6,
        title: 'OC Lettings',
        category: 'Back-end',
        description: "Refonte d'une application",
        descriptionDetail:`Ce projet Django a impliqué une refonte majeure d'une base de code existante, la modularisation de la structure en plusieurs applications et la mise en place d'un pipeline CI/CD.
        Le projet a été conteneurisé à l'aide de Docker, déployé sur Render et soigneusement documenté pour assurer la maintenabilité et l'évolutivité. 
        
        Ce projet a consité à : 
        - Restructuration du projet en plusieurs applications Django, améliorant la modularité et l'évolutivité 
        - Utilisation du système de migration de Django pour mettre à jour le schéma de la base de données sans perte de données
        - Création d'un fichier Docker, hébergement de l'image Docker sur Docker Hub et déploiement du projet sur Render. 
        - Mise en œuvre des actions GitHub pour l'intégration et le déploiement continus, y compris le linting, les tests et la création d'images Docker. 
        - Documentation du projet en utilisant Sphinx et Read the Docs pour une orientation claire et accessible du projet. `,
        stack: 'Django - GitHub Action - Docker - Sentry - CI/CD - Sphinx - Render',
        pictures: [OCLettings1, OCLettings2, OCLettings3],
        github: 'https://github.com/nefalis/Python-OC-Lettings-FR',
        link: 'https://python-oc-lettings-fr-sry9.onrender.com/'
    },
    {
        id: 7,
        title: 'EpicEvent',
        category: 'Applications CLI',
        description: "Système CRM en interface de ligne de commande de gestion d'événements",
        stack: 'Python - MySQL - SQLAlchemy - JWT - Rich - Sentry - Pytest - JWT',
        pictures: [Epicevent1],
        github: 'https://github.com/nefalis/Epicevent',
    },
    {
        id: 8,
        title: 'LITRevu',
        category: 'Front-end',
        description: 'Application de critique de livre',
        stack: 'Django - CSS - Tailwind',
        pictures: [Litrevu2],
        github: 'https://github.com/nefalis/LITReview_P9',
    },
    {
        id: 9,
        title: 'JustStreamIt',
        category: 'Front-end',
        description: 'Application web qui répertorie et classe les films',
        stack: 'HTML - CSS - JavaScript',
        pictures: [JustStream1],
        github: 'https://github.com/nefalis/p6-JustStreamIt',
    },
    {
        id: 10,
        title: 'Booki',
        category: 'Front-end',
        description: 'Réalisation d\'un prototype conformément à la maquette.',
        stack: 'HTML - CSS - Responsive - Validation W3C',
        pictures: [Booki1],
        github: 'https://github.com/nefalis/Booki-P2',
        link: 'https://nefalis.github.io/Booki-P2/'
    },
    {
        id: 11,
        title: 'La Panthère',
        category: 'Front-end',
        description: 'Optimisation d\'un site existant. Amélioration de performance et accessibilité.',
        stack: 'HTML - CSS - Lighthouse - SEO',
        pictures: [Panthere],
        github: 'https://github.com/nefalis/La-Panthere',
        link: 'https://nefalis.github.io/La-Panthere/'
    },
    {
        id: 12,
        title: '1er portfolio',
        category: 'Front-end',
        description: "Première version de mon protfolio",
        stack: 'HTML - CSS',
        pictures: [Port1],
        github: 'https://github.com/nefalis/Portfolio_Charron_Emilie',
        link: 'portfolio-charron-e.vercel.app/'
    },
    {
        id: 13,
        title: 'OhMyFood',
        category: 'Front-end',
        description: 'Conception d\'une page web en mobile first et en intégrant des animations.',
        stack: 'HTML - CSS - Sass - Responsive',
        pictures: [Ohmyfood],
        github: 'https://github.com/nefalis/ohmyfood',
        link: 'https://nefalis.github.io/ohmyfood/'
    },
    {
        id: 14,
        title: 'Kanap',
        category: 'Front-end',
        description: 'Construction du frontend d\'un site de e-commerce avec des données issues d\'une API.',
        stack: 'HTML - CSS - JavaScript',
        pictures: [Kanap1],
        github: 'https://github.com/nefalis/Kanap'
    },
    {
        id: 15,
        title: 'Hot Takes',
        category: 'Back-end',
        description: 'Mise en place d\'une API sécurisée avec NodeJS et Express.',
        stack: 'HTML - CSS - MongoDB - Express - NodeJS',
        pictures: [Hottake],
        github: 'https://github.com/nefalis/Projet-6'
    },
    {
        id: 16,
        title: 'Kasa',
        category: 'Front-end',
        description: 'Création d\'une application avec React en suivant une maquette Figma.',
        stack: 'HTML - CSS - React',
        pictures: [Kasa1],
        github: 'https://github.com/nefalis/projet-7',
        link: 'https://projet-7-five.vercel.app/'
    }
];

export default projectData;
