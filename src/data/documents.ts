export interface Document {
  id: string;
  title: string;
  content: string;
}

export const documents: Document[] = [
  {
    id: 'documento-executivo',
    title: 'Documento Executivo - Estrutura Interna',
    content: `
      <h1>Documento Executivo - Estrutura Interna e Capacidades Operacionais da NOCTA.I</h1>
      
      <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-8">
        <h2 class="!mt-0 !mb-4">Natureza Estratégica do Negócio</h2>
        <p class="!mb-0">A NOCTA.I estrutura-se como uma empresa de tecnologia orientada à entrega de operações automatizadas por meio de inteligência artificial aplicada, moldada com precisão às rotinas de negócios dos clientes. Internamente, sustenta-se por um modelo operacional altamente enxuto, replicável, escalável e baseado em margens operacionais elevadas.</p>
      </div>

      <h2>1. Modelo Operacional</h2>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-purple-300">Alta Margem Operacional</h3>
          <p class="!mb-0 text-sm">O modelo da NOCTA.I é concebido para garantir lucratividade recorrente sem aumento proporcional de custo com o crescimento da base de clientes. A empresa não requer equipe de suporte intensivo nem gastos recorrentes em mão de obra direta por projeto.</p>
        </div>
        
        <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-purple-300">Baixo Custo Inicial por Cliente</h3>
          <p class="!mb-0 text-sm">Não há custos operacionais relevantes antes da ativação da automação. O esforço de setup e implementação é digital, automatizado e pós-pago — os únicos custos recorrentes surgem após o 30º dia, majoritariamente relacionados à infraestrutura cloud-vps.</p>
        </div>
        
        <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-purple-300">Eficiência e Sustentabilidade Técnica</h3>
          <p class="!mb-0 text-sm">Toda a infraestrutura é baseada em nuvem, dispensando servidores locais, instalações físicas ou ativos fixos. A entrega é modular, digital e com disponibilidade contínua (24/7), operando de forma sustentável e com consumo controlado de recursos computacionais.</p>
        </div>
      </div>

      <h2>2. Arquitetura Técnica</h2>
      
      <div class="space-y-6 mb-8">
        <div class="bg-black/40 border border-white/10 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 flex items-center">
            <span class="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
            Integração Universal e Flexível
          </h3>
          <p class="!mb-0">A NOCTA.I opera com integração nativa via API e Webhook, o que viabiliza a conexão com sistemas diversos (CRM, ERP, gateways, planilhas, bancos de dados, entre outros) sem necessidade de refatoração ou customização de código-fonte do cliente.</p>
        </div>
        
        <div class="bg-black/40 border border-white/10 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 flex items-center">
            <span class="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
            Capacidade Multimodal da IA
          </h3>
          <p class="!mb-0">A IA implementada compreende texto, áudio e imagem. Possui habilidade de comunicação por mensagem escrita, voz personalizada (com timbre de pessoas reais) e resposta lógica contextualizada. Isso permite atender uma variedade ampla de demandas operacionais sem alterar o core da tecnologia.</p>
        </div>
        
        <div class="bg-black/40 border border-white/10 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 flex items-center">
            <span class="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
            Customização por Instância
          </h3>
          <p class="!mb-0">Cada IA é treinada com dados operacionais do cliente, vocabulário, tom de voz e lógica de negócio própria. A NOCTA.I não distribui "bots genéricos", mas sim instâncias específicas moldadas ao fluxo e cultura de cada empresa atendida.</p>
        </div>
        
        <div class="bg-black/40 border border-white/10 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 flex items-center">
            <span class="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
            Aprendizado Contínuo Automatizado
          </h3>
          <p class="!mb-0">As instâncias de IA aprendem e evoluem com base nas interações com os clientes finais. Essa inteligência é retroalimentada no sistema, aumentando sua capacidade sem dependência de operadores humanos ou ajustes frequentes.</p>
        </div>
      </div>

      <h2>3. Estrutura Organizacional e Processual</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Time Enxuto, Estratégico e Replicável</h3>
          <p class="!mb-0">A equipe da NOCTA.I é mínima, composta por profissionais de alta performance com foco em produto, engenharia de automações, integração e atendimento consultivo. Não há necessidade de escalar equipe proporcionalmente ao número de clientes.</p>
        </div>
        
        <div class="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Protocolos Internos e Padronização</h3>
          <p class="!mb-0">Todos os processos internos da empresa estão em fase avançada de padronização e documentação, permitindo execução rápida, delegação inteligente e criação de playbooks replicáveis.</p>
        </div>
      </div>
      
      <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-8">
        <h3 class="!mt-0 !mb-3">Pós-Venda Consultivo</h3>
        <p class="!mb-0">O relacionamento com o cliente é estratégico. O time de pós-venda atua como consultoria de eficiência operacional, guiando o cliente em novos fluxos e oportunidades de ganho. O suporte técnico é pontual, pois o sistema é estável e autônomo.</p>
      </div>

      <h2>4. Modelo de Crescimento e Expansão</h2>
      
      <div class="space-y-6 mb-8">
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Crescimento Viral por Design</h3>
          <p class="!mb-0">O modelo da NOCTA.I inclui um sistema interno de crescimento baseado em ramificações: um cliente satisfeito naturalmente indica novos clientes. Isso é fomentado por um modelo de marketing de rede estruturado com linguagem corporativa, impulsionando crescimento sem custo direto de aquisição (CAC).</p>
        </div>
        
        <div class="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Produto Fragmentável por Nicho</h3>
          <p class="!mb-0">A estrutura da empresa permite a criação de marcas, páginas e ofertas segmentadas, mantendo o mesmo core tecnológico. Isso torna possível atender diferentes segmentos com identidade visual e linguagem adaptada, sem refazer o produto.</p>
        </div>
        
        <div class="bg-teal-900/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Versatilidade Estrutural e Operacional</h3>
          <p class="!mb-0">A tecnologia é flexível o suficiente para atender múltiplos segmentos sem perda de performance. Ao mesmo tempo, é robusta o bastante para suportar operações críticas, como suporte técnico, vendas, cobrança e comunicação 24/7.</p>
        </div>
      </div>

      <h2>5. Modelo Financeiro e de Receita</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-purple-900/30 border border-purple-500/40 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Recorrência Inteligente</h3>
          <p class="!mb-0">A recorrência dos contratos é natural e não depende de travas jurídicas. O cliente continua por perceber valor, e não por estar preso. A IA, uma vez implantada, se torna insubstituível por humanos — com custo 4x menor e funcionamento contínuo.</p>
        </div>
        
        <div class="bg-purple-900/30 border border-purple-500/40 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Comissão Comercial Simples e Escalável</h3>
          <p class="!mb-0">O comissionamento para closers é fixo (1 a 3% do valor da implementação, no primeiro mês), sem participação sobre a recorrência, tornando o modelo de incentivo limpo, escalável e fácil de administrar.</p>
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6 mb-8">
        <h3 class="!mt-0 !mb-3">Redução Progressiva de CAC & LTV Crescente</h3>
        <p class="!mb-0">Com o avanço da base de clientes e a automação do funil comercial (captação, qualificação e agendamento 100% por IA), o CAC médio tende a reduzir progressivamente. À medida que a IA aprende e se torna essencial para o cliente, o tempo de permanência (LTV) aumenta, sem necessidade de aumento proporcional do Custo dos Produtos Vendidos.</p>
      </div>

      <h2>6. Estratégia de Expansão Internacional</h2>
      
      <div class="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6 mb-8">
        <h3 class="!mt-0 !mb-4">Modelo Global</h3>
        <p class="mb-4">A NOCTA.I está apta a escalar internacionalmente com poucos ajustes. Seu modelo é 100% digital, cloud-based e adaptável por idioma e cultura.</p>
        
        <h4 class="!mt-6 !mb-3">Mercados Estratégicos:</h4>
        <ul class="space-y-2 mb-4">
          <li><strong>Brasileiros nos EUA:</strong> familiaridade com automação, alto custo CLT local, idioma compartilhado.</li>
          <li><strong>LATAM:</strong> cenário similar ao Brasil, com alta dependência de WhatsApp e processos manuais.</li>
          <li><strong>Europa (Portugal, Espanha, Alemanha, França):</strong> exigem performance, estabilidade e adequação regulatória. A NOCTA.I se adapta com facilidade a todos esses vetores.</li>
        </ul>
        
        <h4 class="!mt-6 !mb-3">Diferenciais Competitivos Globais:</h4>
        <ul class="space-y-1">
          <li>IA realmente contextual, versus bots genéricos do mercado.</li>
          <li>Integração completa com processos e dados reais.</li>
          <li>Capacidade de escalar sem reescrever tecnologia para cada país.</li>
        </ul>
      </div>

      <h2>7. Posicionamento Estratégico</h2>
      
      <div class="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-4">A NOCTA.I está posicionada na interseção de três macrotendências globais:</p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="text-center p-4 bg-black/30 rounded-lg">
            <div class="text-2xl mb-2">🤖</div>
            <strong>Automação inteligente</strong><br>
            <span class="text-sm text-gray-300">(AI Ops)</span>
          </div>
          <div class="text-center p-4 bg-black/30 rounded-lg">
            <div class="text-2xl mb-2">🚀</div>
            <strong>Human augmentation</strong><br>
            <span class="text-sm text-gray-300">(IA como extensão do time)</span>
          </div>
          <div class="text-center p-4 bg-black/30 rounded-lg">
            <div class="text-2xl mb-2">📈</div>
            <strong>Eficiência operacional</strong><br>
            <span class="text-sm text-gray-300">(Menos funcionários, mais tecnologia)</span>
          </div>
        </div>
        <p class="!mt-4 !mb-0">Este posicionamento favorece parcerias com fundos, aquisição estratégica por players de SaaS ou expansão como plataforma de infra operacional global e médias empresas.</p>
      </div>

      <div class="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-400/40 rounded-xl p-8 text-center">
        <h2 class="!mt-0 !mb-4">Considerações Finais</h2>
        <p class="!mb-4">A NOCTA.I apresenta uma estrutura empresarial sólida, enxuta e voltada para escalar com controle. Seu core tecnológico, combinado ao modelo operacional e financeiro, gera um negócio com margens altas, baixa fricção, e alta retenção — pronto para expansão nacional e internacional com mínimo ajuste estrutural.</p>
        <p class="!mb-0"><em>Trata-se de um ativo empresarial que opera com inteligência desde a base e cresce com estabilidade, previsibilidade e lógica exponencial.</em></p>
      </div>
    `
  },
  {
    id: 'documento-entregavel',
    title: 'Documento Entregável ao Cliente',
    content: `
      <h1>Documento Executivo - Visão de Entrega e Valor Percebido pelo Cliente NOCTA.I</h1>
      
      <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-8">
        <h2 class="!mt-0 !mb-4">Objetivo deste Documento</h2>
        <p class="!mb-0">Apresentar de forma aprofundada a proposta de entrega, os diferenciais de qualidade, os elementos que geram dependência e fidelização do cliente, e a lógica de escala que a NOCTA.I proporciona no front-end da experiência do usuário e do contratante.</p>
      </div>

      <h2>1. O QUE A NOCTA.I ENTREGA</h2>
      
      <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-4">A NOCTA.I entrega operações funcionais com IA aplicada, integradas à realidade do cliente, com o objetivo de automatizar o que antes dependia de pessoas:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-black/30 rounded-lg p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">IA consultiva para atendimento e vendas</h3>
            <p class="!mb-0 text-sm">Atua como SDR, assistente, suporte e pós-venda.</p>
          </div>
          <div class="bg-black/30 rounded-lg p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Automação total do ciclo comercial</h3>
            <p class="!mb-0 text-sm">Da primeira mensagem até a reativação de leads.</p>
          </div>
          <div class="bg-black/30 rounded-lg p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Operação 24/7 com empatia</h3>
            <p class="!mb-0 text-sm">Comunicação fluida, com linguagem ajustada ao tom e cultura da empresa.</p>
          </div>
          <div class="bg-black/30 rounded-lg p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Customização profunda</h3>
            <p class="!mb-0 text-sm">Nenhuma IA da NOCTA.I é genérica. Cada uma fala, escreve, responde e opera com as informações e estilo do cliente.</p>
          </div>
        </div>
      </div>

      <h2>2. QUALIDADE PERCEBIDA E CONCRETA</h2>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Precisão funcional</h3>
          <p class="!mb-0 text-sm">Todos os fluxos são validados, testados e auditados antes da ativação.</p>
        </div>
        
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Personalização de alta fidelidade</h3>
          <p class="!mb-0 text-sm">A IA incorpora vocabulário, hábitos, tom e cultura da empresa.</p>
        </div>
        
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Performance operacional</h3>
          <p class="!mb-0 text-sm">IA responde sem falhas, com cadência, sem esquecimento e sem fadiga.</p>
        </div>
        
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Velocidade de entrega</h3>
          <p class="!mb-0 text-sm">MVP funcional em até 6 a 30 dias (a depender da complexidade).</p>
        </div>
        
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Treinamento com dados reais</h3>
          <p class="!mb-0 text-sm">O que permite decisões mais coerentes, scripts mais efetivos e resultados mais rápidos.</p>
        </div>
        
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Atualizações e aprendizado constante</h3>
          <p class="!mb-0 text-sm">A IA melhora a cada interação, sem a necessidade de intervenção humana.</p>
        </div>
      </div>

      <h2>3. POR QUE O CLIENTE PRECISA DA NOCTA.I</h2>
      
      <div class="space-y-4 mb-8">
        <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
          <p class="!mb-0">Porque <strong>nenhuma equipe humana consegue fazer o que a IA faz 24 horas por dia</strong>, com padrão, empatia e sem esquecer nada.</p>
        </div>
        
        <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
          <p class="!mb-0">Porque hoje, <strong>as empresas perdem dinheiro em silêncios, esquecimentos, falta de follow-up, e sobrecarga manual</strong>.</p>
        </div>
        
        <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
          <p class="!mb-0">Porque <strong>contratar mais gente custa caro, treinar custa tempo, e manter um padrão é quase impossível</strong>.</p>
        </div>
        
        <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
          <p class="!mb-0">Porque a NOCTA.I entrega <strong>previsibilidade e escalabilidade</strong> — o que times humanos não garantem sozinhos.</p>
        </div>
      </div>

      <h2>4. POR QUE O CLIENTE DEPENDE DA NOCTA.I</h2>
      
      <div class="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-500/30 rounded-xl p-6 mb-8">
        <div class="space-y-4">
          <div class="flex items-start space-x-3">
            <span class="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
            <p class="!mb-0">A IA da NOCTA.I se torna o <strong>"cérebro operacional invisível"</strong> do cliente.</p>
          </div>
          <div class="flex items-start space-x-3">
            <span class="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
            <p class="!mb-0">Todos os leads, agendamentos, acompanhamentos e reativações passam a depender dessa estrutura.</p>
          </div>
          <div class="flex items-start space-x-3">
            <span class="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
            <p class="!mb-0">O time humano passa a focar só em pontos de decisão — o resto é automatizado.</p>
          </div>
          <div class="flex items-start space-x-3">
            <span class="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
            <p class="!mb-0">A lógica de comunicação, o CRM, os fluxos e os dados são integrados à IA.</p>
          </div>
          <div class="flex items-start space-x-3">
            <span class="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
            <p class="!mb-0"><strong>Tirar a IA seria o mesmo que desligar o time comercial por completo.</strong></p>
          </div>
        </div>
      </div>

      <h2>5. POR QUE O CLIENTE NÃO VAI TROCAR A NOCTA.I</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-purple-900/30 border border-purple-500/40 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Fidelidade por Moldagem</h3>
          <p class="!mb-0">Porque a IA se molda com tanta fidelidade que seria impossível "recomeçar do zero" com outro provedor.</p>
        </div>
        
        <div class="bg-purple-900/30 border border-purple-500/40 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Custo-Benefício Imbatível</h3>
          <p class="!mb-0">4x mais barato que um humano CLT, com performance contínua.</p>
        </div>
        
        <div class="bg-purple-900/30 border border-purple-500/40 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Qualidade Visível</h3>
          <p class="!mb-0">A qualidade do atendimento e vendas se tornam um ativo visível da empresa.</p>
        </div>
        
        <div class="bg-purple-900/30 border border-purple-500/40 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Estrutura Concentrada</h3>
          <p class="!mb-0">Os dados, fluxos e resultados ficam concentrados em uma estrutura estável e viva.</p>
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-green-600/20 to-green-800/20 border border-green-400/40 rounded-xl p-6 mb-8 text-center">
        <h3 class="!mt-0 !mb-3 text-green-300">A Verdade Simples</h3>
        <p class="!mb-0 text-lg"><strong>A IA da NOCTA.I funciona — e empresas não trocam o que funciona perfeitamente.</strong></p>
      </div>

      <h2>6. ESCALA PARA O CLIENTE</h2>
      
      <div class="space-y-4 mb-8">
        <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Crescimento Sem Contratação</h3>
          <p class="!mb-0">O cliente pode crescer em número de atendimentos, vendas ou suporte sem contratar mais ninguém.</p>
        </div>
        
        <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Escala Horizontal</h3>
          <p class="!mb-0">A estrutura da IA escala horizontalmente: mais canais, mais fluxos, mais leads — tudo sem perder qualidade.</p>
        </div>
        
        <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Estabilidade Operacional</h3>
          <p class="!mb-0">A IA não trava, não cansa, não falta, não muda de humor. Isso cria estabilidade e consistência.</p>
        </div>
        
        <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Eficiência de Equipe</h3>
          <p class="!mb-0">Operações que dependiam de 4-10 pessoas, agora são geridas por 1 pessoa com IA.</p>
        </div>
        
        <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Crescimento Inteligente</h3>
          <p class="!mb-0">A empresa cresce em atendimento e conversão, mas não cresce em folha de pagamento.</p>
        </div>
      </div>

      <h2>7. DIFERENCIAIS DO FRONT NOCTA.I</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Integração Completa</h3>
          <p class="!mb-0">Integração nativa com WhatsApp, e-mail, CRM, ERPs e plataformas de vendas.</p>
        </div>
        
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Voz Real</h3>
          <p class="!mb-0">Respostas com voz real (voz do dono, gestor ou colaborador, gerando conexão emocional).</p>
        </div>
        
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Capacidade Multimodal</h3>
          <p class="!mb-0">Texto, áudio, imagem e documentos.</p>
        </div>
        
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Dashboards em Tempo Real</h3>
          <p class="!mb-0">Dashboards e indicadores gerenciais em tempo real.</p>
        </div>
        
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Aprendizado Contínuo</h3>
          <p class="!mb-0">Acompanhamento de performance da IA com aprendizado contínuo.</p>
        </div>
        
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Automação Completa</h3>
          <p class="!mb-0">Funil de atendimento e vendas automatizado ponta a ponta + Reativação automatizada de leads inativos.</p>
        </div>
      </div>

      <h2>8. VALOR ESTRUTURAL PERCEBIDO PELO CLIENTE</h2>
      
      <div class="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6 mb-8">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="!mt-0 !mb-3">Transformação Operacional</h3>
            <p class="!mb-4">O cliente percebe que a empresa ficou mais rápida, mais organizada e mais eficiente.</p>
            
            <h3 class="!mt-6 !mb-3">Alívio Gerencial</h3>
            <p class="!mb-0">Os gestores sentem alívio operacional — ganham tempo, ganham dados e perdem menos vendas.</p>
          </div>
          <div>
            <h3 class="!mt-0 !mb-3">Foco Estratégico</h3>
            <p class="!mb-4">O time humano foca onde é insubstituível: em decisões, fechamento e relacionamento.</p>
            
            <h3 class="!mt-6 !mb-3">Crescimento Lógico</h3>
            <p class="!mb-0">O cliente entende que o crescimento agora depende mais de lógica do que de gente.</p>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-400/40 rounded-xl p-8 text-center">
        <h2 class="!mt-0 !mb-4">Conclusão</h2>
        <p class="!mb-4 text-lg">A NOCTA.I entrega mais do que automação: entrega <strong>estrutura, presença, inteligência e eficiência contínua</strong>. O cliente sente o valor, vive a diferença e se torna dependente não por obrigação contratual, mas por inteligência operacional.</p>
        <p class="!mb-0 text-xl"><em>A IA da NOCTA.I vira um membro estratégico da equipe do cliente — e um motor de escala que não pode ser desligado.</em></p>
      </div>
    `
  },
  {
    id: 'modelo-faturamento',
    title: 'Modelo de Faturamento',
    content: `
      <h1>Documento Executivo - Modelo de Faturamento, Margem e Escalabilidade Financeira da NOCTA.I</h1>
      
      <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-8">
        <h2 class="!mt-0 !mb-4">Objetivo deste Documento</h2>
        <p class="!mb-0">Apresentar com clareza a estrutura de faturamento projetada da NOCTA.I, os níveis de margem, o potencial de escala com base no volume de clientes, e a lógica financeira de reinvestimento, sustentabilidade e previsibilidade com base nos produtos SALES AI e OPS AI.</p>
      </div>

      <h2>1. MODELO DE NEGÓCIO</h2>
      
      <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-6">A NOCTA.I opera com dois produtos centrais:</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-black/40 border border-purple-500/30 rounded-xl p-6">
            <h3 class="!mt-0 !mb-3 text-purple-300">SALES AI™ — IA para Vendas e Atendimento</h3>
            <p class="!mb-4 text-sm">Automatiza a etapa comercial de empresas (atendimento inicial, qualificação, agendamento, follow-up e recuperação de leads), operando 24/7 com linguagem humanizada e lógica de negócio.</p>
            
            <div class="space-y-2">
              <div class="bg-green-900/30 rounded-lg p-3">
                <div class="text-sm text-green-300">Ticket de entrada</div>
                <div class="text-lg font-bold text-white">R$ 3.000</div>
                <div class="text-xs text-gray-400">ex: consultório, profissional liberal</div>
              </div>
              <div class="bg-green-900/30 rounded-lg p-3">
                <div class="text-sm text-green-300">Ticket avançado</div>
                <div class="text-lg font-bold text-white">R$ 10.000</div>
                <div class="text-xs text-gray-400">ex: grandes clínicas, operações multicanais</div>
              </div>
              <div class="bg-purple-900/30 rounded-lg p-3">
                <div class="text-sm text-purple-300">Ticket médio (ajustado)</div>
                <div class="text-xl font-bold text-white">R$ 5.200</div>
                <div class="text-xs text-gray-400">~40% da metade do ticket máximo, considerando alta recorrência de negócios médios</div>
              </div>
            </div>
          </div>
          
          <div class="bg-black/40 border border-blue-500/30 rounded-xl p-6">
            <h3 class="!mt-0 !mb-3 text-blue-300">OPS AI™ — IA para Operação Administrativa e Backoffice</h3>
            <p class="!mb-4 text-sm">Automatiza processos internos, integrações, fluxos financeiros, suporte técnico, interpretação de dados e comunicação operacional em empresas com maior complexidade administrativa.</p>
            
            <div class="space-y-2">
              <div class="bg-blue-900/30 rounded-lg p-3">
                <div class="text-sm text-blue-300">Ticket de entrada</div>
                <div class="text-lg font-bold text-white">R$ 7.000</div>
                <div class="text-xs text-gray-400">ex: SaaS simples, agências</div>
              </div>
              <div class="bg-blue-900/30 rounded-lg p-3">
                <div class="text-sm text-blue-300">Ticket avançado</div>
                <div class="text-lg font-bold text-white">R$ 25.000</div>
                <div class="text-xs text-gray-400">ex: fintechs, plataformas, operações intensas</div>
              </div>
              <div class="bg-purple-900/30 rounded-lg p-3">
                <div class="text-sm text-purple-300">Ticket médio (ajustado)</div>
                <div class="text-xl font-bold text-white">R$ 10.000</div>
                <div class="text-xs text-gray-400">~40% da metade do ticket máximo, aplicado a maioria dos clientes com operação estruturada, mas não crítica</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>2. MENSALIDADES E PREVISIBILIDADE</h2>
      
      <div class="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-6">As mensalidades são cobradas após a entrega da automação validada (em até 30 dias), com base no volume de fluxos, complexidade e canais ativos.</p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="space-y-4">
            <div class="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
              <div class="text-sm text-green-300">Mensalidade mínima</div>
              <div class="text-2xl font-bold text-white">R$ 1.000</div>
            </div>
            <div class="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
              <div class="text-sm text-blue-300">Mensalidade por cliente AVANÇADO (OPS AI)</div>
              <div class="text-2xl font-bold text-white">R$ 2.500</div>
            </div>
          </div>
          
          <div class="space-y-4">
            <div class="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
              <div class="text-sm text-red-300">Custo de servidor estimado por cliente Médico básico</div>
              <div class="text-lg font-bold text-white">R$ 80-200</div>
            </div>
            <div class="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
              <div class="text-sm text-red-300">Custo de servidor estimado por cliente Clínica grande</div>
              <div class="text-lg font-bold text-white">R$ 450-600</div>
            </div>
          </div>
        </div>
        
        <div class="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4 mb-4">
          <div class="text-sm text-purple-300">ROI operacional (gasto x margem)</div>
          <div class="text-xl font-bold text-white">mínimo de 3x até 5x sobre o custo mensal com servidor</div>
        </div>
        
        <p class="!mb-0 text-sm text-gray-300">Todos os clientes operam com contratos de 3, 6 ou 12 meses, garantindo previsibilidade e composição de MRR (Monthly Recurring Revenue).</p>
      </div>

      <h2>3. PROJEÇÃO DE FATURAMENTO ESCALADO</h2>
      
      <div class="overflow-x-auto mb-8">
        <table class="w-full border-collapse bg-black/40 border border-white/10 rounded-xl overflow-hidden">
          <thead>
            <tr class="bg-purple-900/30">
              <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">N° de Clientes Ativos</th>
              <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Receita Setup (Ticket Médio SALES AI)</th>
              <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Receita Mensal (MRR Médio)</th>
              <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Receita Total (Mês 1)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">50 clientes</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 260.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 50.000</td>
              <td class="border border-purple-500/20 p-4 text-purple-300 font-bold">R$ 310.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">100 clientes</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 520.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 100.000</td>
              <td class="border border-purple-500/20 p-4 text-purple-300 font-bold">R$ 620.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">200 clientes</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 1.040.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 200.000</td>
              <td class="border border-purple-500/20 p-4 text-purple-300 font-bold">R$ 1.240.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">300 clientes</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 1.560.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 300.000</td>
              <td class="border border-purple-500/20 p-4 text-purple-300 font-bold">R$ 1.860.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">500 clientes</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 2.600.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 500.000</td>
              <td class="border border-purple-500/20 p-4 text-purple-300 font-bold">R$ 3.100.000</td>
            </tr>
            <tr class="hover:bg-white/5 bg-purple-900/20">
              <td class="border border-purple-500/20 p-4 text-white font-bold">1.000 clientes</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold text-lg">R$ 5.200.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold text-lg">R$ 1.000.000</td>
              <td class="border border-purple-500/20 p-4 text-purple-300 font-bold text-lg">R$ 6.200.000</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-0"><strong>Observação:</strong> Após o primeiro mês, o crescimento da MRR compõe o fluxo contínuo da operação com alta retenção.</p>
      </div>

      <h2>4. MARGEM OPERACIONAL E ESCALA HUMANA</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Estrutura de Equipe</h3>
          <p class="!mb-4">A equipe técnica da NOCTA.I é enxuta e não precisa escalar extremamente proporcionalmente à base.</p>
          <div class="bg-black/30 rounded-lg p-4">
            <p class="!mb-2"><strong>Cada squad</strong> (produto + integração + CS) consegue sustentar entre:</p>
            <div class="text-2xl font-bold text-blue-300">30 a 50 clientes ativos</div>
            <p class="!mb-0 text-sm text-gray-400">simultâneos com folga</p>
          </div>
          <p class="!mb-0 mt-4 text-sm">Com automações de onboarding, suporte mínimo e padronização do framework, a escalabilidade é controlada.</p>
        </div>
        
        <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Margem por Cliente (projeção por cliente médio)</h3>
          <div class="space-y-3">
            <div class="bg-green-900/40 rounded-lg p-3">
              <div class="text-sm text-green-300">Receita mensal média</div>
              <div class="text-xl font-bold text-white">R$ 1.000</div>
            </div>
            <div class="bg-red-900/40 rounded-lg p-3">
              <div class="text-sm text-red-300">Custo médio mensal (infraestrutura)</div>
              <div class="text-xl font-bold text-white">R$ 200</div>
            </div>
            <div class="bg-purple-900/40 rounded-lg p-3">
              <div class="text-sm text-purple-300">Margem líquida bruta estimada</div>
              <div class="text-2xl font-bold text-white">R$ 800 (80%)</div>
              <div class="text-xs text-gray-400">(fora impostos)</div>
            </div>
          </div>
          <div class="mt-4 bg-yellow-900/30 rounded-lg p-3">
            <p class="!mb-0 text-sm">Com esse modelo, a margem por <strong>100 clientes</strong> ultrapassa <strong class="text-yellow-300">R$ 80.000 mensais</strong>.</p>
          </div>
        </div>
      </div>

      <h2>5. REINVESTIMENTO E CRESCIMENTO</h2>
      
      <div class="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-6">A estratégia financeira da NOCTA.I prevê reinvestimento parcial da margem líquida para ampliação e estabilidade da operação.</p>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-black/40 rounded-lg p-4">
            <h3 class="!mt-0 !mb-2 text-indigo-300">Primeiros 3 meses</h3>
            <div class="text-2xl font-bold text-white mb-2">35%</div>
            <p class="!mb-0 text-sm text-gray-300">de reinvestimento sobre o lucro líquido</p>
          </div>
          
          <div class="bg-black/40 rounded-lg p-4">
            <h3 class="!mt-0 !mb-2 text-indigo-300">Até 6 meses</h3>
            <div class="text-2xl font-bold text-white mb-2">30%</div>
            <p class="!mb-0 text-sm text-gray-300">reinvestido, com foco em marketing, squads e estrutura</p>
          </div>
          
          <div class="bg-black/40 rounded-lg p-4">
            <h3 class="!mt-0 !mb-2 text-indigo-300">Após 6 meses</h3>
            <div class="text-lg font-bold text-white mb-2">Diluído</div>
            <p class="!mb-0 text-sm text-gray-300">o reinvestimento é diluído conforme a empresa consolida MRR e adquire previsibilidade</p>
          </div>
        </div>
        
        <div class="mt-6 bg-purple-900/30 rounded-lg p-4">
          <p class="!mb-0">É totalmente possível em caso de mentorias, consultorias para melhorar a performance da NOCTA.I</p>
        </div>
      </div>

      <h2>6. RETENÇÃO E ESTABILIDADE</h2>
      
      <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6 mb-8">
        <h3 class="!mt-0 !mb-4">O churn da NOCTA.I tende a ser mínimo por:</h3>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-teal-400 rounded-full"></span>
              <span>Sensação de insubstituibilidade da IA</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-teal-400 rounded-full"></span>
              <span>ROI visível na operação</span>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-teal-400 rounded-full"></span>
              <span>Redução de equipe e dependência operacional direta da IA</span>
            </div>
          </div>
        </div>
        
        <div class="bg-black/40 rounded-lg p-4">
          <p class="!mb-0">A composição de contratos escalonados <strong>(3, 6 e 12 meses)</strong> dá estabilidade ao caixa e permite projeções confiáveis.</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-400/40 rounded-xl p-8 mb-8">
        <h2 class="!mt-0 !mb-4 text-center">Conclusão</h2>
        <p class="!mb-4 text-center">A NOCTA.I combina um modelo de alta margem com baixa fricção operacional, escalabilidade comprovada e receita recorrente sustentável. Com estrutura técnica mínima, clientes fidelizados e entrega contínua de valor, o crescimento da empresa é exponencial por construção e financeiramente viável com custo marginal previsível.</p>
        <p class="!mb-0 text-center text-lg"><em>Trata-se de um negócio com lógica de software, entrega de serviço e recorrência de plataforma — operando com controle, previsibilidade e alto retorno.</em></p>
      </div>

      <div class="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-500/30 rounded-xl p-6">
        <h2 class="!mt-0 !mb-4">Escala Real Implica Novos Desafios — e a NOCTA.I Já Tem a Resposta</h2>
        
        <p class="!mb-4">A NOCTA.I foi construída para operar com alta margem, baixo custo fixo e processos inteligentes. No entanto, à medida que a base de clientes cresce, a natureza da operação naturalmente evolui — e com ela, surgem novas demandas que exigem preparação estrutural.</p>
        
        <p class="!mb-4">Com 200, 300, 500 clientes ativos, a entrega manual e consultiva começa a enfrentar gargalos previsíveis:</p>
        
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-red-900/30 rounded-lg p-4 text-center">
            <div class="text-2xl mb-2">👥</div>
            <p class="!mb-0 text-sm">A necessidade de mais analistas para implantação</p>
          </div>
          <div class="bg-red-900/30 rounded-lg p-4 text-center">
            <div class="text-2xl mb-2">⚡</div>
            <p class="!mb-0 text-sm">A sobrecarga no pós-venda com múltiplas contas simultâneas</p>
          </div>
          <div class="bg-red-900/30 rounded-lg p-4 text-center">
            <div class="text-2xl mb-2">📊</div>
            <p class="!mb-0 text-sm">O aumento na complexidade de controle e padronização entre projetos</p>
          </div>
        </div>
        
        <p class="!mb-4">Esses sinais não são falhas — são marcos naturais de quem está escalando de forma saudável. E ao contrário de muitas empresas que são pegas de surpresa nesse momento, a NOCTA.I já estruturou a resposta: <strong>seu próprio ambiente SaaS</strong>.</p>
        
        <p class="!mb-4">Estamos iniciando a fase de construção de um produto interno, pensado para:</p>
        
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-green-900/30 rounded-lg p-4">
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Organizar a implantação por etapas automáticas</span>
            </div>
          </div>
          <div class="bg-green-900/30 rounded-lg p-4">
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Reduzir drasticamente o esforço manual no setup</span>
            </div>
          </div>
          <div class="bg-green-900/30 rounded-lg p-4">
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Padronizar o onboarding de IA com lógicas parametrizadas</span>
            </div>
          </div>
          <div class="bg-green-900/30 rounded-lg p-4">
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Integrar o cliente diretamente na evolução da sua instância</span>
            </div>
          </div>
        </div>
        
        <p class="!mb-4">Com esse salto, deixamos de ser uma empresa de "implantações manuais com IA" para nos tornarmos uma <strong>plataforma SaaS de IA aplicada</strong>, com alto grau de automação, múltiplos fluxos prontos e capacidade real de escalar para mil clientes — sem aumentar proporcionalmente a equipe.</p>
        
        <div class="bg-purple-900/40 rounded-lg p-4 text-center">
          <p class="!mb-0 text-lg"><strong>Este é o momento exato de virar a chave. A NOCTA.I está entrando na fase 2 do seu crescimento: a da estrutura que suporta escala de verdade.</strong></p>
        </div>
      </div>
    `
  },
  {
    id: 'saas-segunda-fase',
    title: 'SaaS da NOCTA.I – 2ª Fase',
    content: `
      <h1>Documento Executivo - SaaS da NOCTA.I (Visão de Escala)</h1>
      
      <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-8">
        <h2 class="!mt-0 !mb-4">Contexto Estratégico</h2>
        <p class="!mb-0">A NOCTA.I, consolidada como empresa de automação inteligente com IA aplicada, avança para a construção de sua estrutura de escala definitiva: o SaaS da NOCTA.I. Este novo braço da operação nasce para resolver o maior desafio de empresas digitais em crescimento: manter a excelência de entrega sem inflar o time operacional. É a materialização de um backoffice invisível, inteligente, modular e escalável.</p>
      </div>
      
      <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-4">A entrega que hoje depende de processos assistidos por humanos passa a ser gerenciada por uma interface de gestão integrada, simples, intuitiva e com performance real comprovada.</p>
        <p class="!mb-0">Este documento detalha a visão estratégica, técnica e comercial do SaaS da NOCTA.I, preparado para escalar de dezenas para milhares de clientes sem fricção.</p>
      </div>

      <h2>🔍 Visão Geral do SaaS da NOCTA.I</h2>
      
      <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-4 mb-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-green-300">3 meses</div>
          <div class="text-sm text-gray-300">de produção</div>
        </div>
      </div>
      
      <div class="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-6">O SaaS da NOCTA.I é uma plataforma all-in-one de automação operacional e comercial com inteligência artificial aplicada. Ele reúne em um único sistema todos os elementos necessários para que uma empresa organize, automatize e escale seus fluxos — sem necessidade de equipe técnica.</p>
        
        <h3 class="!mt-0 !mb-4">Estrutura All-In-One</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-black/40 rounded-lg p-4">
            <div class="flex items-center space-x-3 mb-2">
              <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>CRM visual estilo kanban</span>
            </div>
          </div>
          <div class="bg-black/40 rounded-lg p-4">
            <div class="flex items-center space-x-3 mb-2">
              <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Editor visual de bots com IA treinável</span>
            </div>
          </div>
          <div class="bg-black/40 rounded-lg p-4">
            <div class="flex items-center space-x-3 mb-2">
              <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Calendário organizacional colaborativo</span>
            </div>
          </div>
          <div class="bg-black/40 rounded-lg p-4">
            <div class="flex items-center space-x-3 mb-2">
              <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Notas estilo Notion</span>
            </div>
          </div>
          <div class="bg-black/40 rounded-lg p-4">
            <div class="flex items-center space-x-3 mb-2">
              <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Dashboard 360 de operação, leads, vendas e desempenho</span>
            </div>
          </div>
          <div class="bg-black/40 rounded-lg p-4">
            <div class="flex items-center space-x-3 mb-2">
              <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>WhatsApp e canais integrados (Chat interno de sites, e-mail, etc.)</span>
            </div>
          </div>
          <div class="bg-black/40 rounded-lg p-4 md:col-span-2">
            <div class="flex items-center space-x-3 mb-2">
              <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Chat interno para site e fluxos automatizados com voz e imagem</span>
            </div>
          </div>
        </div>
        
        <h3 class="!mt-6 !mb-4">Funções Avançadas</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="space-y-3">
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Treinamento de IA com dados reais do cliente</span>
              </div>
            </div>
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Histórico de interações completo</span>
              </div>
            </div>
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Biblioteca de fluxos prontos por segmento</span>
              </div>
            </div>
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Configuração de funil de vendas e atendimento por nicho</span>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Monitoramento em tempo real das interações da IA</span>
              </div>
            </div>
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Relatórios e métricas com dados acionáveis</span>
              </div>
            </div>
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Abertura de chamados técnicos via painel</span>
              </div>
            </div>
            <div class="bg-blue-900/30 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="text-sm">Teste em tempo real de fluxos configurados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6 mb-8">
        <h3 class="!mt-0 !mb-4">Operação Assistida ou Autônoma</h3>
        <p class="!mb-4">O cliente poderá:</p>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div class="bg-black/40 rounded-lg p-4">
            <h4 class="!mt-0 !mb-2 text-teal-300">Configuração Autônoma</h4>
            <p class="!mb-0 text-sm">Realizar toda a configuração sozinho, com assistente guiado e tutoriais visuais</p>
          </div>
          <div class="bg-black/40 rounded-lg p-4">
            <h4 class="!mt-0 !mb-2 text-teal-300">Implementação Consultiva</h4>
            <p class="!mb-0 text-sm">Solicitar implementação consultiva pela própria equipe da NOCTA.I</p>
          </div>
        </div>
        <div class="bg-green-900/30 rounded-lg p-4">
          <p class="!mb-0 text-center"><strong>O sistema será intuitivo o suficiente para permitir IA 100% ativa em menos de 1 hora</strong>, mesmo para usuários sem conhecimento técnico.</p>
        </div>
      </div>

      <h2>🎯 Objetivo Central</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-xl p-6">
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-orange-400 rounded-full"></span>
              <span>Automatizar o setup e entrega</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-orange-400 rounded-full"></span>
              <span>Reduzir a dependência de equipe interna</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-orange-400 rounded-full"></span>
              <span>Escalar a operação da NOCTA.I com margem alta</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-orange-400 rounded-full"></span>
              <span>Transformar o serviço em plataforma replicável e comercializável</span>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">🧠 Posicionamento Estratégico</h3>
          <p class="!mb-4 text-sm">O SaaS da NOCTA.I opera no cruzamento entre:</p>
          <div class="space-y-2">
            <div class="bg-black/40 rounded-lg p-3">
              <strong class="text-purple-300">AI Ops</strong> — automação de processos com IA aplicada
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <strong class="text-purple-300">Human Augmentation</strong> — IA como força de apoio à operação humana
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <strong class="text-purple-300">Tech-enabled Services</strong> — modelo híbrido de SaaS + inteligência estratégica
            </div>
          </div>
          <p class="!mb-0 text-sm mt-4">Esse posicionamento permite manter o valor percebido alto, justificar tickets premium e evitar comparações com soluções genéricas de mercado.</p>
        </div>
      </div>

      <h2>💎 Diferenciais e Qualidades</h2>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-green-300">Lock-in Natural</h3>
          <p class="!mb-0 text-sm">O cliente permanece pelo resultado, não pelo contrato</p>
        </div>
        
        <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-blue-300">Preço Unificado</h3>
          <p class="!mb-0 text-sm">Setup e mensalidade no mesmo valor: de R$ 997 a R$ 3.497</p>
        </div>
        
        <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-purple-300">Entrega Imediata</h3>
          <p class="!mb-0 text-sm">Entrega invisível e imediata - 1-2 horas</p>
        </div>
        
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-teal-300">IA Evolutiva</h3>
          <p class="!mb-0 text-sm">IA que aprende com dados reais da empresa, e evolui com ela</p>
        </div>
        
        <div class="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-orange-300">Redução Real</h3>
          <p class="!mb-0 text-sm">Redução real de headcount operacional</p>
        </div>
        
        <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-red-300">Zero Fricção</h3>
          <p class="!mb-0 text-sm">Não exige conhecimento técnico</p>
        </div>
        
        <div class="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-yellow-300">Time Mínimo</h3>
          <p class="!mb-0 text-sm">Time mínimo com capacidade de atendimento exponencial</p>
        </div>
        
        <div class="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-indigo-300">Customização Total</h3>
          <p class="!mb-0 text-sm">Customização estética, tonal e lógica por nicho ou cliente</p>
        </div>
        
        <div class="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border border-pink-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-pink-300">Sistema Modular</h3>
          <p class="!mb-0 text-sm">CRM, bot, calendário, IA — integrados ou avulsos</p>
        </div>
        
        <div class="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-cyan-300">White-label</h3>
          <p class="!mb-0 text-sm">White-label possível para agências ou times parceiros</p>
        </div>
        
        <div class="bg-gradient-to-br from-lime-900/30 to-lime-800/20 border border-lime-500/30 rounded-xl p-6 md:col-span-2">
          <h3 class="!mt-0 !mb-3 text-lime-300">Internacionalização Pronta</h3>
          <p class="!mb-0 text-sm">Sistema em português, inglês e espanhol</p>
        </div>
      </div>

      <h2>💰 Modelo Comercial e Receita</h2>
      
      <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6 mb-8">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="!mt-0 !mb-4">Estrutura de Preços</h3>
            <div class="bg-black/40 rounded-lg p-4 mb-4">
              <div class="text-center">
                <div class="text-sm text-green-300">Setup inicial = Mensalidade</div>
                <div class="text-2xl font-bold text-white">R$ 997 - R$ 3.497</div>
              </div>
            </div>
            <p class="!mb-0 text-sm">Valores variam conforme complexidade e volume</p>
          </div>
          
          <div>
            <h3 class="!mt-0 !mb-4">Fatores de Precificação</h3>
            <div class="space-y-2">
              <div class="bg-black/40 rounded-lg p-3">
                <div class="flex items-center space-x-3">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span class="text-sm">Número de atendentes</span>
                </div>
              </div>
              <div class="bg-black/40 rounded-lg p-3">
                <div class="flex items-center space-x-3">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span class="text-sm">Volume de atendimentos por dia</span>
                </div>
              </div>
              <div class="bg-black/40 rounded-lg p-3">
                <div class="flex items-center space-x-3">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span class="text-sm">Números integrados do WhatsApp</span>
                </div>
              </div>
              <div class="bg-black/40 rounded-lg p-3">
                <div class="flex items-center space-x-3">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span class="text-sm">Quantidade de fluxos simultâneos e bots ativos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6 grid md:grid-cols-2 gap-4">
          <div class="bg-blue-900/30 rounded-lg p-4">
            <h4 class="!mt-0 !mb-2 text-blue-300">Receita Recorrente</h4>
            <p class="!mb-0 text-sm">MRR crescente, com alta previsibilidade e churn reduzido</p>
          </div>
          <div class="bg-purple-900/30 rounded-lg p-4">
            <h4 class="!mt-0 !mb-2 text-purple-300">Modelo Comercial</h4>
            <p class="!mb-0 text-sm">Fechamento por closers ou self-service via plataforma</p>
          </div>
        </div>
      </div>

      <h2>📈 Projeção de Escala e Receita</h2>
      
      <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4 mb-6">
        <div class="text-center">
          <div class="text-sm text-purple-300">Ticket Médio Base</div>
          <div class="text-3xl font-bold text-white">R$ 1.997</div>
          <div class="text-xs text-gray-400">(Setup + Mensalidade)</div>
        </div>
      </div>
      
      <div class="overflow-x-auto mb-8">
        <table class="w-full border-collapse bg-black/40 border border-white/10 rounded-xl overflow-hidden">
          <thead>
            <tr class="bg-purple-900/30">
              <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Clientes Ativos</th>
              <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Receita Bruta Mensal</th>
              <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Receita Anual Estimada</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">500</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 998.500</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 11.982.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">1.000</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 1.997.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 23.964.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">2.000</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 3.994.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 47.928.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">3.000</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 5.991.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 71.892.000</td>
            </tr>
            <tr class="hover:bg-white/5">
              <td class="border border-purple-500/20 p-4 text-white font-medium">5.000</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold">R$ 9.985.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold">R$ 119.820.000</td>
            </tr>
            <tr class="hover:bg-white/5 bg-purple-900/20">
              <td class="border border-purple-500/20 p-4 text-white font-bold">10.000</td>
              <td class="border border-purple-500/20 p-4 text-green-300 font-bold text-lg">R$ 19.970.000</td>
              <td class="border border-purple-500/20 p-4 text-blue-300 font-bold text-lg">R$ 239.640.000</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Margem Operacional Estimada</h3>
          <div class="space-y-3">
            <div class="bg-black/40 rounded-lg p-3">
              <div class="text-sm text-red-300">Custo por cliente</div>
              <div class="text-lg font-bold text-white">R$ 300–500 (máx.)</div>
              <div class="text-xs text-gray-400">servidor + API média</div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="text-sm text-green-300">ROI estimado por cliente ativo</div>
              <div class="text-xl font-bold text-white">4x a 6x</div>
              <div class="text-xs text-gray-400">sobre o custo</div>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Reinvestimento Escalonado</h3>
          <div class="space-y-3">
            <div class="bg-black/40 rounded-lg p-3">
              <div class="text-sm text-blue-300">Primeiros 3 meses</div>
              <div class="text-2xl font-bold text-white">35%</div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="text-sm text-blue-300">Até o sexto mês</div>
              <div class="text-2xl font-bold text-white">30%</div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="text-sm text-blue-300">Após consolidação</div>
              <div class="text-lg font-bold text-white">Redução gradual</div>
              <div class="text-xs text-gray-400">conforme ROI e CAC diminuem</div>
            </div>
          </div>
        </div>
      </div>

      <h2>🔐 Segurança, Privacidade e Exclusividade</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Isolamento Total</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-red-400 rounded-full"></span>
              <span class="text-sm">Dados dos clientes são armazenados e processados de forma isolada</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-red-400 rounded-full"></span>
              <span class="text-sm">Nenhum dado alimenta outro cliente: 100% confidencialidade</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-red-400 rounded-full"></span>
              <span class="text-sm">Conversas, fluxos e IAs são exclusivos por operação</span>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Experiência Transparente</h3>
          <div class="bg-black/40 rounded-lg p-4">
            <p class="!mb-0 text-center">O cliente sente o efeito direto, <strong>sem perceber a complexidade técnica</strong></p>
          </div>
        </div>
      </div>

      <h2>📌 Fase Atual e Projeções</h2>
      
      <div class="space-y-6 mb-8">
        <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Situação Atual</h3>
          <p class="!mb-0">Atualmente, o SaaS da NOCTA.I encontra-se em fase de estruturação visual e lógica.</p>
        </div>
        
        <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Próxima Call (Segunda-feira)</h3>
          <p class="!mb-0">Na próxima call de segunda-feira será apresentado o primeiro protótipo funcional do front.</p>
        </div>
        
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Primeira Versão Completa</h3>
          <p class="!mb-0">A primeira versão com funcionalidades completas estará disponível em <strong>2 meses</strong>.</p>
        </div>
        
        <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Funcionalidade Estratégica Adicional</h3>
          <p class="!mb-0">Em 3 a 4 meses, será incorporada uma funcionalidade estratégica adicional: o <strong>NOCTAPAY</strong>, um sistema proprietário de processamento de pagamentos.</p>
        </div>
      </div>

      <h2>💳 NOCTAPAY — Monetização por Transação</h2>
      
      <div class="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-6">O NOCTAPAY será o braço financeiro da NOCTA.I, integrado ao SaaS e pronto para:</p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="space-y-3">
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span class="text-sm">Processar cobranças de mensalidades (ex: clientes de uma agência)</span>
              </div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span class="text-sm">Receber pagamentos de produtos ou serviços (ex: consulta médica)</span>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span class="text-sm">Oferecer taxas reduzidas para fidelização</span>
              </div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span class="text-sm">Lucrar sobre transações (entrada, saída e cobrança)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-green-900/30 rounded-lg p-4 mb-4">
          <p class="!mb-2">Essa funcionalidade criará uma <strong>nova linha de receita contínua</strong>, com monetização escalável por transação.</p>
          <p class="!mb-0">Será possível gerar uma nova forma de lock-in operacional: o cliente não apenas usa a IA, como também cobra e recebe por ela na mesma plataforma.</p>
        </div>
        
        <div class="bg-purple-900/30 rounded-lg p-4 text-center">
          <p class="!mb-0">Na próxima fase, explicaremos em detalhe onde mora o verdadeiro dinheiro — e como o NOCTAPAY transforma o SaaS em uma <strong>plataforma financeira lucrativa</strong>.</p>
        </div>
      </div>
    `
  },
  {
    id: 'noctapay-terceira-fase',
    title: 'NOCTAPAY – 3ª Fase',
    content: `
      <h1>Documento Estratégico de Escopo — NOCTAPAY by NOCTA.I</h1>
      
      <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-0 text-center"><em>(nome fictício)</em></p>
      </div>
      
      <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
        <p class="!mb-0 text-center"><strong>Vamos explicar em detalhes na call de segunda-feira, o que é esse projeto, o que é swipy</strong></p>
      </div>
      
      <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-xl p-6 mb-8">
        <h2 class="!mt-0 !mb-4">Visão Geral</h2>
        <p class="!mb-4">O NOCTAPAY é a unidade de serviços financeiros digitais da NOCTA.I, concebida como extensão natural do ecossistema de automação com IA. Projetada para ser a infraestrutura de pagamento dos nossos clientes (médicos, clínicas, agências e outros prestadores de serviço), a solução opera como uma plataforma completa, segura, instantânea e escalável.</p>
        
        <h2 class="!mt-6 !mb-4">Objetivo</h2>
        <p class="!mb-0">Oferecer uma conta digital completa, com funcionalidades de gateway, processamento de pagamentos, gestão financeira e cobrança automatizada via WhatsApp, integrada nativamente à plataforma NOCTA.I e com potencial de expansão para o mercado externo.</p>
      </div>

      <h2>1. Estrutura Operacional</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Infraestrutura</h3>
          <div class="bg-black/40 rounded-lg p-4">
            <p class="!mb-0 text-center"><strong>white-label via Swipy</strong></p>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Custo Operacional Base</h3>
          <div class="space-y-3">
            <div class="bg-black/40 rounded-lg p-3">
              <div class="text-sm text-red-300">Por conta ativa/mês</div>
              <div class="text-xl font-bold text-white">R$ 2,50</div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="text-sm text-red-300">Por transação executada</div>
              <div class="text-xl font-bold text-white">R$ 1,00</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6 mb-8">
        <h3 class="!mt-0 !mb-4">Modelo de Receita</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-black/40 rounded-lg p-4">
            <div class="text-sm text-green-300">Receita por transação</div>
            <div class="text-2xl font-bold text-white">R$ 1,49 fixo + 1,99%</div>
            <div class="text-xs text-gray-400">sobre o valor</div>
          </div>
          <div class="bg-black/40 rounded-lg p-4">
            <div class="text-sm text-green-300">Estratégia</div>
            <div class="text-lg font-bold text-white">Foco em volume e escala</div>
            <div class="text-xs text-gray-400">com margens operacionais saudáveis</div>
          </div>
        </div>
      </div>

      <h2>2. Funcionalidades-Chave (Fase 1)</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="space-y-4">
          <div class="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-blue-300">Conta Digital</h3>
            <p class="!mb-0 text-sm">Criação de conta digital com CPF/CNPJ</p>
          </div>
          
          <div class="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-blue-300">PIX Completo</h3>
            <p class="!mb-0 text-sm">Geração e recebimento de PIX com chave própria</p>
          </div>
          
          <div class="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-blue-300">Boletos Personalizados</h3>
            <p class="!mb-0 text-sm">Gerador de boletos personalizados</p>
          </div>
          
          <div class="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-blue-300">Recebimento Instantâneo</h3>
            <p class="!mb-0 text-sm">Recebimento instantâneo (sem retenção de 30 dias como concorrentes)</p>
          </div>
        </div>
        
        <div class="space-y-4">
          <div class="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Interface Dupla</h3>
            <p class="!mb-0 text-sm">Interface no WhatsApp + dashboard completo via plataforma</p>
          </div>
          
          <div class="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Recorrência Automatizada</h3>
            <p class="!mb-0 text-sm">Recorrência automatizada para assinaturas e cobranças fixas</p>
          </div>
          
          <div class="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Relatórios em Tempo Real</h3>
            <p class="!mb-0 text-sm">Relatórios financeiros em tempo real e extrato completo</p>
          </div>
          
          <div class="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Controle de Repasses</h3>
            <p class="!mb-0 text-sm">Controle de repasses e saques + Criação de links de pagamento simples</p>
          </div>
        </div>
      </div>

      <h2>3. Funcionalidades Futuras (Fase 2+)</h2>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-teal-300">Cartão Físico e Virtual</h3>
          <p class="!mb-0 text-sm">Cartão físico e virtual para uso do saldo</p>
        </div>
        
        <div class="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-orange-300">Integração com IA NOCTA</h3>
          <p class="!mb-0 text-sm">Integração com IA NOCTA para cobranças automáticas e lembretes por WhatsApp</p>
        </div>
        
        <div class="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-indigo-300">Split de Pagamentos</h3>
          <p class="!mb-0 text-sm">Automação de split de pagamentos (ex: clínica e médico)</p>
        </div>
        
        <div class="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border border-pink-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-pink-300">Crédito para Recorrências</h3>
          <p class="!mb-0 text-sm">Crédito para recorrências</p>
        </div>
        
        <div class="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-cyan-300">White-label para Agências</h3>
          <p class="!mb-0 text-sm">Plano de white-label para agências e redes</p>
        </div>
        
        <div class="bg-gradient-to-br from-lime-900/30 to-lime-800/20 border border-lime-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3 text-lime-300">Reemissão Automática</h3>
          <p class="!mb-0 text-sm">Reemissão de cobranças automáticas e vencimentos escalonados</p>
        </div>
      </div>

      <h2>4. Diferenciais Estratégicos</h2>
      
      <div class="space-y-4 mb-8">
        <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Liberação de valor no mesmo dia</h3>
          <p class="!mb-0">Diferencial competitivo crucial em relação aos concorrentes que retêm por 30 dias</p>
        </div>
        
        <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Dashboard completo + gestão via WhatsApp</h3>
          <p class="!mb-0">Interface dupla que atende tanto usuários técnicos quanto operacionais</p>
        </div>
        
        <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Totalmente integrado com NOCTA.I</h3>
          <p class="!mb-0">Fluxos de venda, operação e cobrança em um ecossistema único</p>
        </div>
        
        <div class="bg-teal-900/20 border border-teal-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Modelo escalável para qualquer segmento</h3>
          <p class="!mb-0">Inicialmente clientes NOCTA.I, mas preparado para expansão</p>
        </div>
        
        <div class="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Transações protegidas com KYC/Compliance completo</h3>
          <p class="!mb-0">Via Swipy, garantindo segurança e conformidade regulatória</p>
        </div>
        
        <div class="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Zero necessidade de intermediários</h3>
          <p class="!mb-0">Plataformas externas eliminadas do processo</p>
        </div>
        
        <div class="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-3">Economia de tempo e custo para o cliente final</h3>
          <p class="!mb-0">Redução significativa de fricção operacional e financeira</p>
        </div>
      </div>

      <h2>5. Escalabilidade e Projeção</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Estratégia de Crescimento</h3>
          <div class="space-y-3">
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span class="text-sm">Início com base atual de clientes NOCTA.I (médicos, clínicas e agências)</span>
              </div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span class="text-sm">Expansão para mercado aberto (3º mês de operação)</span>
              </div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span class="text-sm">Capacidade de operar milhares de contas com controle de margem</span>
              </div>
            </div>
            <div class="bg-black/40 rounded-lg p-3">
              <div class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span class="text-sm">Potencial de faturamento exponencial com modelo por transação + conta ativa</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6">
          <h3 class="!mt-0 !mb-4">Potencial Financeiro</h3>
          <div class="bg-black/40 rounded-lg p-4 mb-4">
            <div class="text-center">
              <div class="text-sm text-green-300">Modelo de Receita</div>
              <div class="text-lg font-bold text-white">Transação + Conta Ativa</div>
            </div>
          </div>
          
          <div class="bg-purple-900/30 rounded-lg p-4">
            <div class="text-center">
              <div class="text-sm text-purple-300">Escalabilidade</div>
              <div class="text-xl font-bold text-white">Milhares de Contas</div>
              <div class="text-xs text-gray-400">com controle de margem</div>
            </div>
          </div>
        </div>
      </div>

      <h2>6. Cronograma Previsto</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="space-y-4">
          <div class="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-blue-300">Mês 1-2</h3>
            <p class="!mb-0 text-sm">Prototipação, integração com Swipy, primeiros testes internos</p>
          </div>
          
          <div class="bg-green-900/30 border border-green-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-green-300">Mês 3</h3>
            <p class="!mb-0 text-sm">Primeira versão funcional operando com contas reais dos nossos clientes</p>
          </div>
        </div>
        
        <div class="space-y-4">
          <div class="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-purple-300">Mês 4</h3>
            <p class="!mb-0 text-sm">Lançamento completo da NOCTAPAY para toda a base interna</p>
          </div>
          
          <div class="bg-orange-900/30 border border-orange-500/30 rounded-xl p-4">
            <h3 class="!mt-0 !mb-2 text-orange-300">Mês 5+</h3>
            <p class="!mb-0 text-sm">Expansão para mercado externo (agências, profissionais liberais etc.)</p>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-400/40 rounded-xl p-8">
        <h2 class="!mt-0 !mb-4 text-center">Considerações Finais</h2>
        <p class="!mb-4 text-center">A NOCTAPAY não é apenas um gateway de pagamento. É a próxima etapa na jornada da NOCTA.I rumo ao equity real em tecnologia financeira. Atuando como infra de pagamentos, banco digital leve e plataforma transacional, ela posiciona a NOCTA.I como protagonista também no universo financeiro.</p>
        <p class="!mb-0 text-center text-xl"><em><strong>A NOCTAPAY é o futuro financeiro invisível, simples e 100% dentro da experiência NOCTA.I.</strong></em></p>
      </div>
    `
  },
  {
    id: 'roadmap-estrategico',
    title: 'Roadmap Estratégico NOCTA.I',
    content: `
      <h1>🚀 ROADMAP DE PRODUTOS — NOCTA.I</h1>

      <div class="space-y-8">
        <!-- FASE 1 -->
        <div class="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30 rounded-2xl p-8">
          <div class="flex items-center space-x-4 mb-6">
            <div class="text-4xl">🔥</div>
            <div>
              <h2 class="!mt-0 !mb-2 text-red-300">FASE 1 — Operações Autônomas com Agentes de IA</h2>
              <p class="!mb-0 text-gray-300 italic">(Modelo atual)</p>
            </div>
          </div>
          
          <div class="bg-black/40 rounded-xl p-6 mb-6">
            <h3 class="!mt-0 !mb-4 text-red-200">Objetivo</h3>
            <p class="!mb-0">Validação do modelo operacional com IA customizada, recorrência, margem alta e prova de valor em campo real.</p>
          </div>

          <h3 class="!mt-6 !mb-4 text-red-200">🔧 Produtos e Entregas</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="bg-black/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-red-300">SALES AI™</h4>
              <p class="!mb-0 text-sm">IA para vendas, atendimento, follow-up e reativação</p>
            </div>
            <div class="bg-black/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-red-300">OPS AI™</h4>
              <p class="!mb-0 text-sm">IA para operação administrativa, suporte técnico e cobrança</p>
            </div>
            <div class="bg-black/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-red-300">IA Multicanal</h4>
              <p class="!mb-0 text-sm">Texto, voz (personalizada), imagem e documentos</p>
            </div>
            <div class="bg-black/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-red-300">Customização Profunda</h4>
              <p class="!mb-0 text-sm">IA treinada com dados, vocabulário e lógica do cliente</p>
            </div>
            <div class="bg-black/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-red-300">Entrega Assistida Manual</h4>
              <p class="!mb-0 text-sm">Setup feito pela equipe, com acompanhamento</p>
            </div>
            <div class="bg-black/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-red-300">Modelo Comercial Ativo</h4>
              <p class="!mb-0 text-sm">Fechamentos 1:1 via closers e consultoria</p>
            </div>
            <div class="bg-black/30 rounded-lg p-4 md:col-span-2">
              <h4 class="!mt-0 !mb-2 text-red-300">Contratos Recorrentes</h4>
              <p class="!mb-0 text-sm">3, 6 e 12 meses - MRR previsível com alta margem</p>
            </div>
          </div>

          <h3 class="!mt-6 !mb-4 text-red-200">📊 Indicadores-Chave</h3>
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div class="bg-gradient-to-br from-purple-900/40 to-purple-800/30 rounded-xl p-6">
              <h4 class="!mt-0 !mb-3 text-purple-300">SALES AI™ — IA para Vendas e Atendimento</h4>
              <div class="space-y-2">
                <div class="bg-black/40 rounded-lg p-3">
                  <div class="text-sm text-green-300">Ticket de entrada</div>
                  <div class="text-lg font-bold">R$ 3.000</div>
                  <div class="text-xs text-gray-400">ex: consultório, profissional liberal</div>
                </div>
                <div class="bg-black/40 rounded-lg p-3">
                  <div class="text-sm text-blue-300">Ticket avançado</div>
                  <div class="text-lg font-bold">R$ 10.000</div>
                  <div class="text-xs text-gray-400">ex: grandes clínicas, operações multicanais</div>
                </div>
                <div class="bg-black/40 rounded-lg p-3">
                  <div class="text-sm text-purple-300">Ticket médio (ajustado)</div>
                  <div class="text-xl font-bold">R$ 5.200</div>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl p-6">
              <h4 class="!mt-0 !mb-3 text-blue-300">OPS AI™ — IA para Operação Administrativa e Backoffice</h4>
              <div class="space-y-2">
                <div class="bg-black/40 rounded-lg p-3">
                  <div class="text-sm text-green-300">Ticket de entrada</div>
                  <div class="text-lg font-bold">R$ 7.000</div>
                  <div class="text-xs text-gray-400">ex: SaaS simples, agências</div>
                </div>
                <div class="bg-black/40 rounded-lg p-3">
                  <div class="text-sm text-blue-300">Ticket avançado</div>
                  <div class="text-lg font-bold">R$ 25.000</div>
                  <div class="text-xs text-gray-400">ex: fintechs, plataformas, operações intensas</div>
                </div>
                <div class="bg-black/40 rounded-lg p-3">
                  <div class="text-sm text-purple-300">Ticket médio (ajustado)</div>
                  <div class="text-xl font-bold">R$ 10.000</div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-4 gap-4 mb-6">
            <div class="bg-green-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-green-300">Implementação</div>
              <div class="text-xl font-bold">100% lucro</div>
            </div>
            <div class="bg-blue-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-blue-300">Mensalidade</div>
              <div class="text-xl font-bold">70-80%</div>
              <div class="text-xs text-gray-400">de margem</div>
            </div>
            <div class="bg-red-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-red-300">Custo por operação</div>
              <div class="text-xl font-bold">R$200</div>
              <div class="text-xs text-gray-400">(MENSAL)</div>
            </div>
            <div class="bg-purple-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-purple-300">Ticket médio SALES AI</div>
              <div class="text-xl font-bold">R$5.200</div>
            </div>
          </div>

          <div class="bg-green-900/30 rounded-lg p-4 text-center">
            <p class="!mb-0 font-bold">Base pronta para escalar → entrada na Fase 2</p>
          </div>
        </div>

        <!-- FASE 2 -->
        <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-2xl p-8">
          <div class="flex items-center space-x-4 mb-6">
            <div class="text-4xl">⚙️</div>
            <div>
              <h2 class="!mt-0 !mb-2 text-blue-300">FASE 2 — SaaS NOCTA.I</h2>
              <p class="!mb-0 text-gray-300 italic">(Automação da Escala)</p>
            </div>
          </div>
          
          <div class="bg-black/40 rounded-xl p-6 mb-6">
            <h3 class="!mt-0 !mb-4 text-blue-200">Objetivo</h3>
            <p class="!mb-0">Transformar a entrega em plataforma, removendo fricções operacionais e permitindo escalar para milhares de clientes com time enxuto.</p>
          </div>

          <h3 class="!mt-6 !mb-4 text-blue-200">🧩 Componentes do Produto</h3>
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 class="!mt-0 !mb-3 text-blue-300">Plataforma SaaS All-in-One</h4>
              <div class="space-y-2">
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">CRM visual (kanban)</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Editor de bots com IA treinável</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Calendário + Notas estilo Notion</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Dashboard 360 (leads, vendas, IA, suporte)</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Integração com WhatsApp, chat e e-mail</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="!mt-0 !mb-3 text-blue-300">Operação Autônoma e Guiada</h4>
              <div class="space-y-2">
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Setup com assistente interativo</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Fluxos prontos por segmento</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">White-label para agências</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Múltiplos idiomas (PT, ES, EN)</span>
                  </div>
                </div>
              </div>
              
              <h4 class="!mt-6 !mb-3 text-blue-300">Modelo Comercial SaaS</h4>
              <div class="space-y-2">
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Setup = Mensalidade (R$997 a R$3.497)</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">Venda assistida (closer) ou self-service</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span class="text-sm">MRR previsível e altamente escalável</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 class="!mt-6 !mb-4 text-blue-200">📆 Prazos e Marcos</h3>
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-yellow-900/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-yellow-300">Mês 0-2</h4>
              <p class="!mb-0 text-sm">Protótipo visual + testes internos</p>
            </div>
            <div class="bg-green-900/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-green-300">Mês 3</h4>
              <p class="!mb-0 text-sm">Primeira versão funcional pública</p>
            </div>
            <div class="bg-purple-900/30 rounded-lg p-4">
              <h4 class="!mt-0 !mb-2 text-purple-300">Mês 4+</h4>
              <p class="!mb-0 text-sm">Onboarding de novos clientes via SaaS</p>
            </div>
          </div>

          <div class="bg-green-900/30 rounded-xl p-6">
            <h3 class="!mt-0 !mb-4 text-green-200">🔒 Resultados Esperados</h3>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-black/40 rounded-lg p-4 text-center">
                <div class="text-lg font-bold">Margem 80%</div>
                <div class="text-sm text-gray-400">mesmo com base de 1.000+ clientes</div>
              </div>
              <div class="bg-black/40 rounded-lg p-4 text-center">
                <div class="text-lg font-bold">Redução de CAC</div>
                <div class="text-sm text-gray-400">e suporte</div>
              </div>
              <div class="bg-black/40 rounded-lg p-4 text-center">
                <div class="text-lg font-bold">Equipe mínima</div>
                <div class="text-sm text-gray-400">sustenta base massiva</div>
              </div>
            </div>
          </div>
        </div>

        <!-- FASE 3 -->
        <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-2xl p-8">
          <div class="flex items-center space-x-4 mb-6">
            <div class="text-4xl">💳</div>
            <div>
              <h2 class="!mt-0 !mb-2 text-green-300">FASE 3 — NOCTAPAY</h2>
              <p class="!mb-0 text-gray-300 italic">(Infraestrutura Financeira Integrada)</p>
            </div>
          </div>
          
          <div class="bg-black/40 rounded-xl p-6 mb-6">
            <h3 class="!mt-0 !mb-4 text-green-200">Objetivo</h3>
            <p class="!mb-0">Monetizar transações dos clientes NOCTA.I e oferecer solução de pagamentos white-label e escalável.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 class="!mt-0 !mb-4 text-green-200">🏦 Funcionalidades Core</h3>
              <div class="space-y-2">
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Conta digital (CPF/CNPJ)</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Geração e recebimento de PIX</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Boletos personalizados e links de pagamento</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Dashboard + Gestão via WhatsApp</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Integração total com NOCTA.I SaaS</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="!mt-0 !mb-4 text-green-200">🔮 Funcionalidades Futuras (Fase 2+ do NOCTAPAY)</h3>
              <div class="space-y-2">
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Cartão físico e virtual</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Split de pagamento (ex: clínica + médico)</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Cobrança recorrente automatizada com IA</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">Reemissão automática + vencimentos escalonados</span>
                  </div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span class="text-sm">White-label para agências</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 class="!mt-6 !mb-4 text-green-200">📈 Modelo Financeiro</h3>
          <div class="grid md:grid-cols-4 gap-4 mb-6">
            <div class="bg-blue-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-blue-300">Receita por conta ativa</div>
              <div class="text-xl font-bold">R$2,50</div>
            </div>
            <div class="bg-purple-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-purple-300">Receita por transação</div>
              <div class="text-xl font-bold">R$1,49 + 1,99%</div>
            </div>
            <div class="bg-orange-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-orange-300">Margem</div>
              <div class="text-xl font-bold">4x a 6x</div>
              <div class="text-xs text-gray-400">sobre o custo por transação</div>
            </div>
            <div class="bg-teal-900/30 rounded-lg p-4 text-center">
              <div class="text-sm text-teal-300">Base escalável</div>
              <div class="text-xl font-bold">Lock-in financeiro</div>
            </div>
          </div>

          <h3 class="!mt-6 !mb-4 text-green-200">🗓 Cronograma</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-3">
              <div class="bg-yellow-900/30 rounded-lg p-4">
                <h4 class="!mt-0 !mb-2 text-yellow-300">Mês 0-2</h4>
                <p class="!mb-0 text-sm">Integração Swipy + testes reais</p>
              </div>
              <div class="bg-green-900/30 rounded-lg p-4">
                <h4 class="!mt-0 !mb-2 text-green-300">Mês 3</h4>
                <p class="!mb-0 text-sm">Primeiros clientes ativos</p>
              </div>
            </div>
            <div class="space-y-3">
              <div class="bg-blue-900/30 rounded-lg p-4">
                <h4 class="!mt-0 !mb-2 text-blue-300">Mês 4</h4>
                <p class="!mb-0 text-sm">Lançamento completo na base NOCTA.I</p>
              </div>
              <div class="bg-purple-900/30 rounded-lg p-4">
                <h4 class="!mt-0 !mb-2 text-purple-300">Mês 5+</h4>
                <p class="!mb-0 text-sm">Expansão para mercado externo (agências, profissionais liberais etc.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- TABELA RESUMO -->
        <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-2xl p-8">
          <h2 class="!mt-0 !mb-6 text-center text-purple-200">📌 CONCLUSÃO VISUAL DO ROADMAP</h2>
          
          <div class="overflow-x-auto">
            <table class="w-full border-collapse bg-black/40 border border-white/10 rounded-xl overflow-hidden">
              <thead>
                <tr class="bg-purple-900/30">
                  <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Fase</th>
                  <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Produto-Chave</th>
                  <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Entregas Principais</th>
                  <th class="border border-purple-500/30 p-4 text-left font-semibold text-purple-200">Meta Estratégica</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-white/5">
                  <td class="border border-purple-500/20 p-4">
                    <div class="flex items-center space-x-2">
                      <span class="text-2xl">🔥</span>
                      <span class="font-bold text-red-300">1</span>
                    </div>
                  </td>
                  <td class="border border-purple-500/20 p-4 text-white font-medium">SALES AI + OPS AI</td>
                  <td class="border border-purple-500/20 p-4 text-gray-200">Agentes de IA 100% customizados e operacionais</td>
                  <td class="border border-purple-500/20 p-4 text-green-300">Validar entrega com alta margem</td>
                </tr>
                <tr class="hover:bg-white/5">
                  <td class="border border-purple-500/20 p-4">
                    <div class="flex items-center space-x-2">
                      <span class="text-2xl">⚙️</span>
                      <span class="font-bold text-blue-300">2</span>
                    </div>
                  </td>
                  <td class="border border-purple-500/20 p-4 text-white font-medium">SaaS NOCTA.I</td>
                  <td class="border border-purple-500/20 p-4 text-gray-200">Plataforma autônoma e escalável com IA integrada</td>
                  <td class="border border-purple-500/20 p-4 text-blue-300">Escalar para 1.000+ clientes com time leve</td>
                </tr>
                <tr class="hover:bg-white/5">
                  <td class="border border-purple-500/20 p-4">
                    <div class="flex items-center space-x-2">
                      <span class="text-2xl">💳</span>
                      <span class="font-bold text-green-300">3</span>
                    </div>
                  </td>
                  <td class="border border-purple-500/20 p-4 text-white font-medium">NOCTAPAY</td>
                  <td class="border border-purple-500/20 p-4 text-gray-200">Plataforma de pagamentos integrada e white-label</td>
                  <td class="border border-purple-500/20 p-4 text-green-300">Monetizar transações + lock-in financeiro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'proposta-investimento',
    title: 'Proposta de Investimento',
    content: `
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-6">
          Proposta de Investimento — NOCTA.I
        </h1>
        <div class="max-w-3xl mx-auto">
          <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-2xl p-8">
            <h2 class="!mt-0 !mb-4 text-purple-200">Resumo Executivo</h2>
            <p class="!mb-0 text-lg leading-relaxed">A NOCTA.I é uma empresa de tecnologia com foco em automação inteligente por meio de IA aplicada, com modelo híbrido SaaS + Service, alta margem operacional e capacidade de escalar com estrutura enxuta. Estamos entrando na fase de consolidação e expansão, com necessidade de investimento estratégico para os próximos 3 meses.</p>
          </div>
        </div>
      </div>

      <div class="space-y-12">
        <!-- Proposta Societária -->
        <section>
          <h2 class="text-3xl font-bold text-purple-300 mb-8 text-center">Proposta Societária Atual</h2>
          <div class="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-500/30 rounded-2xl p-8">
            <p class="!mb-8 text-center text-lg">Distribuição societária proposta:</p>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div class="bg-gradient-to-br from-purple-900/40 to-purple-800/30 border border-purple-500/30 rounded-xl p-6 text-center">
                <div class="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold text-white">J</span>
                </div>
                <h3 class="!mt-0 !mb-2 text-purple-300 font-bold">Jon</h3>
                <div class="text-3xl font-bold text-white">45%</div>
              </div>
              
              <div class="bg-gradient-to-br from-blue-900/40 to-blue-800/30 border border-blue-500/30 rounded-xl p-6 text-center">
                <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold text-white">T</span>
                </div>
                <h3 class="!mt-0 !mb-2 text-blue-300 font-bold">Thiago</h3>
                <div class="text-3xl font-bold text-white">30%</div>
              </div>
              
              <div class="bg-gradient-to-br from-green-900/40 to-green-800/30 border border-green-500/30 rounded-xl p-6 text-center">
                <div class="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold text-white">D</span>
                </div>
                <h3 class="!mt-0 !mb-2 text-green-300 font-bold">Diego</h3>
                <div class="text-3xl font-bold text-white">20%</div>
              </div>
              
              <div class="bg-gradient-to-br from-orange-900/40 to-orange-800/30 border border-orange-500/30 rounded-xl p-6 text-center">
                <div class="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold text-white">E</span>
                </div>
                <h3 class="!mt-0 !mb-2 text-orange-300 font-bold">Ezequiel</h3>
                <div class="text-sm text-gray-400 mb-1">(desenvolvedor principal)</div>
                <div class="text-3xl font-bold text-white">5%</div>
              </div>
            </div>
            
            <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
              <p class="!mb-0 text-center"><strong>Nota:</strong> A divisão considera esforço técnico, capital intelectual, participação estratégica e estruturação prévia do negócio.</p>
            </div>
          </div>
        </section>

        <!-- Estimativa de Custos -->
        <section>
          <h2 class="text-3xl font-bold text-purple-300 mb-8 text-center">Estimativa de Custos — Fase Inicial (3 meses)</h2>
          
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <!-- Desenvolvimento -->
            <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-2xl p-6">
              <h3 class="!mt-0 !mb-6 text-blue-300 text-xl font-bold">💻 Desenvolvimento</h3>
              <div class="space-y-4">
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-blue-200">DEV Ezequiel</span>
                    <span class="text-white font-bold">R$1.900/mês</span>
                  </div>
                  <div class="text-right">
                    <span class="text-2xl font-bold text-blue-300">R$ 5.700</span>
                    <span class="text-sm text-gray-400 ml-2">(3 meses)</span>
                  </div>
                </div>
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-blue-200">DEV Junior</span>
                    <span class="text-white font-bold">R$1.000/mês</span>
                  </div>
                  <div class="text-right">
                    <span class="text-2xl font-bold text-blue-300">R$ 3.000</span>
                    <span class="text-sm text-gray-400 ml-2">(3 meses)</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Operações e Growth -->
            <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-2xl p-6">
              <h3 class="!mt-0 !mb-6 text-green-300 text-xl font-bold">📈 Operações e Growth</h3>
              <div class="space-y-4">
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-green-200">Closer (comercial)</span>
                    <span class="text-white font-bold">R$2.500/mês</span>
                  </div>
                  <div class="text-right">
                    <span class="text-2xl font-bold text-green-300">R$ 7.500</span>
                    <span class="text-sm text-gray-400 ml-2">(3 meses)</span>
                  </div>
                </div>
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-green-200">Tráfego pago</span>
                    <span class="text-white font-bold">R$2.000 a R$3.000/mês</span>
                  </div>
                  <div class="text-right">
                    <span class="text-2xl font-bold text-green-300">R$ 7.500</span>
                    <span class="text-sm text-gray-400 ml-2">(estimativa média)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <!-- Infraestrutura -->
            <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-2xl p-6">
              <h3 class="!mt-0 !mb-6 text-purple-300 text-xl font-bold">🏗️ Infraestrutura e Formalização</h3>
              <div class="space-y-4">
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-purple-200">Servidor</span>
                    <span class="text-white font-bold">R$175/mês</span>
                  </div>
                  <div class="text-right">
                    <span class="text-2xl font-bold text-purple-300">R$ 525</span>
                    <span class="text-sm text-gray-400 ml-2">(3 meses)</span>
                  </div>
                </div>
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-purple-200">Contador</span>
                    <span class="text-white font-bold">R$350/mês</span>
                  </div>
                  <div class="text-right">
                    <span class="text-2xl font-bold text-purple-300">R$ 1.050</span>
                    <span class="text-sm text-gray-400 ml-2">(3 meses)</span>
                  </div>
                </div>
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-purple-200">Abertura de CNPJ e legalização</span>
                    <span class="text-white font-bold">Único</span>
                  </div>
                  <div class="text-right">
                    <span class="text-2xl font-bold text-purple-300">R$ 1.000</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Reserva de Caixa -->
            <div class="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-2xl p-6">
              <h3 class="!mt-0 !mb-6 text-orange-300 text-xl font-bold">💰 Reserva de Caixa Estratégica</h3>
              <div class="bg-black/40 rounded-lg p-6 text-center">
                <div class="text-4xl font-bold text-orange-300 mb-4">R$ 10.000</div>
                <p class="!mb-0 text-orange-200">Caixa de segurança para ajustes, upgrades e oscilações</p>
              </div>
            </div>
          </div>

          <!-- Total -->
          <div class="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-400/40 rounded-2xl p-8">
            <h3 class="!mt-0 !mb-6 text-center text-2xl font-bold text-purple-200">Total estimado para 3 meses</h3>
            <div class="grid md:grid-cols-3 gap-6 mb-6">
              <div class="bg-black/40 rounded-lg p-4 text-center">
                <div class="text-sm text-gray-300 mb-2">Custos fixos</div>
                <div class="text-2xl font-bold text-white">R$ 26.275</div>
              </div>
              <div class="bg-black/40 rounded-lg p-4 text-center">
                <div class="text-sm text-gray-300 mb-2">Reserva operacional</div>
                <div class="text-2xl font-bold text-white">R$ 10.000</div>
              </div>
              <div class="bg-purple-900/40 rounded-lg p-4 text-center">
                <div class="text-sm text-purple-300 mb-2">Total</div>
                <div class="text-3xl font-bold text-white">R$ 36.275</div>
              </div>
            </div>
            <div class="bg-green-900/30 border border-green-500/30 rounded-xl p-6 text-center">
              <p class="!mb-0 text-lg"><strong>Podemos considerar um investimento de <span class="text-green-300 text-xl font-bold">R$ 35.000</span> como base inicial de negociação.</strong></p>
            </div>
          </div>
        </section>

        <!-- Observações Importantes -->
        <section>
          <div class="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-2xl p-8">
            <h2 class="!mt-0 !mb-6 text-yellow-300 text-2xl font-bold text-center">⚠️ Observações Importantes</h2>
            <div class="bg-black/40 rounded-xl p-6">
              <p class="!mb-0 text-center text-lg">Este valor <strong>não é fixo nem fechado</strong>: estamos abertos a propostas estruturais e sugestões estratégicas de composição societária, aporte ou modelo de participação.</p>
            </div>
          </div>
        </section>

        <!-- Reinvestimento e Projeção -->
        <section>
          <h2 class="text-3xl font-bold text-purple-300 mb-8 text-center">Reinvestimento e Projeção de Lucro</h2>
          
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div class="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-2xl p-6">
              <h3 class="!mt-0 !mb-6 text-indigo-300 text-xl font-bold">📊 Estratégia de Reinvestimento</h3>
              <div class="space-y-4">
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-indigo-200">Primeiros 3 meses</span>
                    <span class="text-2xl font-bold text-indigo-300">35%</span>
                  </div>
                  <p class="!mb-0 text-sm text-gray-400">da receita será reinvestida diretamente em estrutura, tecnologia, atendimento e tração comercial</p>
                </div>
                <div class="bg-black/40 rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-indigo-200">No primeiro ano</span>
                    <span class="text-2xl font-bold text-indigo-300">30%</span>
                  </div>
                  <p class="!mb-0 text-sm text-gray-400">reinvestimento estratégico, proporcional ao crescimento</p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-2xl p-6">
              <h3 class="!mt-0 !mb-6 text-teal-300 text-xl font-bold">🚀 Modelo Escalável</h3>
              <div class="bg-black/40 rounded-xl p-6">
                <p class="!mb-4">O modelo da NOCTA.I permite crescimento gradual com baixo custo incremental por cliente, garantindo:</p>
                <div class="space-y-2">
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span class="text-sm">Alta margem</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span class="text-sm">Escalabilidade sem capital intensivo contínuo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
            <p class="!mb-0 text-center">É totalmente possível em caso de mentorias, consultorias para melhorar a performance da NOCTA.I</p>
          </div>
        </section>

        <!-- Conclusão -->
        <section>
          <div class="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-400/40 rounded-2xl p-8 text-center">
            <h2 class="!mt-0 !mb-6 text-3xl font-bold text-purple-200">Conclusão</h2>
            <p class="!mb-6 text-lg leading-relaxed">A proposta de investimento visa acelerar a estruturação da entrega como SaaS + IA operacional, consolidar o crescimento de receita recorrente e gerar base sólida para a próxima rodada de expansão (incluindo NOCTA PAY, white-labels e internacionalização).</p>
            <div class="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6">
              <p class="!mb-0 text-xl font-bold text-green-300">Estamos à disposição para apresentar o plano completo, revisar pontos específicos e construir a melhor sociedade possível para dominar o mercado de IA aplicada ao atendimento e operação automatizada.</p>
            </div>
          </div>
        </section>
      </div>
    `
  }
];