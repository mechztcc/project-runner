import { spawn } from "child_process";
import path from "path";
import fs from "fs";


const runningProcesses = new Map();

export async function runFromNodeEnv(project, scriptName) {

  console.log('executando script', scriptName);
  
  const folderPath = `/home/alberto/dev/${project}`;
  const packageJsonPath = path.join(folderPath, "package.json");

  if (!fs.existsSync(packageJsonPath)) {
    console.error(`Nenhum package.json encontrado em ${folderPath}`);
    reject(`Nenhum package.json encontrado.`);
    return;
  }


  console.log(`Executando  em ${folderPath}...`);
  
  
  return new Promise((resolve) => {
    const process = spawn("npm", ["run", scriptName], {
      cwd: folderPath,
      shell: true,
      stdio: "inherit",
    });

    runningProcesses.set(project, process.pid);

    console.log(runningProcesses);
    

    process.on("close", (code) => {
      resolve({ success: code === 0, message: code === 0 ? "Script finalizado" : "Erro ao executar o script" });
    });
  });
}


export function stopScript(project) {
  const pid = runningProcesses.get(project);
  if (pid) {
    process.kill(-pid); // Envia um sinal de interrupção
    runningProcesses.delete(project);
    console.log(`Script do projeto ${project} interrompido.`);
    return { success: true, message: "Script interrompido com sucesso" };
  } else {
    console.warn(`Nenhum script em execução para o projeto ${project}.`);
    return { success: false, message: "Nenhum script para interromper" };
  }
}