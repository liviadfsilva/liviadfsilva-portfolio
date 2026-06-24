export type Language = "pt-BR" | "en-UK"

export const DEFAULT_LANGUAGE: Language = "pt-BR"

export type Translation = {
    tabTitle: string
    langButtonLabel: string
    welcome: string
    heroWords: string
    role: string
    whoAmI: string
    about: string
    connect: string
    findMe: string
    skills: string
    myProjects: string
    goToRepo: string
    builtWithLove: string
    projects: Record<string, string>
}

export const translations: Record<Language, Translation> = {
    "pt-BR": {
        tabTitle: "Lívia Silva | Portfólio",
        langButtonLabel: "Idioma",
        welcome: "Boas vindas ao meu portfólio",
        heroWords: "Olá, Mundo! Sou a Lívia.",
        role: "Desenvolvedora Backend",
        whoAmI: "Quem sou eu?",
        about:
            "Sou graduanda em Ciência da Computação e desenvolvedora com foco em backend. " +
            "Gosto muito de me desafiar colocando os meus conhecimentos em prática. " +
            "Desafiar-me de formas criativas é o que faço de melhor! Meu principal objetivo é alcançar excelência no " +
            "que eu faço, sem nunca esquecer que estou em constante evolução.",
        connect: "Vamos nos conectar!",
        findMe: "Onde me encontrar:",
        skills: "Habilidades",
        myProjects: "Meus Projetos",
        goToRepo: "Ver repositório",
        builtWithLove: "Transformando ideias em soluções.",
        projects: {
            "book-review-blog":
                "Plataforma para publicação de de resenha de livros projetada para gerenciar usuários, livros, " +
                "resenhas e posts pessoais de blog.",
            "pixel-peel":
                "Sistema desenvolvido para sustentar uma plataforma de e-commerce de adesivos digitais, " +
                "gerenciando produtos, usuários, admins, carrinho e pedidos.",
            "task-matrix":
                "Aplicação de gerenciamento de tarefas baseada na Matriz de Eisenhower para organização " +
                "por importância e urgência.",
            "vet-clinic":
                "Sistema para gestão de clínicas veterinárias, incluindo veterinários, usuários, " +
                "pets, donos e consultas.",
        },
    },
    "en-UK": {
        tabTitle: "Lívia Silva | Portfolio",
        langButtonLabel: "Language",
        welcome: "Welcome to my Portfolio",
        heroWords: "Hello, World! I'm Lívia.",
        role: "Backend Developer",
        whoAmI: "Who am I?",
        about:
            "I'm a Software Developer and Computer Science Major passionate about building backend systems. " +
            "I'm very fond of challenging myself by learning how things work and putting my knowledge into practise. " +
            "Challenging myself in creative ways is what I do best! " +
            "My #1 goal is to become excellent at what I do while remaining aware that I'm a constant work in progress.",
        connect: "Let's connect!",
        findMe: "You can find me on:",
        skills: "Skills",
        myProjects: "My Projects",
        goToRepo: "Go to Github repository",
        builtWithLove: "Turning ideas into meaningful solutions.",
        projects: {
            "book-review-blog":
                "An application designed to support a complete book review and blogging platform, " +
                "managing users, books, reviews and personal blog posts.",
            "pixel-peel":
                "A system built to support a digital stickers e-commerce platform, handling products, users, " +
                "admins, cart and orders.",
            "task-matrix":
                "A task manager deeply inspired by the Eisenhower Matrix, a tool which focuses on organising and prioritising " +
                "tasks by importance and urgency.",
            "vet-clinic":
                "A management system for handling vets, users, pets, owners and appointments in a veterinary clinic.",
        },
    },
}
