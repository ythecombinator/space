---
title: '🇵🇹 • O que há de novo com o AngularJS?'
date: '2014-11-10'
tags: ['angular']
summary: 'Mudanças anunciadas na ng-Europe, a versão 1.3, “morte” de APIs… O AngularJS 2.0 ainda será o AngularJS que conhecemos?'
---

Mudanças anunciadas na ng-Europe, a versão 1.3, “morte” de APIs… O AngularJS 2.0 ainda será o AngularJS que conhecemos?

Decidi escrever este post para compartilhar um pouco do que penso sobre o que tem acontecido ao longo dos últimos dias desde a ng-europe e o que esperar — ou não — do Angular2.0. Eu não pretendo que esse post seja algo muito técnico nem penso que ele irá cobrir todos os detalhes, mas eu realmente gostaria de falar sobre as minhas impressões e fazer alguns comentários sobre alguns tópicos específicos e anúncios que chamaram a minha atenção.

Como todos sabem, a ng-europe é, como o próprio nome diz, a conferência europeia dedicada ao nosso querido AngularJS. Antes dela tivemos a ng-conf, que aconteceu no início deste ano, em Utah, nos EUA. Assim como na ng-conf, muitos desenvolvedores estavam presentes (cerca de 800 pessoas) no evento.

Mas assim, uma coisa que eu posso notar (principalmente em discussões em grupos de Angular aqui no Brasil) é que, enquanto alguns estão animados com a abordagem moderna e diferente que o framework terá com sua versão 2.0, muitos estão prevendo o pior - e alguns estão preocupados com o que devem fazer com seus projetos em Angular.

Antes de eu começar, as opiniões neste post são baseadas na minha experiência com o framework — e estou muito longe de ser dono da verdade. Então, se você não concordar com nenhuma das opiniões ou informações dadas aqui, deixe seu comentário e ficarei feliz em reavaliar os meus argumentos e opiniões.

## O AngularJS 1.3

Agora vamos começar falando sobre a versão atual: as informações sobre Angular 1.3 já estão disponíveis desde que foi lançada a versão estável — na semana anterior da ng-europe, se não me engano. Confesso que eu tinha ouvido falar várias melhorias para a API da 1.3, mas eu não tinha me sentido muito animado com isso – não tinha encontrado uma razão convincente para atualizar os meus projetos atuais de 1.2.x para 1.3.

Mas, depois de assistir algumas palestras da ng-europe e ler alguns artigos e discussões, estou convencido dos benefícios de atualização. Certamente é a melhor versão do Angular disponível hoje. Ele vem com muitas correções de bugs (com `$browser`, `$http`, `$injector`, `$parse`, `$location`, `$compile` por exemplo) e também apresenta melhorias — como one-time bindings, o módulo `ngMessages` e muitos outros. E, assim como novas APIs, há ainda melhorias que podem render benefícios significativos no desempenho de seu projeto.

## AngularJS 2.0

Agora, o tão esperado Angular 2.0 — o tema na mente de todo desenvolvedor Angular nesse momento. Foi circulada muita informação sobre ele desde o seu anúncio, mas irei comentar aqui somente alguns pontos que se destacaram mais para mim.

### Matando APIs

Penso que muitas das APIs com que você era familiar no 1.x foram “massacradas”: **controladores**, **Directive Definition Objects (DDOs)**, `angular.module`, **jqLite** e o `$scope` – sim, até o `$scope`. Confesso que, na primeira vez que eu vi isso, eu pensei sobre o tempo que gastei estudando as APIs atuais e fiquei muito chateado. Mas agora eu estou contente de ver o que está por vir.

Entre essas mudanças, eu gostaria de falar sobre a remoção do jqLite e enfatizar a do `$scope`. A primeira é justificada pelo fato de que a inclusão de jQlite afeta muito o desempenho. Micro-otimização foi tentada mas, cá entre nós, é muito melhor operar com a API DOM nativa. Desde que o AngularJS 2.0 visa os conhecidos “evergreen browsers”, eu posso entender a mudança – até porque eu me vejo usando APIs nativas cada vez mais. Ah, é válido lembrar que você ainda estará livre para incluir e usar jQuery.

A segunda coisa que eu gostaria de mencionar é que `$scope` como uma facilidade “explícita” na API não existe mais. Há apenas um controlador. O scope ainda está fazendo o seu trabalho “nos bastidores” — mas nós desenvolvedores não o vemos.

Ao fazer isso, o Angular 2.0 não está removendo a ligação de dados e nem a possibilidade de chamar funções a partir de modelos: ele está apenas retirando a scope API que oferece esses recursos em versões anteriores.

### AtScript: Uma nova linguagem?

