export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  date: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "particao-equivalencia-valores-limite",
    title: "O que é Partição de Equivalência e Valores Limite?",
    excerpt: "Entenda duas das técnicas mais fundamentais do design de testes e como aplicá-las no dia a dia.",
    tag: "Fundamentos",
    readTime: "5 min",
    date: "2024-12-15",
    content: `## Introdução

Quando falamos em **design de casos de teste**, duas técnicas se destacam como pilares fundamentais: a **Partição de Equivalência** e a **Análise de Valores Limite**. Ambas são essenciais para qualquer profissional de QA que deseja criar testes eficientes sem desperdiçar recursos.

## Partição de Equivalência

A Partição de Equivalência (ou *Equivalence Partitioning*) é uma técnica que divide os dados de entrada em **grupos (partições)** onde todos os valores dentro de um grupo devem ser tratados da mesma forma pelo sistema.

### Como funciona?

Imagine um campo de idade que aceita valores entre 18 e 65:

- **Partição válida:** 18 a 65 (qualquer valor nesse intervalo deve ser aceito)
- **Partição inválida inferior:** menor que 18 (deve ser rejeitado)
- **Partição inválida superior:** maior que 65 (deve ser rejeitado)

A ideia é que, se o sistema funciona para o valor **25**, ele também funcionará para **30**, **40** ou qualquer outro valor da mesma partição. Isso reduz drasticamente o número de testes necessários.

### Benefícios

- Reduz o número de casos de teste sem perder cobertura
- Identifica classes de dados relevantes
- Abordagem sistemática e documentável

## Análise de Valores Limite

A Análise de Valores Limite (ou *Boundary Value Analysis*) complementa a Partição de Equivalência focando nos **limites** entre as partições — onde a maioria dos bugs tende a ocorrer.

### Aplicação prática

Usando o mesmo exemplo do campo de idade (18-65):

| Valor | Tipo | Esperado |
|-------|------|----------|
| 17 | Limite inferior inválido | Rejeitado |
| 18 | Limite inferior válido | Aceito |
| 19 | Próximo ao limite inferior | Aceito |
| 64 | Próximo ao limite superior | Aceito |
| 65 | Limite superior válido | Aceito |
| 66 | Limite superior inválido | Rejeitado |

### Por que os limites são críticos?

Erros de programação como \`>\` vs \`>=\`, \`<\` vs \`<=\` e *off-by-one errors* são extremamente comuns. Testar os limites maximiza a chance de encontrar esses defeitos.

## Combinando as técnicas

Na prática, as duas técnicas são usadas juntas:

1. **Primeiro**, identifique as partições de equivalência
2. **Depois**, selecione valores nos limites de cada partição
3. **Adicione** pelo menos um valor representativo do meio de cada partição

Essa combinação oferece uma cobertura eficiente e é a base para qualquer estratégia de teste bem fundamentada.

## Conclusão

Dominar Partição de Equivalência e Valores Limite é essencial para qualquer QA. São técnicas simples, mas que fazem uma diferença enorme na qualidade dos testes e na detecção precoce de defeitos. Aplique-as no seu dia a dia e veja a diferença na sua cobertura de testes.`,
  },
  {
    slug: "automacao-nao-substitui-testes-exploratorios",
    title: "Por que automação não substitui testes exploratórios?",
    excerpt: "Automação é poderosa, mas não encontra o inesperado. Descubra o valor dos testes exploratórios.",
    tag: "Estratégia",
    readTime: "7 min",
    date: "2024-11-28",
    content: `## O mito da automação total

Existe um mito persistente na indústria de software: o de que podemos (e devemos) **automatizar tudo**. A realidade é que automação e testes exploratórios são complementares, não substitutos.

## O que a automação faz bem

A automação de testes é excelente para:

- **Testes de regressão**: garantir que funcionalidades existentes continuam funcionando
- **Verificações repetitivas**: executar os mesmos cenários milhares de vezes
- **Integração contínua**: feedback rápido a cada commit
- **Validações de dados**: comparações em grande escala

## O que a automação NÃO consegue fazer

Por outro lado, scripts automatizados têm limitações significativas:

### 1. Não pensam como usuários

Um script segue um caminho pré-definido. Ele não vai "notar" que o layout está estranho, que a experiência é confusa ou que algo "não parece certo".

### 2. Não encontram o inesperado

Automação testa o que **você já sabe**. Testes exploratórios encontram o que **você não imaginava**.

### 3. Não avaliam usabilidade

A experiência do usuário é subjetiva e contextual. Nenhum script pode avaliar se um fluxo é intuitivo ou frustrante.

### 4. Não se adaptam em tempo real

Quando um testador exploratório encontra algo suspeito, ele muda de direção, investiga, aprofunda. Um script continua executando seu roteiro cegamente.

## O valor do teste exploratório

O teste exploratório é uma abordagem onde o testador **aprende, projeta e executa testes simultaneamente**. É um processo criativo e investigativo.

### Características principais

- **Baseado em heurísticas**: o testador usa sua experiência para guiar a exploração
- **Adaptativo**: muda de direção conforme descobre informações
- **Documentável**: pode ser estruturado em sessões (Session-Based Testing)
- **Eficiente**: encontra bugs de alto impacto rapidamente

## A abordagem ideal

A melhor estratégia combina ambas as abordagens:

- **Automatize** os cenários repetitivos e de regressão
- **Explore** manualmente as novas funcionalidades e fluxos complexos
- **Use** automação para liberar tempo para exploração
- **Documente** descobertas exploratórias para futura automação

## Conclusão

Automação e testes exploratórios não competem — eles se complementam. Um time de QA maduro sabe quando usar cada abordagem e como equilibrá-las para maximizar a qualidade do software.`,
  },
  {
    slug: "plano-de-testes-eficiente",
    title: "Como estruturar um plano de testes eficiente?",
    excerpt: "Um bom plano de testes economiza tempo e protege entregas. Veja como criar o seu.",
    tag: "Planejamento",
    readTime: "6 min",
    date: "2024-11-10",
    content: `## Por que planejar testes?

Um plano de testes não é burocracia — é uma **ferramenta estratégica** que alinha expectativas, define prioridades e protege a qualidade das entregas.

## Estrutura de um plano de testes eficiente

### 1. Escopo e objetivos

Defina claramente:

- **O que será testado** (funcionalidades, módulos, integrações)
- **O que NÃO será testado** (e por quê)
- **Critérios de aceite** claros e mensuráveis

### 2. Estratégia de testes

Determine as abordagens para cada tipo de teste:

- **Testes funcionais**: validação de regras de negócio
- **Testes de integração**: comunicação entre módulos
- **Testes de performance**: tempos de resposta e carga
- **Testes de segurança**: vulnerabilidades e acessos
- **Testes de usabilidade**: experiência do usuário

### 3. Ambiente e dados

Documente:

- Ambientes necessários (dev, staging, produção)
- Dados de teste (como serão criados/obtidos)
- Configurações específicas
- Dependências externas

### 4. Cronograma e recursos

Planeje:

- **Quem** executa cada tipo de teste
- **Quando** cada fase acontece
- **Quanto tempo** é necessário
- **Quais ferramentas** serão usadas

### 5. Critérios de entrada e saída

Defina quando os testes podem começar e quando estão concluídos:

**Critérios de entrada:**
- Build estável disponível
- Ambiente configurado
- Dados de teste preparados

**Critérios de saída:**
- X% dos casos executados
- Zero bugs críticos abertos
- Relatório de testes aprovado

### 6. Gestão de riscos

Identifique riscos e planos de contingência:

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Atraso no desenvolvimento | Alto | Priorizar testes críticos |
| Ambiente instável | Médio | Ambiente backup |
| Falta de dados | Médio | Gerar dados sintéticos |

### 7. Métricas e relatórios

Defina como medir o progresso:

- Taxa de execução de testes
- Taxa de defeitos encontrados vs. corrigidos
- Cobertura de requisitos
- Tempo médio de correção

## Dicas práticas

1. **Mantenha simples**: um plano que ninguém lê é inútil
2. **Atualize regularmente**: o plano deve evoluir com o projeto
3. **Envolva o time**: QA não planeja sozinho
4. **Priorize por risco**: teste primeiro o que pode causar mais dano

## Conclusão

Um plano de testes bem estruturado não garante zero defeitos, mas garante que você está testando as coisas certas, no momento certo, com os recursos certos. É a diferença entre testar com propósito e testar no escuro.`,
  },
  {
    slug: "boas-praticas-cypress",
    title: "Boas práticas com Cypress",
    excerpt: "Dicas práticas para escrever testes mais confiáveis, rápidos e fáceis de manter com Cypress.",
    tag: "Automação",
    readTime: "8 min",
    date: "2024-10-20",
    content: `## Por que Cypress?

O Cypress se tornou uma das ferramentas mais populares para testes end-to-end, e com razão. Sua arquitetura única, que roda dentro do navegador, oferece velocidade, confiabilidade e uma experiência de desenvolvimento excepcional.

## Boas práticas essenciais

### 1. Use data-testid para seletores

Evite seletores frágeis baseados em classes CSS ou estrutura do DOM:

\`\`\`javascript
// ❌ Frágil
cy.get('.btn-primary.submit-form')

// ✅ Resiliente
cy.get('[data-testid="submit-button"]')
\`\`\`

### 2. Evite waits fixos

Nunca use \`cy.wait(5000)\`. O Cypress tem mecanismos de espera inteligentes:

\`\`\`javascript
// ❌ Espera fixa
cy.wait(3000)
cy.get('[data-testid="result"]')

// ✅ Espera inteligente
cy.get('[data-testid="result"]', { timeout: 10000 })
  .should('be.visible')
\`\`\`

### 3. Use comandos customizados

Encapsule ações repetitivas em comandos reutilizáveis:

\`\`\`javascript
// commands.js
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('[data-testid="email"]').type(email)
  cy.get('[data-testid="password"]').type(password)
  cy.get('[data-testid="submit"]').click()
  cy.url().should('include', '/dashboard')
})

// test.spec.js
cy.login('user@test.com', 'password123')
\`\`\`

### 4. Organize com Page Objects (ou App Actions)

Mantenha a lógica de interação separada das asserções:

\`\`\`javascript
// pages/LoginPage.js
export class LoginPage {
  visit() { cy.visit('/login') }
  fillEmail(email) { cy.get('[data-testid="email"]').type(email) }
  fillPassword(pwd) { cy.get('[data-testid="password"]').type(pwd) }
  submit() { cy.get('[data-testid="submit"]').click() }
}
\`\`\`

### 5. Intercepte chamadas de API

Use \`cy.intercept()\` para controlar o backend nos testes:

\`\`\`javascript
cy.intercept('GET', '/api/users', {
  fixture: 'users.json'
}).as('getUsers')

cy.visit('/users')
cy.wait('@getUsers')
cy.get('[data-testid="user-list"]')
  .children()
  .should('have.length', 3)
\`\`\`

### 6. Testes independentes

Cada teste deve poder rodar isoladamente:

- Não dependa da ordem de execução
- Configure o estado necessário no \`beforeEach\`
- Limpe dados após cada teste quando necessário

### 7. Use fixtures para dados

Mantenha dados de teste organizados em fixtures:

\`\`\`json
// cypress/fixtures/users.json
[
  { "id": 1, "name": "João", "role": "admin" },
  { "id": 2, "name": "Maria", "role": "user" }
]
\`\`\`

## Estrutura de projeto recomendada

\`\`\`
cypress/
├── e2e/
│   ├── auth/
│   │   ├── login.cy.js
│   │   └── register.cy.js
│   ├── dashboard/
│   │   └── dashboard.cy.js
│   └── users/
│       └── users.cy.js
├── fixtures/
│   ├── users.json
│   └── products.json
├── support/
│   ├── commands.js
│   └── e2e.js
└── pages/
    ├── LoginPage.js
    └── DashboardPage.js
\`\`\`

## Dicas de performance

1. **Agrupe asserções** relacionadas no mesmo teste
2. **Use API para setup** em vez de UI quando possível
3. **Paralelização** com Cypress Cloud para suites grandes
4. **Desabilite animações** nos testes para maior velocidade

## Conclusão

Cypress é uma ferramenta poderosa, mas como qualquer ferramenta, precisa ser usada corretamente. Seguindo essas boas práticas, seus testes serão mais confiáveis, rápidos e fáceis de manter — exatamente o que todo time de QA precisa.`,
  },
  {
    slug: "qa-alem-dos-testes",
    title: "QA além dos testes: qualidade como cultura",
    excerpt: "Qualidade não é responsabilidade de uma pessoa. É uma mentalidade que permeia todo o time.",
    tag: "Cultura",
    readTime: "5 min",
    date: "2024-10-05",
    content: `## Qualidade não é um departamento

Durante muito tempo, qualidade foi tratada como uma **etapa** do processo — algo que acontecia depois do desenvolvimento. Hoje, sabemos que essa visão é limitada e custosa.

## O papel moderno do QA

O profissional de QA moderno não é apenas um "testador". Ele é um **guardião da qualidade** que atua em todas as fases do ciclo de desenvolvimento:

### Na descoberta

- Participa de refinamentos e planejamento
- Questiona requisitos ambíguos
- Identifica riscos antes da primeira linha de código

### No desenvolvimento

- Colabora com devs na definição de critérios de aceite
- Sugere cenários de teste durante code reviews
- Ajuda a definir a estratégia de testes unitários

### Na entrega

- Executa testes funcionais e exploratórios
- Valida a experiência do usuário
- Monitora métricas de qualidade pós-deploy

## Qualidade como cultura

Para que qualidade deixe de ser responsabilidade de uma pessoa e se torne parte da cultura do time, alguns princípios são fundamentais:

### 1. Todos são responsáveis

- Devs escrevem testes unitários
- POs definem critérios de aceite claros
- Designers consideram edge cases
- QAs facilitam e orientam

### 2. Feedback rápido

- Integração contínua com testes automatizados
- Code reviews com olhar de qualidade
- Retrospectivas focadas em melhorias

### 3. Prevenção sobre detecção

O custo de corrigir um bug em produção é **até 100x maior** do que corrigi-lo na fase de requisitos. Investir em prevenção é investir em eficiência.

### 4. Métricas que importam

Não meça apenas bugs encontrados. Meça:

- **Escapados para produção**: bugs que passaram por todo o processo
- **Tempo de ciclo**: do commit ao deploy
- **Satisfação do usuário**: NPS, tickets de suporte
- **Cobertura de testes**: unitários, integração, E2E

## Práticas que promovem a cultura de qualidade

### Three Amigos

Reunião entre **PO, Dev e QA** antes de começar uma história:

- PO explica o valor de negócio
- Dev avalia a viabilidade técnica
- QA questiona cenários e riscos

### Definition of Done

Uma DoD clara que inclui critérios de qualidade:

- [ ] Testes unitários escritos
- [ ] Code review aprovado
- [ ] Testes de aceite executados
- [ ] Documentação atualizada
- [ ] Performance validada

### Blameless Post-Mortems

Quando bugs escapam para produção, faça uma análise sem culpa:

- O que aconteceu?
- Por que aconteceu?
- Como evitar que aconteça novamente?

## Conclusão

QA além dos testes é sobre criar um ambiente onde qualidade é **valor, não obstáculo**. É sobre colaboração, prevenção e melhoria contínua. Quando todo o time abraça essa mentalidade, o resultado é software melhor, entregas mais confiáveis e usuários mais satisfeitos.`,
  },
];

export const getBlogPostsSortedByDateDesc = (): BlogPost[] => {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getLatestBlogPosts = (limit = 6): BlogPost[] => {
  return getBlogPostsSortedByDateDesc().slice(0, limit);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};
