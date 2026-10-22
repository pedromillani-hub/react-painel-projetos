# Painel de Projetos

Atividade de React: painel que lista projetos usando componentes, props, `children` e `map()`.

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura

```
src/
├── components/
│   ├── Cabecalho.jsx
│   ├── Secao.jsx          (usa children)
│   ├── Resumo.jsx         (usa Indicador)
│   ├── Indicador.jsx      (desafio: componente reutilizável)
│   ├── ProjetoCard.jsx    (usa StatusBadge e TecnologiaTag)
│   ├── StatusBadge.jsx
│   ├── TecnologiaTag.jsx
│   └── Rodape.jsx
├── App.jsx                (array projetos + map)
├── App.css
└── main.jsx
```

## Desafios feitos

- Projetos em destaque com aparência diferente (borda e brilho dourados).
- Componente reutilizável `Indicador`, usado dentro de `Resumo`.
