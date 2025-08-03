import { Project } from '../types';

const projects: Project[] = [
	{
		type: 'mobile',
		name: '💳 App Bancário Whitelabel Real',
		description:
			'Aplicativo bancário whitelabel desenvolvido com React Native e AWS Lambdas - iOS/Android',
		src: 'app-whitelabel.webp',
		technologies: [
			'ReactNative',
			'TypeScript',
			'AWS Lambda',
			'iOS',
			'Android',
			'REST API'
		]
	},
	{
		type: 'full',
		name: '🎮 Bingo Ao Vivo - Refatoração',
		description:
			'Migração completa de plataforma de jogos online de Angular para Next.js',
		src: 'bingo-ao-vivo.png',
		site: 'https://bingoaovivo8.net/',
		technologies: [
			'Next.js',
			'React',
			'TypeScript',
			'Angular Migration',
			'SEO'
		]
	},
	{
		type: 'front',
		name: '☕ Coffee Delivery',
		description: 'Ignite Challenge #02 - Aplicação de delivery de café',
		src: 'coffe-delivery.png',
		repository: 'https://github.com/AndressaDaCosta/coffee-delivery',
		site: 'https://coffee-delivery-chi-ochre.vercel.app/',
		technologies: [
			'TypeScript',
			'React',
			'Styled Components',
			'Context API',
			'React Hook Form'
		]
	},
	{
		type: 'front',
		name: 'Jogo da Forca 1ª versão',
		description: 'Challenge Oracle ONE Sprint 02: JOGO DA FORCA',
		src: 'jogo-da-forca1.png',
		repository: 'https://github.com/AndressaDaCosta/jogo-da-forca-1versao',
		site: 'https://andressadacosta.github.io/jogo-da-forca-1versao/',
		technologies: ['HTML5', 'CSS3', 'JavaScript']
	},
	{
		type: 'front',
		name: 'Hangman',
		description: 'Challenge Oracle ONE Sprint 02: JOGO DA FORCA',
		src: 'screenshot1.jpeg',
		repository: 'https://github.com/AndressaDaCosta/jogo-da-forca',
		site: 'https://andressadacosta.github.io/jogo-da-forca/',
		technologies: ['HTML5', 'CSS3', 'JavaScript']
	},
	{
		type: 'front',
		name: 'My Portfolio',
		description:
			'Portfólio pessoal apresentando projetos, CV, recomendações e informações de contato.',
		src: 'project-preview.png',
		repository: 'https://github.com/AndressaDaCosta/my-portfolio',
		site: 'https://my-portfolio-andressadacosta.vercel.app/',
		technologies: ['HTML5', 'CSS3', 'JavaScript', 'react', 'contextapi']
	},
	{
		type: 'front',
		name: '🐦 UI Twitter Clone',
		description:
			'Clone da interface do Twitter com React e TypeScript - Responsivo e moderno',
		src: 'ui-twitter-clone.png',
		repository: 'https://github.com/AndressaDaCosta/ui-twitter',
		site: 'https://ui-twitter-three.vercel.app/',
		technologies: [
			'TypeScript',
			'React',
			'CSS3',
			'Responsive Design',
			'Vite'
		]
	},
	{
		type: 'full',
		name: '📊 Painel de Gerenciamento',
		description:
			'Dashboard administrativo com TypeScript e React - Projeto recente (Jul 2025)',
		src: 'painel-de-gerenciamento.png',
		repository:
			'https://github.com/AndressaDaCosta/painel-de-gerenciamento',
		site: 'https://painel-de-gerenciamento.vercel.app',
		technologies: [
			'TypeScript',
			'React',
			'Next.js',
			'Tailwind CSS',
			'Vercel'
		]
	},
	{
		type: 'front',
		name: '☀️ Energia Solar',
		description:
			'Landing page moderna sobre energia sustentável - Projeto recente (Jul 2025)',
		src: 'solar-tech.png',
		repository: 'https://github.com/AndressaDaCosta/energia-solar',
		site: 'https://energia-solar-three.vercel.app/',
		technologies: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design']
	},
	{
		type: 'front',
		name: '🌍 Mini Projeto ODS',
		description:
			'Projeto sobre Objetivos de Desenvolvimento Sustentável da ONU',
		src: 'ods.png',
		repository: 'https://github.com/AndressaDaCosta/mini-projeto-ods',
		site: 'https://andressadacosta.github.io/mini-projeto-ods/',
		technologies: [
			'HTML5',
			'CSS3',
			'JavaScript',
			'Responsive Design',
			'Sustentabilidade'
		]
	},
	{
		type: 'front',
		name: '🧮 Calculadora SENAI',
		description: 'Calculadora funcional desenvolvida durante curso SENAI',
		src: 'calculadora-senai.png',
		repository: 'https://github.com/AndressaDaCosta/calculadora-senai',
		site: 'https://andressadacosta.github.io/calculadora-senai/',
		technologies: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation']
	},
	{
		type: 'back',
		name: '♻️ Reciclaville Project',
		description:
			'Projeto de conscientização sobre reciclagem e sustentabilidade',
		src: 'reciclaville.png',
		repository: 'https://github.com/AndressaDaCosta/reciclaville-project',
		// site: 'https://github.com/AndressaDaCosta/reciclaville-project',
		technologies: [
			'HTML5',
			'CSS3',
			'JavaScript',
			'Sustentabilidade',
			'UX/UI'
		]
	},
	{
		type: 'front',
		name: '📚 Alura Books - Arrays',
		description:
			'E-commerce de livros explorando métodos de array JavaScript',
		src: 'alura-books.png',
		repository: 'https://github.com/AndressaDaCosta/alura-books-arrays',
		site: 'https://alura-books-arrays.vercel.app/',
		technologies: [
			'JavaScript',
			'HTML5',
			'CSS3',
			'Array Methods',
			'DOM Manipulation'
		]
	},
	{
		type: 'mobile',
		name: '📱 Alura Books - Mobile First',
		description:
			'Interface responsiva com design mobile-first e CSS moderno',
		src: 'alura-books-mobile.png',
		repository:
			'https://github.com/AndressaDaCosta/alura-books-mobile-first',
		site: 'https://andressadacosta.github.io/alura-books-mobile-first/',
		technologies: [
			'HTML5',
			'CSS3',
			'Mobile First',
			'Responsive Design',
			'BEM'
		]
	},
	{
		type: 'front',
		name: 'Codificador e Decodificador de Texto',
		description: 'Challenge Oracle ONE Sprint 01',
		src: 'codificador.png',
		repository:
			'https://github.com/AndressaDaCosta/codificador_decodificador_texto',
		site: 'https://andressadacosta.github.io/codificador_decodificador_texto/',
		technologies: ['HTML5', 'CSS3', 'JavaScript']
	},
	{
		type: 'front',
		name: 'Meu primeiro Portfolio',
		description: 'Portfolio desenvolvido durante a #imersãoDEV da Alura!',
		src: 'portfolio-1.png',
		repository: 'https://github.com/AndressaDaCosta/certificard',
		site: 'https://andressadacosta.github.io/certificard/',
		technologies: ['HTML', 'CSS', 'JavaScript']
	},
	{
		type: 'front',
		name: '👩🏻‍⚕️🩺 DoctorCARE',
		description: 'ROCKETSEAT Origin',
		src: 'doctorcare.png',
		repository: 'https://github.com/AndressaDaCosta/NLW-return-rocketseat',
		site: 'https://andressadacosta.github.io/NLW-return-rocketseat/',
		technologies: ['HTML5', 'CSS3', 'JavaScript']
	},
	{
		type: 'front',
		name: '⚛ Ignite lab | ReactJS',
		description: 'Aplicação completa do zero, com ReactJS',
		src: 'ignite-lab-reactjs-screenshot.png',
		repository: 'https://github.com/AndressaDaCosta/ignite-lab-react',
		site: 'https://ignite-lab-react-andressadacosta.vercel.app/',
		technologies: [
			'HTML5',
			'CSS3',
			'JavaScript',
			'typescript',
			'graphql',
			'reactJS',
			'tailwindcss',
			'vite',
			'react-router'
		]
	},
	{
		type: 'front',
		name: '🏡 Casa Criativa 💖',
		description: 'Aplicação do WorkshopDev 🚀 Rocketseat',
		src: 'casa-criativa.png',
		repository: 'https://github.com/AndressaDaCosta/casa-criativa',
		site: 'https://github.com/AndressaDaCosta/casa-criativa',
		technologies: [
			'HTML5',
			'CSS3',
			'JavaScript',
			'nodejs',
			'express',
			'nunjucks',
			'nodemon',
			'sqlite3'
		]
	},
	{
		type: 'front',
		name: ' Alura Store',
		description: 'Site curso CSS Grid',
		src: 'alura-store.png',
		repository: 'https://github.com/AndressaDaCosta/alura-store',
		site: 'https://andressadacosta.github.io/alura-store/',
		technologies: ['HTML5', 'CSS3']
	},
	{
		type: 'front',
		name: '📚 Site Alura Cursos',
		description: 'Site curso de Flex-box',
		src: 'alurinha-layout-desktop.png',
		repository: 'https://github.com/AndressaDaCosta/flexbox-alura',
		site: 'https://andressadacosta.github.io/flexbox-alura/',
		technologies: ['HTML5', 'CSS3', 'JavaScript']
	},
	{
		type: 'front',
		name: '💈 Barbearia Alura',
		description:
			'Desenvolvido durante o curso HTML5 e CSS3 da Alura + Oracle',
		src: 'barbearia-alura.png',
		repository: 'https://github.com/AndressaDaCosta/barbearia_alura',
		site: 'https://andressadacosta.github.io/barbearia_alura/index.html',
		technologies: ['HTML5', 'CSS3']
	},
	{
		type: 'front',
		name: '🔮 Bola de Cristal',
		description:
			'Projeto desenvolvido durante a Maratona Explorer Rocketseat',
		src: 'bola-de-cristal.png',
		repository: 'https://github.com/AndressaDaCosta/maratona-explorer-1',
		site: 'https://andressadacosta.github.io/maratona-explorer-1/',
		technologies: ['HTML5', 'CSS3', 'JavaScript']
	},
	{
		type: 'front',
		name: '👩🏻‍💻 Site PrograMaria',
		description:
			'Projeto desenvolvido durante o Curso PrograMaria Turma 20!',
		src: 'programaria-site.png',
		repository: 'https://github.com/AndressaDaCosta/site-programaria',
		site: 'https://andressadacosta.github.io/site-programaria/',
		technologies: ['HTML5', 'CSS3', 'JavaScript']
	},
	{
		type: 'front',
		name: '🗂 Repositório One Next Education',
		description:
			'Projetos desenvolvido durante o programa da Oracle + Alura',
		src: 'repositorio-oracle.gif',
		repository: 'https://github.com/AndressaDaCosta/alura_oracle_one',
		site: 'https://github.com/AndressaDaCosta/alura_oracle_one',
		technologies: ['HTML5', 'CSS3', 'JavaScript']
	},
	{
		type: 'front',
		name: '🔮 Secret Number',
		description: 'Projeto desenvolvido durante a #imersãoDEV da Alura!',
		src: 'secret-number.png',
		repository: 'https://github.com/AndressaDaCosta/secret_number',
		site: 'https://andressadacosta.github.io/secret_number/',
		technologies: ['HTML', 'CSS', 'JavaScript']
	},
	{
		type: 'front',
		name: '🃏 Super Trunfo',
		description: 'Projeto desenvolvido durante a #imersãoDEV da Alura!',
		src: 'super-trunfo.png',
		repository: 'https://github.com/AndressaDaCosta/super_trunfo',
		site: 'https://andressadacosta.github.io/super_trunfo/',
		technologies: ['HTML', 'CSS', 'JavaScript']
	},
	{
		type: 'front',
		name: '🏆 Tabela de classificação',
		description: 'Projeto desenvolvido durante a #imersãoDEV da Alura!',
		src: 'tabela-de-classificacao.png',
		repository:
			'https://github.com/AndressaDaCosta/tabela_de_classificacao',
		site: 'https://andressadacosta.github.io/tabela_de_classificacao/',
		technologies: ['HTML', 'CSS', 'JavaScript']
	},
	{
		type: 'front',
		name: '💰 Conversor de Moedas',
		description: 'Projeto desenvolvido durante a #imersãoDEV da Alura!',
		src: 'conversor-de-moedas.png',
		repository: 'https://github.com/AndressaDaCosta/conversor_de_moedas',
		site: 'https://andressadacosta.github.io/conversor_de_moedas/',
		technologies: ['HTML', 'CSS', 'JavaScript']
	},
	{
		type: 'front',
		name: '🌡️ Conversor de valores',
		description: 'Projeto desenvolvido durante a #imersãoDEV da Alura!',
		src: 'conversor-de-valores.png',
		repository: 'https://github.com/AndressaDaCosta/conversor_de_valores',
		site: 'https://andressadacosta.github.io/conversor_de_valores/',
		technologies: ['HTML', 'CSS', 'JavaScript']
	},
	{
		type: 'front',
		name: '🔢 Calculadora de Média',
		description: 'Projeto desenvolvido durante a #imersãoDEV da Alura!',
		src: 'calculadora-de-media.png',
		repository: 'https://github.com/AndressaDaCosta/calculadora_de_media',
		site: 'https://andressadacosta.github.io/calculadora_de_media/',
		technologies: ['HTML', 'CSS', 'JavaScript']
	},
	{
		type: 'front',
		name: '🎬 Aluraflix',
		description: 'Projeto desenvolvido durante a #imersãoDEV da Alura!',
		src: 'aluraflix.png',
		repository: 'https://github.com/AndressaDaCosta/alura_flix',
		site: 'https://andressadacosta.github.io/alura_flix/',
		technologies: ['HTML', 'CSS', 'JavaScript']
	},
	{
		type: 'front',
		name: '🌈 Paint Rainbow',
		description: 'Projeto desenvolvido durante a #imersãoDEV da Alura!',
		src: 'rainbow.png',
		repository: 'https://github.com/AndressaDaCosta/rainbow',
		site: 'https://andressadacosta.github.io/rainbow/',
		technologies: ['HTML', 'CSS', 'JavaScript']
	},
	{
		type: 'front',
		name: '♿ Acessibilidade Web Front-End',
		description: 'Projeto focado em boas práticas de acessibilidade web',
		src: 'apeperia.png',
		repository:
			'https://github.com/AndressaDaCosta/acessibilidade-web-front-end',
		site: 'https://github.com/AndressaDaCosta/acessibilidade-web-front-end',
		technologies: [
			'HTML5',
			'CSS3',
			'JavaScript',
			'ARIA',
			'WCAG',
			'Screen Readers'
		]
	},
	{
		type: 'front',
		name: '🎨 Culturama - Flexbox & Grid',
		description: 'Layout moderno explorando CSS Flexbox e Grid',
		src: 'culturama.png',
		repository: 'https://github.com/AndressaDaCosta/-culturama-flex-grid',
		site: 'https://andressadacosta.github.io/-culturama-flex-grid/',
		technologies: [
			'HTML5',
			'CSS3',
			'Flexbox',
			'CSS Grid',
			'Responsive Design'
		]
	},
	{
		type: 'front',
		name: '🚀 NLW Setup - Habits',
		description:
			'Aplicação completa para tracking de hábitos - NLW Setup Ignite',
		src: 'nlw-setup.png',
		repository: 'https://github.com/AndressaDaCosta/nlw-setup-ignite',
		// site: 'https://nlw-setup-ignite-web.vercel.app/',
		technologies: [
			'TypeScript',
			'React',
			'Node.js',
			'Fastify',
			'Prisma',
			'SQLite',
			'Tailwind CSS'
		]
	},
	{
		type: 'full',
		name: '🛒 Desafio Técnico - Convem',
		description: 'Aplicação com Angular e Node.js',
		src: 'desafio-tecnico.png',
		repository: 'https://github.com/AndressaDaCosta/desafio-tecnico-convem',
		site: 'https://desafio-tecnico-convem.vercel.app/',
		technologies: [
			'TypeScript',
			'Angular',
			'Node.js',
			'Express',
			'MongoDB',
			'JWT'
		]
	},
	{
		type: 'back',
		name: '🚀 NodeJS Ignite',
		description:
			'Repositório de estudos do bootcamp Ignite Node.js da Rocketseat',
		src: 'nodejs-ignite.png',
		repository: 'https://github.com/AndressaDaCosta/NodeJS-Ignite',
		// site: 'https://github.com/AndressaDaCosta/NodeJS-Ignite',
		technologies: [
			'TypeScript',
			'Node.js',
			'Express',
			'Docker',
			'PostgreSQL',
			'Jest',
			'JWT'
		]
	},
	{
		type: 'full',
		name: '🌳 Mapeamento de Áreas Verdes',
		description:
			'Sistema de mapeamento e monitoramento de áreas verdes urbanas',
		src: 'areas-verdes.png',
		repository: 'https://github.com/AndressaDaCosta/MapeamentoAreasVerdes',
		technologies: [
			'JavaScript',
			'React',
			'Node.js',
			'MongoDB',
			'Leaflet',
			'Geolocalização'
		]
	}
];

export default projects;

// {
//   type: 'front',
//   name: '',
//   description: '',
//   src: '',
//   repository: '',
//   site: '',
//   technologies: ['HTML5', 'CSS3', 'JavaScript']
// },
