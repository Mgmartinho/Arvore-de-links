import { Header } from "../../componentes/Header";
import { Input } from "../../componentes/Input";
import { useState } from "react";


export function Admin() {

  const [nameInput, setNameInput] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [colorInput, setColorInput] = useState('#131313');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  return (
    <div className="flex flex-col items-center min-h-screen pb-7 px-8" >
      <Header />
      <form
        className="flex flex-col mt-3 mb-3 w-full max-w-xl gap-4"

      >
        <label className="text-white font-medium mt-2 mb-2">Nome do Link</label>
        <Input
          placeholder="Digite o nome do link"
          className="justify-center flex w-full text-center max-w-lg px-4 py-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          type="text"
        />

        <Input
          placeholder="URL do link"
          className="justify-center flex w-full text-center max-w-lg px-4 py-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          type="text"
        />

        <section className="flex gap-5 mt-4 mb-4">
          <div className="">
            <label className="text-white font-medium mt-2 mb-2">Fundo do Link</label>
            <input
              type="color"
              className="w-full max-w-sm px-4 py-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
              onChange={(e) => setColorInput(e.target.value)}
              value={colorInput}
            />
          </div>

          <div className="">
            <label className="text-white font-medium mt-2 mb-2">BackGround</label>
            <input
              type="color"
              className="w-full max-w-sm px-4 py-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
              onChange={(e) => setBackgroundColor(e.target.value)}
              value={backgroundColor}
            />
          </div>

        </section>

        <div className="flex flex-col items-center justify-center mt-4 mb-7 p-1 border-gray-300 dark:border-gray-100/25 border rounded-lg">
          <label className="text-white font-medium mt-2 mb-2">Cor do Link</label>
          <article 
            className="w-11/12 max-w-lg flex flex-col items-center justify-center bg-zinc-900 rounded px-1 py-3"
            style={{ backgroundColor: backgroundColor }}
          >
            <p style={{color:colorInput}}> {!nameInput ? "Aguardando Texto" : nameInput} </p>
          </article>
        </div>
      </form>
    </div>
  );
}