Eu prefiro ver o AtScript como um superset do ES6 que está sendo usado para criar o Angular 2.0. Ele usa a sintaxe de tipos do Typescript para representar tipos opcionais que podem ser usados para gerar type assertions em tempo de execução, em vez de checks em tempo de compilação. Ele também estende a linguagem com anotações de metadados.

Estou animado com o AtScript — mas levando em conta que já trabalhava com TypeScript antes, vocês podem dizer que a minha opinião não conta. Um ponto que eu penso ser interessante sobre AtScript é que você pode aproveitar a sintaxe de tipos como uma maneira simples de fornecer metadados para outras bibliotecas. Eu acho que um dos recursos mais poderosos do AtScript é ter as informações de tipo e metadados disponíveis em tempo de execução para que frameworks possam usar — ou para usar em metaprogramação. Na verdade, não ficaria nada surpreso se outras linguagens “copiassem” esse recurso.

### Suporte? Migração?

Nesse momento você provavelmente deve estar se perguntando: “O que vai acontecer com 1.x?”, “Existe um meio de migração do 1.x para 2.0?” ou mesmo “E o suporte a versões anteriores?”… Mas garanto que você não deve se preocupar com o suporte – afinal o Google tem mais de 1600 aplicativos internos que são feitos o Angular 1.2 ou 1.3. Logo podemos perceber que o Google tem investido fortemente na versão atual, e logo terá de oferecer suporte a ela por um bom tempo. Questionado sobre o suporte para o 1.3, uma vez que o 2.0 tivesse sido liberado, Brad Green afirmou que poderíamos esperar pelo menos entre um ano e meio ou dois anos de suporte para a 1.3 após a versão final estável do Angular 2.0 ser lançada. Considerando o fato de que o 2.0 ainda está em um estágio muito experimental, com muitos detalhes de implementação ainda nem sequer decididos, eu diria que temos alguns anos ainda de suporte total para o 1.3.

Com relação a migrações, Rob Eisenberg (que está escrevendo o novo router do 2.0) afirmou que não foram anunciados ainda quaisquer planos disponibilizados a respeito de migração para aqueles que desejam passar seus aplicativos do Angular 1.x para o 2.0 — quando este estiver disponível . Também é válido ressaltar que, em sua palestra, ele disse que o router do 2.0 vai ser portado para o 1.3. Penso eu que talvez isso possa acontecer com outros módulos 2.0, mas temos que esperar e ver.

### Ainda é o AngularJS que conhecemos (e amamos)?

Desde o anúncio de todas as mudanças propostas no AngularJS 2.0, muitos desenvolvedores já manifestaram suas preocupações e críticas sobre o que a equipe está fazendo. Muitas dessas críticas são válidas — até porque a nova versão está longe da perfeição — mas também há muita desinformação sendo ventilada por aí.

Eu mesmo ouvi de pessoas aqui que o Angular 2.0 vai ser um framework tão diferente que não deveria nem ser chamado de Angular e que toda a ideia por trás do Angular 1.x foi desfeita.

Eu até posso entender um pouco a forma como se chegaram a essas conclusões — afinal do jeito que as novidades do 2.0 foram apresentadas na ng-europe, era fácil ter a ideia de que praticamente tudo iria mudar. Mas, quando você estuda um pouco mais as mudanças anunciadas, vê que não é bem o caso.

Se pararmos pra pensar, veremos que existem alguns conceitos-chave por trás do AnguarJS, como: injeção de dependências, detecção de mudanças, e DOM extensível. E eu, pessoalmente, não ouvi nada sobre o 2.0 que sugere o fim de qualquer um deles — nem outros conceitos importantes.

O que irá mudar são as APIs que nós, desenvolvedores, usamos para acessar estes recursos. Algumas delas vão mudar muito. Mas os conceitos fundamentais permanecerão.

E outra: eu acho que, se você é qualquer tipo de desenvolvedor web, você tem que estar preparado para possíveis mudanças e adaptar-se a elas. Muitos outros frameworks ainda vão mudar (talvez grandes, talvez pequenas mudanças — dependendo de suas necessidades, foco etc.) devido às novas tecnologias que surgem. Se eles não mudam, se tornam obsoletos em um futuro próximo, uma vez que o ES6 e outras tecnologias entram em cena. O desafio é decidir sobre a forma como você vai lidar com a mudança.

## Conclusão

Eu confesso que estou muito animado sobre os rumos do Angular 2.0, e que estou ansioso para atualizar alguns de meus projetos para a 1.3 e me aproveitar das melhorias disponíveis. Eu acho que a maioria das mudanças anunciadas para o 2.0 são evolutivas, e projetadas para simplificar os padrões que muitos de nós já estão usando. E eu acho que muitos outros desenvolvedores já estão percebendo a mesma coisa — e assim também fez a equipe do Angular. Com o AngularJS 2.0, eles estão apenas respondendo a maneira como parte da comunidade tem produzido — e isso me deixa ansioso para ver o que está por vir!
