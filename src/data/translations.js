export const translations = {
	'pt-BR': {
		// Navigation
		home: 'home.jsx',
		about: 'about.html',
		contact: 'contacts.css',
		projects: 'projects.js',
		recommendations: 'recommendations.json',

		// TitleBar
		file: 'Arquivo',
		edit: 'Editar',
		view: 'Visualizar',
		go: 'Ir',
		run: 'Executar',
		terminal: 'Terminal',
		help: 'Ajuda',
		portfolioTitle: 'Andressa_Da_Costa_Portfolio',
		explorer: 'EXPLORADOR',
		portfolio: 'Portfolio',

		// Home page
		welcome: 'Bem-vindo ao meu Portfólio',
		frontendDeveloper: 'Desenvolvedora Full Stack',
		webDevelopmentStudent: 'Desenvolvedora Android POS',
		downloadCV: 'Baixar CV',
		hello: 'Olá 👋🏼! Eu sou',

		// Projects page
		projectsTitle: 'Coisas que já construí...',
		all: 'Todos',
		frontend: 'Front-end',
		backend: 'Back-end',
		fullstack: 'Full-stack',
		mobile: 'Mobile',
		viewApp: 'Ver aplicação',
		github: 'Github',

		// About page
		aboutTitle: 'Sobre mim',
		aboutGreeting: 'Olá,',
		aboutAskMe: 'Me pergunte sobre',
		aboutTechList:
			'Kotlin, Android POS, React Native, Next.js, Node.js, APIs de pagamento.',
		aboutFunFact: 'Curiosidade',
		aboutFunFactText:
			'Amo Astronomia 👩‍🚀🪐 e desenvolver soluções que vão além.',

		// Recommendations page
		recommendationsTitle: 'Recomendações',
		recommendationsSubtitle:
			'O que dizem os devs que colaboraram comigo...',

		// Contact page
		contactTitle: 'Contato',
		contactSubtitle: 'Vamos Conversar 🤙🏻',
		contactText: 'Entre em contato comigo',

		// Footer
		developedWith: 'Desenvolvido com ❤ e Código por Andressa Da Costa',
		prettier: 'Prettier',
		javascript: 'Javascript',
		react: 'React',

		// Common
		loading: 'Carregando...',
		imageNotAvailable: 'Imagem não disponível',

		// Accessibility
		githubProfile: 'Perfil do GitHub',
		linkedinProfile: 'Perfil do LinkedIn',
		togglePortfolio: 'Alternar explorador de portfólio',
		downloadCVAria: 'Baixar CV de Andressa da Costa em PDF',
		screenshotProject: 'Screenshot do projeto',
		toggleLanguage: 'Alternar idioma'
	},

	en: {
		// Navigation
		home: 'home.jsx',
		about: 'about.html',
		contact: 'contacts.css',
		projects: 'projects.js',
		recommendations: 'recommendations.json',

		// TitleBar
		file: 'File',
		edit: 'Edit',
		view: 'View',
		go: 'Go',
		run: 'Run',
		terminal: 'Terminal',
		help: 'Help',
		portfolioTitle: 'Andressa_Da_Costa_Portfolio',
		explorer: 'EXPLORER',
		portfolio: 'Portfolio',

		// Home page
		welcome: 'Welcome to my Portfolio',
		frontendDeveloper: 'Full Stack Developer',
		webDevelopmentStudent: 'Android POS Developer',
		downloadCV: 'Download CV',
		hello: 'Hello 👋🏼 I am',

		// Projects page
		projectsTitle: "Stuff I've Built So Far...",
		all: 'All',
		frontend: 'Front-end',
		backend: 'Back-end',
		fullstack: 'Full-stack',
		mobile: 'Mobile',
		viewApp: 'View application',
		github: 'Github',

		// About page
		aboutTitle: 'About me',
		aboutGreeting: 'Hello,',
		aboutAskMe: 'Ask me about',
		aboutTechList:
			'Kotlin, Android POS, React Native, Next.js, Node.js, Payment APIs.',
		aboutFunFact: 'Fun fact',
		aboutFunFactText:
			'I love Astronomy 👩‍🚀🪐 and building software that goes beyond.',

		// Recommendations page
		recommendationsTitle: 'Recommendations',
		recommendationsSubtitle: "What developers I've worked with say...",

		// Contact page
		contactTitle: 'Contact',
		contactSubtitle: "Let's Talk 🤙🏻",
		contactText: 'Get in touch with me',

		// Footer
		developedWith: 'Developed with ❤ and Code by Andressa Da Costa',
		prettier: 'Prettier',
		javascript: 'Javascript',
		react: 'React',

		// Common
		loading: 'Loading...',
		imageNotAvailable: 'Image not available',

		// Accessibility
		githubProfile: 'GitHub Profile',
		linkedinProfile: 'LinkedIn Profile',
		togglePortfolio: 'Toggle portfolio explorer',
		downloadCVAria: 'Download Andressa da Costa CV in PDF',
		screenshotProject: 'Project screenshot',
		toggleLanguage: 'Toggle language'
	}
};

export const useTranslation = (language) => {
	return (key) => {
		return (
			translations[language]?.[key] || translations['pt-BR'][key] || key
		);
	};
};
