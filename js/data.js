const PORTFOLIO_DATA = {
  projects: [
    {
      id: "precifica",
      title: "Precifica — App & Sistema Visual",
      category: "ui-ux",
      categoryLabel: "UI / UX & Design System",
      summary: "Identidade visual e concepção de aplicativo voltado à precificação inteligente de produtos, materiais, clientes e orçamentos automáticos.",
      description: "Desenvolvido para simplificar o cálculo de preço final considerando insumos, custos fixos rateados e histórico de valores. O sistema visual estabelece ícones de aplicativo em variantes clara e escura, tipografia escalável com a família Outfit, paleta violeta de alto contraste e pattern proprietário voltado ao varejo.",
      deliverables: [
        "Arquitetura de funções (Materiais, Clientes, Produtos e Orçamentos)",
        "Ícones de aplicativo (Light & Dark)",
        "Sistema tipográfico completo (Outfit)",
        "Paleta cromática e pattern de interface"
      ],
      typography: "Outfit (Regular, Medium, SemiBold, Bold)",
      palette: ["#F3F3F5", "#B37BFF", "#8A1DF2", "#9D44F5", "#1D1D1B"],
      coverPosition: "top",
      images: [
        {
          src: "assets/img/ui-ux/precifica-identidade.jpg",
          caption: "Prancha de sistema visual, ícones do app, paleta, pattern e escala tipográfica"
        }
      ]
    },
    {
      id: "new-voice",
      title: "New Voice Telecom — Interface de Login",
      category: "ui-ux",
      categoryLabel: "UI / UX Design",
      summary: "Tela de autenticação web projetada para acesso corporativo rápido, com hierarquia limpa de campos, contraste elevado e foco na ação principal.",
      description: "Estudo de interface para o fluxo de entrada do sistema New Voice Telecom. O layout centraliza o formulário sobre fotografia institucional desfocada com sobreposição bordô, priorizando legibilidade imediata nos inputs de e-mail e senha, opção de permanência conectada, recuperação de acesso e botão de destaque alinhado à identidade da marca.",
      deliverables: [
        "Interface de tela de login responsiva",
        "Hierarquia de estados de formulário",
        "Fluxos de recuperação de senha e cadastro",
        "Integração visual com a identidade New Voice"
      ],
      typography: "Sans-serif geométrica de alta legibilidade",
      palette: ["#7B1B24", "#4A1C24", "#FFFFFF", "#EAEAEA", "#1E293B"],
      coverPosition: "center",
      images: [
        {
          src: "assets/img/ui-ux/newvoice-login.jpg",
          caption: "Tela de autenticação web — New Voice Telecom"
        }
      ]
    },
    {
      id: "fsa",
      title: "FSA — Soluções em Tecnologia",
      category: "ui-ux",
      categoryLabel: "UI / UX & Brand Systems",
      summary: "Exploração de três direções de identidade visual e sistemas de cor orientados a interfaces digitais para empresa de tecnologia.",
      description: "Projeto estratégico com três caminhos distintos para a marca FSA: (1) monograma modular com contraste ciano e fúcsia, (2) símbolo dinâmico em fita ciano pensado para ambientes Dark Mode e (3) símbolo inspirado em operadores de programação (< / >) sobre azul elétrico. Cada proposta documenta psicologia cromática e aplicações em UI.",
      deliverables: [
        "3 propostas completas de identidade visual",
        "Paletas documentadas para interfaces digitais",
        "Variações em fundos escuros e claros",
        "Diretrizes tipográficas (Montserrat, Syncopate e LT Amber)"
      ],
      typography: "Montserrat Bold/Light, Syncopate Bold, LT Amber Wide",
      palette: ["#14FFEC", "#FF245B", "#0C2BFF", "#212121", "#E7FFFF"],
      coverPosition: "center",
      images: [
        {
          src: "assets/img/branding/fsa/fsa-proposta-2-completa.jpg",
          caption: "Proposta 2 — Assinatura completa em modo escuro"
        },
        {
          src: "assets/img/branding/fsa/fsa-proposta-2-simbolo.jpg",
          caption: "Proposta 2 — Símbolo em fita ciano com volume"
        },
        {
          src: "assets/img/branding/fsa/fsa-proposta-2-ciano.jpg",
          caption: "Proposta 2 — Versão negativa sobre degradê ciano"
        },
        {
          src: "assets/img/branding/fsa/fsa-proposta-2-tipografia.jpg",
          caption: "Proposta 2 — Versão tipográfica institucional"
        },
        {
          src: "assets/img/branding/fsa/fsa-proposta-1-assinatura.jpg",
          caption: "Proposta 1 — Monograma fsa em fúcsia com tagline"
        },
        {
          src: "assets/img/branding/fsa/fsa-proposta-1-monograma.jpg",
          caption: "Proposta 1 — Monograma sobre azul-carvão"
        },
        {
          src: "assets/img/branding/fsa/fsa-proposta-1-paleta.jpg",
          caption: "Proposta 1 — Matriz de variações cromáticas"
        },
        {
          src: "assets/img/branding/fsa/fsa-proposta-3-codigo.jpg",
          caption: "Proposta 3 — Conceito inspirado em sintaxe de programação"
        },
        {
          src: "assets/img/branding/fsa/fsa-proposta-3-tipografia.jpg",
          caption: "Proposta 3 — Aplicação tipográfica com barra cromática"
        }
      ]
    },
    {
      id: "goatlux",
      title: "GOAT LUX — Luxury Clothing",
      category: "branding",
      categoryLabel: "Identidade Visual & Embalagem",
      summary: "Sistema completo de marca para varejo de moda premium, incluindo logotipo condensado, monograma vertical GTLX, embalagens e fachada.",
      description: "Construção visual focada em sofisticação contemporânea e alto contraste monocromático. O projeto abrangeu estudos exploratórios streetwear e tipográficos até a definição do sistema final composto pelo wordmark condensado GOAT LUX, monograma vertical GTLX, sacolas preta e branca, letreiro 3D em fachada de vidro e painel urbano.",
      deliverables: [
        "Logotipo principal e monograma vertical GTLX",
        "Design de embalagens (sacolas preta e branca)",
        "Aplicações em fachada 3D e mídia externa",
        "Estudos exploratórios de branding (streetwear e violeta)"
      ],
      typography: "Display condensada de alto contraste + Sans-serif espaçada",
      palette: ["#1A1A1A", "#FFFFFF", "#7B4CE2", "#D9D9D9"],
      coverPosition: "center",
      images: [
        {
          src: "assets/img/branding/goatlux/goatlux-apresentacao.jpg",
          caption: "Apresentação oficial — Wordmark GOAT LUX e monograma GTLX"
        },
        {
          src: "assets/img/branding/goatlux/goatlux-fachada.jpg",
          caption: "Aplicação em letreiro 3D sobre fachada de vidro"
        },
        {
          src: "assets/img/branding/goatlux/goatlux-sacola-preta.jpg",
          caption: "Packaging design — Sacola preta com acabamento fosco"
        },
        {
          src: "assets/img/branding/goatlux/goatlux-sacola-branca.jpg",
          caption: "Packaging design — Versão branca com monograma lateral"
        },
        {
          src: "assets/img/branding/goatlux/goatlux-painel.jpg",
          caption: "Aplicação em painel externo urbano"
        },
        {
          src: "assets/img/branding/goatlux/goatlux-monograma.jpg",
          caption: "Monograma vertical GTLX em destaque"
        },
        {
          src: "assets/img/branding/goatlux/goatlux-logotipo-claro.jpg",
          caption: "Versão principal em fundo claro"
        },
        {
          src: "assets/img/branding/goatlux/goatlux-estudo-streetwear.jpg",
          caption: "Estudo alternativo — Direção tipográfica streetwear"
        },
        {
          src: "assets/img/branding/goatlux/goatlux-estudo-gtlx.jpg",
          caption: "Estudo alternativo — gtlx. store em violeta"
        },
        {
          src: "assets/img/branding/goatlux/goatlux-estudo-monograma-roxo.jpg",
          caption: "Estudo alternativo — Monograma goat. store"
        },
        {
          src: "assets/img/branding/goatlux/goatlux-estudo-capa-roxa.jpg",
          caption: "Estudo alternativo — Aplicação em prancha violeta"
        }
      ]
    },
    {
      id: "fenix-cred",
      title: "Fênix Cred — Manual & Identidade",
      category: "branding",
      categoryLabel: "Identidade Visual & Manual de Marca",
      summary: "Criação de símbolo construído em grid geométrico circular, manual do usuário, papelaria, cartão financeiro e sinalização institucional.",
      description: "Identidade visual desenvolvida para empresa de soluções de crédito consignado. O símbolo da fênix foi estruturado com base em proporções circulares precisas, combinado a degradês quentes em âmbar e laranja sobre preto fosco para equilibrar credibilidade e dinamismo.",
      deliverables: [
        "Construção vetorial em grid geométrico",
        "Manual de identidade visual completo",
        "Cartão de visita fosco e cartão financeiro",
        "Placa institucional em acrílico"
      ],
      typography: "LT Amber Extended Medium + Bebas Neue Regular",
      palette: ["#F88400", "#FF9F03", "#FFB703", "#1A1A1A", "#EBFFDF"],
      coverPosition: "center",
      images: [
        {
          src: "assets/img/branding/fenix-cred/fenix-logo-principal.jpg",
          caption: "Assinatura principal sobre degradê quente"
        },
        {
          src: "assets/img/branding/fenix-cred/fenix-grid-construcao.jpg",
          caption: "Diagrama geométrico de construção do símbolo"
        },
        {
          src: "assets/img/branding/fenix-cred/fenix-cartao-visita.jpg",
          caption: "Cartão de visita institucional em preto fosco"
        },
        {
          src: "assets/img/branding/fenix-cred/fenix-cartao-credito.jpg",
          caption: "Aplicação em cartão financeiro com grafismo geométrico"
        },
        {
          src: "assets/img/branding/fenix-cred/fenix-placa-acrilico.jpg",
          caption: "Sinalização de escritório em placa de acrílico"
        }
      ]
    },
    {
      id: "baldasso-malachias",
      title: "Baldasso & Malachias — Engenharia",
      category: "branding",
      categoryLabel: "Identidade Visual & Papelaria",
      summary: "Identidade visual, monograma arquitetônico BM e papelaria completa pronta para gráfica para escritório de engenharia civil.",
      description: "Projeto desenvolvido para engenharia e construção civil unindo solidez estrutural e linguagem moderna. Inclui o monograma principal em verde-oliva escuro, cartão de visitas, pasta com porta-cartão, flyer informativo de serviços com gabarito de impressão e uma segunda direção conceitual inspirada em vigas estruturais.",
      deliverables: [
        "Monograma BM e duas direções visuais",
        "Cartão de visitas frente e verso",
        "Pasta institucional com porta-cartão",
        "Flyer A5 de serviços para impressão"
      ],
      typography: "Sans-serif geométrica bold e condensada",
      palette: ["#1E2612", "#4B6E1A", "#008C54", "#F7F8F3"],
      coverPosition: "center",
      images: [
        {
          src: "assets/img/branding/baldasso-malachias/bm-cartao-visita.jpg",
          caption: "Papelaria — Cartão de visitas frente e verso"
        },
        {
          src: "assets/img/branding/baldasso-malachias/bm-pasta.jpg",
          caption: "Papelaria — Pasta institucional de apresentação"
        },
        {
          src: "assets/img/branding/baldasso-malachias/bm-flyer-servicos.jpg",
          caption: "Material impresso — Flyer A5 de serviços"
        },
        {
          src: "assets/img/branding/baldasso-malachias/bm-logo-principal.jpg",
          caption: "Identidade principal em verde-oliva escuro"
        },
        {
          src: "assets/img/branding/baldasso-malachias/bm-logo-alternativo.jpg",
          caption: "Proposta alternativa — Conceito estrutural em esmeralda"
        },
        {
          src: "assets/img/branding/baldasso-malachias/bm-simbolo-alternativo.jpg",
          caption: "Símbolo isolado da proposta alternativa"
        }
      ]
    },
    {
      id: "tobe-baldasso",
      title: "Tobé & Baldasso — Engenharia Civil",
      category: "branding",
      categoryLabel: "Identidade Visual & Manual de Marca",
      summary: "Marca de alto impacto em preto e amarelo industrial com manual técnico de cores, papelaria e brindes corporativos.",
      description: "Identidade visual construída com forte apelo técnico para engenharia e consultoria de obras. O manual especifica códigos Pantone, RGB, CMYK e LAB, combinações tipográficas com Montserrat Bold e aplicações em flyer, pasta institucional e caneca corporativa.",
      deliverables: [
        "Logotipo TB e manual técnico de uso",
        "Pasta institucional com bolso interno amarelo",
        "Flyer promocional de serviços",
        "Aplicação em brinde corporativo (caneca)"
      ],
      typography: "Montserrat Bold, Lemon Milk e LT Amber",
      palette: ["#0D0D0D", "#212121", "#FFC700", "#D4D4D4", "#FFFFFF"],
      coverPosition: "center",
      images: [
        {
          src: "assets/img/branding/tobe-baldasso/tb-logo-principal.jpg",
          caption: "Logotipo TB sobre fundo escuro com barra de paleta"
        },
        {
          src: "assets/img/branding/tobe-baldasso/tb-pasta.jpg",
          caption: "Pasta institucional preta e amarela"
        },
        {
          src: "assets/img/branding/tobe-baldasso/tb-flyer.jpg",
          caption: "Flyer informativo de serviços prestados"
        },
        {
          src: "assets/img/branding/tobe-baldasso/tb-caneca.jpg",
          caption: "Aplicação em caneca personalizada"
        }
      ]
    },
    {
      id: "dj-willyz",
      title: "DJ Willyz — Identidade Musical",
      category: "branding",
      categoryLabel: "Identidade Visual & Manual",
      summary: "Marca vibrante e modular para produtor musical e DJ, com sistema multicor adaptável a palcos, mídia exterior e redes sociais.",
      description: "Construção tipográfica inclinada e enérgica com moldura geométrica que permite alternância entre cinco cores de destaque mantendo reconhecimento imediato da assinatura DJ Willyz em outdoors, flyers digitais e perfis sociais.",
      deliverables: [
        "Especificações de logotipo e manual de uso",
        "Sistema modular em 5 variações de cor",
        "Aplicação em outdoor de grande formato",
        "Peça de divulgação para Instagram"
      ],
      typography: "Baron Neue Regular + Stretch Pro Regular",
      palette: ["#FFCA3A", "#FF595E", "#8AC926", "#1982C4", "#6A4C93", "#1D1D1B"],
      coverPosition: "center",
      images: [
        {
          src: "assets/img/branding/dj-willyz/dj-outdoor.jpg",
          caption: "Aplicação em mídia exterior (outdoor)"
        },
        {
          src: "assets/img/branding/dj-willyz/dj-logo-especificacao.jpg",
          caption: "Prancha de especificação da marca principal"
        },
        {
          src: "assets/img/branding/dj-willyz/dj-social-mockup.jpg",
          caption: "Aplicação em feed de redes sociais"
        },
        {
          src: "assets/img/branding/dj-willyz/dj-variacoes-cores.jpg",
          caption: "Variações cromáticas autorizadas no manual"
        }
      ]
    },
    {
      id: "jade",
      title: "JADE — Essências de Vida",
      category: "branding",
      categoryLabel: "Identidade Visual & Pattern",
      summary: "Identidade orgânica e minimalista em tons de verde-jade acompanhada de ilustração botânica autoral em traço fino.",
      description: "Desenvolvida para transmitir leveza, bem-estar e conexão com a natureza. Combina tipografia esguia com corte geométrico no ponto final e um pattern botânico em camadas de verde e dourado sutil para embalagens e fundos institucionais.",
      deliverables: [
        "Logotipo principal e versões positiva/negativa",
        "Paleta suave em verde-jade e menta",
        "Pattern botânico de folhas em linha fina"
      ],
      typography: "Display minimalista vertical + Sans-serif espaçada",
      palette: ["#3B8A67", "#D9F5E3", "#265E46", "#A49E66"],
      coverPosition: "center",
      images: [
        {
          src: "assets/img/branding/jade/jade-pattern-botanico.jpg",
          caption: "Aplicação da marca sobre pattern botânico"
        },
        {
          src: "assets/img/branding/jade/jade-logo-verde.jpg",
          caption: "Versão clara sobre fundo verde-jade"
        },
        {
          src: "assets/img/branding/jade/jade-logo-menta.jpg",
          caption: "Versão principal sobre verde-menta claro"
        }
      ]
    },
    {
      id: "beach-shop",
      title: "Beach Shop — Moda Praia",
      category: "branding",
      categoryLabel: "Identidade Visual & Manual",
      summary: "Marca solar que combina tipografia estruturada com caligrafia fluida sobre paleta de verão e aplicação em fachada.",
      description: "Identidade criada para loja de moda praia com sobreposição de lettering manuscrito branco sobre base tipográfica quente em laranja e amarelo solar, garantindo personalidade descontraída e excelente leitura em placas luminosas.",
      deliverables: [
        "Logotipo principal e manual de identidade",
        "Paleta quente de verão com contrastes frios",
        "Mockup de sinalização de fachada"
      ],
      typography: "Montserrat SemiBold, Alpaca Shorelines e Scarlett",
      palette: ["#FFB703", "#F88400", "#043D5B", "#157896", "#D5FFFF"],
      coverPosition: "center",
      images: [
        {
          src: "assets/img/branding/beach-shop/beach-fachada.jpg",
          caption: "Aplicação em placa de fachada comercial"
        },
        {
          src: "assets/img/branding/beach-shop/beach-logo.jpg",
          caption: "Assinatura principal sobre amarelo solar"
        }
      ]
    },
    {
      id: "ada",
      title: "ADA — Apoio ao Autista",
      category: "branding",
      categoryLabel: "Identidade Visual",
      summary: "Logotipo acolhedor para a Associação de Apoio e Desenvolvimento do Autista com coração em peças de quebra-cabeça.",
      description: "Projeto institucional com foco em inclusão, empatia e acessibilidade visual. A marca integra um coração formado por peças de encaixe multicoloridas a tipografia amigável e arredondada, entregue com versão principal e assinatura alternativa.",
      deliverables: [
        "Logotipo completo e versão alternativa",
        "Sistema cromático inclusivo em HEX",
        "Prancha de apresentação para cliente"
      ],
      typography: "Digofa Bold + Comfortaa Bold",
      palette: ["#EB775A", "#009DDF", "#FCD800", "#B2CB1F", "#1A1A1A"],
      coverPosition: "top",
      images: [
        {
          src: "assets/img/branding/ada/ada-apresentacao.jpg",
          caption: "Apresentação oficial — Versão principal e alternativa"
        }
      ]
    },
    {
      id: "joy-gins",
      title: "Joy Gin's — Especiarias",
      category: "branding",
      categoryLabel: "Identidade Visual & Lettering",
      summary: "Sistema tipográfico artesanal com ornamentos clássicos desenvolvido para linha de especiarias e botânicos para gin.",
      description: "Identidade de caráter artesanal e editorial criada em três variações funcionais — versão preenchida, versão outline para rótulos e gravações especiais, e assinatura horizontal compacta — preservando elegância em aplicações monocromáticas.",
      deliverables: [
        "Versão principal preenchida com ornamentos",
        "Versão em contorno (outline) para rótulos",
        "Assinatura horizontal compacta"
      ],
      typography: "Display artesanal personalizada com ornamentos vetoriais",
      palette: ["#000000", "#FFFFFF"],
      coverPosition: "top",
      images: [
        {
          src: "assets/img/branding/joy-gins/joy-gins-logos.jpg",
          caption: "Prancha de variações — Preenchida, contorno e horizontal"
        }
      ]
    }
  ],
  hardSkills: [
    { name: "Figma", level: 5, label: "Fluente (5/5)" },
    { name: "Adobe Illustrator", level: 5, label: "Fluente (5/5)" },
    { name: "Adobe Photoshop", level: 5, label: "Fluente (5/5)" },
    { name: "HTML5 & CSS3", level: 4, label: "Avançado (4/5)" },
    { name: "Python", level: 4, label: "Avançado (4/5)" },
    { name: "Git & GitHub", level: 4, label: "Avançado (4/5)" },
    { name: "JavaScript", level: 3, label: "Autônomo (3/5)" },
    { name: "SQL", level: 2, label: "Básico em evolução (2/5)" }
  ],
  englishSkills: [
    { name: "Entendimento (Leitura & Escuta)", level: 5, label: "5 / 5" },
    { name: "Fala (Conversação)", level: 4, label: "4 / 5" },
    { name: "Escrita", level: 3, label: "3 / 5" }
  ],
  microcampTopics: [
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "HTML5 & CSS3",
    "JavaScript",
    "Scratch",
    "Portugol",
    "Linux (CLI)",
    "Windows 10 & 11",
    "Microsoft Copilot",
    "Word, Excel & PowerPoint",
    "Segurança na Internet"
  ]
};
