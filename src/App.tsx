

const App = () => {
  return (
    //container
    <div className='w-full max-w-3xl m-auto flex py-12 flex-col md:flex-row ' >
      {/*info esquerda */}
      <div className="flex flex-col w-auto items-center  mb-12 md:items-start " >
        <a className="block" href="https://github.com/CamilodeAssis" target="_blank">
          <span>Criado por Camilo de Assis</span>
        </a>

        <div className="w-full my-3 flex justify-around text-center md:block  ">
          ...
        </div>

        <button className="bg-redValo w-48 md:w-full text-beigeValo">Reset</button>

      </div>

      {/*grid direita */}
      <div className="flex-1 flex justify-center mx-5 md:justify-end">
        ...
      </div>
    </div>
  );
}

export default App;
