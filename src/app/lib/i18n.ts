export type Language = "pt-BR" | "en-UK"

export const DEFAULT_LANGUAGE: Language = "pt-BR"

export type Translation = {
    // tabTitle: string
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
        // tabTitle: "Lívia Silva | Desenvolvedora Backend",
        langButtonLabel: "Idioma",
        welcome: "Bem-vindo ao meu portfólio",
        heroWords: "Olá, Mundo! Sou a Lívia.",
        role: "Desenvolvedora Backend",
        whoAmI: "Quem sou eu?",
        about:
            "Sou Desenvolvedora de Software e graduanda em Ciência da Computação, apaixonada por construir sistemas backend. Gosto muito de me desafiar aprendendo como as coisas funcionam e colocando meu conhecimento em prática. Me desafiar de formas criativas é o que faço de melhor! Meu objetivo número 1 é me tornar excelente no que faço, sem nunca esquecer que estou em constante evolução.",
        connect: "Vamos nos conectar!",
        findMe: "Você pode me encontrar em:",
        skills: "Habilidades",
        myProjects: "Meus Projetos",
        goToRepo: "Ver repositório",
        builtWithLove: "Transformando ideias em soluções.",
        projects: {
            "book-review-blog":
                "Uma API RESTful para gerenciar usuários, livros, resenhas e posts pessoais de blog, projetada para sustentar uma plataforma completa de resenhas e blog sobre livros.",
            "pixel-peel":
                "Uma API RESTful criada para sustentar uma plataforma de e-commerce de adesivos digitais, gerenciando produtos, usuários, administradores, carrinho e pedidos.",
            "task-matrix":
                "Uma API profundamente inspirada na Matriz de Eisenhower, uma ferramenta focada em organizar e priorizar tarefas por importância e urgência.",
            "vet-clinic":
                "Uma API RESTful para o gerenciamento de uma clínica veterinária, lidando com veterinários, usuários, pets, donos e consultas.",
        },
    },
    "en-UK": {
        // tabTitle: "Lívia Silva | Backend Developer",
        langButtonLabel: "Language",
        welcome: "Welcome to my Portfolio",
        heroWords: "Hello, World! I'm Lívia.",
        role: "Backend Developer",
        whoAmI: "Who am I?",
        about:
            "I'm a Software Developer and Computer Science Major passionate about building backend systems. I'm very fond of challenging myself by learning how things work and putting my knowledge into practise. Challenging myself in creative ways is what I do best! My #1 goal is to become excellent at what I do while remaining aware that I'm a constant work in progress.",
        connect: "Let's connect!",
        findMe: "You can find me on:",
        skills: "Skills",
        myProjects: "My Projects",
        goToRepo: "Go to Github repository",
        builtWithLove: "Turning ideas into meaningful solutions.",
        projects: {
            "book-review-blog":
                "A RESTful API for managing users, books, reviews and personal blog posts, designed to support a complete book review and blogging platform.",
            "pixel-peel":
                "A RESTful API built to support a digital stickers e-commerce platform, handling products, users, admins, cart and orders.",
            "task-matrix":
                "An API deeply inspired by the Eisenhower Matrix, a tool which focuses on organising and prioritising tasks by importance and urgency.",
            "vet-clinic":
                "A RESTful API for the management of a veterinarian clinic, handling vets, users, pets, owners and appointments.",
        },
    },
}
