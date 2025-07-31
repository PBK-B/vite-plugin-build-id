import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="/typescript.svg" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Hi, Vite</h1>
    <p class="read-the-docs">
      Welcome use <b>vite-plugin-build-id</b>, Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
