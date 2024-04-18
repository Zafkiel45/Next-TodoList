export const HowToUse = () => {
  return (
    <div className="w-full  flex justify-center h-fit">
      <div className={`border border-[#818181] dark:border-[#6C567D] dark:bg-[#161319] w-4/5 py-3 px-4 rounded-md`}>
        <div className={`w-full text-center py-3`}>
          <h1 className="font-bold">Como usar?</h1>
        </div>
        <div className="
            font-normal
            text-xs
            mobileMini:text-sm
            tablet:text-base
        ">
          Escreva o nome da tarefa, depois aperte no botão sinalizado com um
          mais (+). Agora sua tarefa foi <span className="dark:text-[#B371D1] text-orange-400">adicionada</span>  com sucesso! Para configurar
          ainda mais suas tarefas, clique nela e irá aparecer outro painel onde
          você pode: <span className="dark:text-[#B371D1] text-orange-400">Renomear, apagar a tarefa, adicionar descrição, adicionar
          marcador</span>, dentre outras coisas :)
        </div>
      </div>
    </div>
  );
};
