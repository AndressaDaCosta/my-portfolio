const projects = [
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
    repository: 'https://andressadacosta.github.io/jogo-da-forca/',
    site: 'https://github.com/AndressaDaCosta/jogo-da-forca',
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
    src: 'https://camo.githubusercontent.com/85865135f1566a7f5df243daf59d8038a4e887d2fd05dad1c42d5be87bf38b39/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4b7a7a6770734a4d344f31576a6e387359742f67697068792e676966',
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
    description: 'Desenvolvido durante o curso HTML5 e CSS3 da Alura + Oracle',
    src: 'barbearia-alura.png',
    repository: 'https://github.com/AndressaDaCosta/barbearia_alura',
    site: 'https://andressadacosta.github.io/barbearia_alura/index.html',
    technologies: ['HTML5', 'CSS3']
  },
  {
    type: 'front',
    name: '🔮 Bola de Cristal',
    description: 'Projeto desenvolvido durante a Maratona Explorer Rocketseat',
    src: 'bola-de-cristal.png',
    repository: 'https://github.com/AndressaDaCosta/maratona-explorer-1',
    site: 'https://andressadacosta.github.io/maratona-explorer-1/',
    technologies: ['HTML5', 'CSS3', 'JavaScript']
  },
  {
    type: 'front',
    name: '👩🏻‍💻 Site PrograMaria',
    description: 'Projeto desenvolvido durante o Curso PrograMaria Turma 20!',
    src: 'programaria-site.png',
    repository: 'https://github.com/AndressaDaCosta/site-programaria',
    site: 'https://andressadacosta.github.io/site-programaria/',
    technologies: ['HTML5', 'CSS3', 'JavaScript']
  },
  {
    type: 'front',
    name: '🗂 Repositório One Next Education',
    description: 'Projetos desenvolvido durante o programa da Oracle + Alura',
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
    repository: 'https://github.com/AndressaDaCosta/tabela_de_classificacao',
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
    type: 'back',
    name: '🔙 🔚 Back-end Teste',
    description: 'Description....',
    src: 'backend.png',
    repository: 'https://github.com/',
    site: 'https://github.com/',
    technologies: ['React', 'Redux', 'CSS3', 'HTML5', 'ES6', 'MySQL']
  }
]

export default projects

// {
//   type: 'front',
//   name: '',
//   description: '',
//   src: '',
//   repository: '',
//   site: '',
//   technologies: ['HTML5', 'CSS3', 'JavaScript']
// },
