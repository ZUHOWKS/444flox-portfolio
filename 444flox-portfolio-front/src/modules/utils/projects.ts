export interface Project {
    title: string;
    coverName: string;
    author: string;
    category: string;
    description: string;
    year: string;
}

export const projects: Project[] = [
    {
        title: 'Sage',
        coverName: 'sage',
        author: '444flox',
        category: 'artistic direction',
        description: "“Sage est un projet fictif qui a su développer mon univers " +
            "graphique en 2024. Il avait pour but de créer la face avant d’une " +
            "cover, une face arrière, une version physique de l'EP ainsi qu'un " +
            "poster.”",
        year: '2024',
    },
    {
        title: 'Fallen Hero',
        coverName: 'fallen_hero',
        author: '444flox',
        category: 'artistic direction',
        description: "“Fallen Hero est un projet fictif conçu pour un artiste " +
            "musical émergent. Il fait partie d'une série de projets que j'ai " +
            "décide de créer autour du thème médiéval. Pour ce projet, j'ai " +
            "développe une pochette avant, une pochette arrière, un poster, et " +
            "un CD physique.”",
        year: '2024',
    },
    {
        title: 'Excalibur',
        coverName: 'excalibur',
        author: '444flox',
        category: 'artistic direction',
        description: "“Excalibur est un projet fictif conçu pour un artiste musical émergent. " +
            "Il fait partie de la série de projets que j'ai décide de créer autour du thème médieval, " +
            "il est le deuxième de la série Pour ce projet, j'ai développe une pochette avant, une " +
            "pochette arrière, un poster, et une version physique.”",
        year: '2024',
    },
    {
        title: 'Cavalry',
        coverName: 'cavalry',
        author: '444flox',
        category: 'edition',
        description: "“Cavalry est le dernier projet de la série médiévale, clôturant cette collection " +
            "avec une impression qui rassemble toutes les compétences que j'ai utilisées au cours de ces " +
            "projets. J'ai réalise une version imprimé du magazine ainsi qu'une version web. Ce projet " +
            "m'a permis de perfectionner mes compétences en édition.”",
        year: '2024',
    },
    {
        title: 'Posters',
        coverName: 'posters',
        author: '444flox',
        category: 'visual creation',
        description: "“Pendant l'année 2024, ma deuxième année en design numérique, j'ai eu l'opportunité " +
            "de réaliser plusieurs projets de dispositifs numériques pour divers commanditaires. Parmi eux, " +
            "l'agence Fréquences Écoles, l'événement Super Demain, ainsi que le Musée de Bourgoin-Jallieu pour leur exposition \"Carnet de Bal\".",
        year: '2024',
    },
    {
        title: 'Gen',
        coverName: 'gen',
        author: '444flox',
        category: 'ui/ux',
        description: "“L’objectif de l’application est de simplifier et d’enrichir" +
            "l’expérience de découverte musicale pour les amateurs" +
            "de rap. En éliminant la nécessité de passer des" +
            "heures à rechercher manuellement de nouveaux artistes," +
            "l’application offre une solution pratique, efficace" +
            "et personnalisée pour élargir votre bibliothèque" +
            "musicale hip-hop underground." +
            "\n" +
            "Avec GEN, plongez dans l’univers diversifié du rap et" +
            "découvrez des talents émergents qui correspondent" +
            "parfaitement à vos préférences musicales.”",
        year: '2024',
    },
    {
        title: 'Dispositifs',
        coverName: 'dispositifs',
        author: '444flox',
        category: 'numeric project',
        description: "“Pendant l'année 2024, ma deuxième année en design numérique, " +
            "j'ai eu l'opportunité de réaliser plusieurs projets de dispositifs " +
            "numériques pour divers commanditaires. Parmi eux, l'agence Fréquences " +
            "Écoles, l'événement Super Demain, ainsi que le Musée de Bourgoin-Jallieu " +
            "pour leur exposition \"Carnet de Bal\".”",
        year: '2024',
    },
] as Project[]


export function getProjectIndex(coverName: string): number {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].coverName === coverName) {
            return i;
        }
    }

    return -1;
}
