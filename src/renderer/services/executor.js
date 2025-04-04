import { spawn, exec, execSync } from "child_process";
import { dialog } from 'electron'
import path from "path";
import fs from "fs";

const runningProcesses = new Map();

export async function runFromNodeEnv(project, scriptName) {
  console.log("executando script", scriptName);

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
      detached: true,
    });

    runningProcesses.set(project, process.pid);

    process.on("close", (code) => {
      resolve({
        success: code === 0,
        message: code === 0 ? "Script finalizado" : "Erro ao executar o script",
      });
    });
  });
}

export async function stopScript(project) {
  const pid = runningProcesses.get(project);
  const processByPort = await listProcesses();

  killProcessOnPort('4200');

  if (pid) {
    process.kill(-pid);
    runningProcesses.delete(project);
    console.log(`Script do projeto ${project} interrompido.`);
    return { success: true, message: "Script interrompido com sucesso" };
  } else {
    console.warn(`Nenhum script em execução para o projeto ${project}.`);
    return { success: false, message: "Nenhum script para interromper" };
  }
}

export function listProcesses() {
  const command =
    process.platform === "win32"
      ? "netstat -ano | findstr LISTEN"
      : "lsof -i -P -n | grep LISTEN";

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout) => {
      if (error) {
        reject(`Erro ao listar processos: ${error.message}`);
        return;
      }

      const process = stdout.trim().split("\n");
      const web = [];

      process.map((pr) => {
        const data = pr.split(" ").filter((el) => el);

        const t = data[8].split(":");
        const port = t[t.length - 1];

        const webServices = {
          name: data[0],
          pid: data[1],
          ip: data[8],
          owner: data[2],
          ipv4: data[5],
          port,
        };

        web.push(webServices);
      });
      resolve(web);
    });
  });
}

function killProcessOnPort(port) {
  try {
    const pid = execSync(`lsof -ti :${port}`).toString().trim();
    if (pid) {
      execSync(`kill -9 ${pid}`);
      console.log(`Processo na porta ${port} encerrado.`);
    }
  } catch (error) {
    console.error(`Erro ao matar processo na porta ${port}:`, error);
  }
}


export async function onOpenFolder() {
  const result = await dialog.showOpenDialog({
    properties: ['openDirectory']
  })

  if (result.canceled || result.filePaths.length === 0) return null

  return result.filePaths[0] 
}



export async function getFoldersInDev(p) {
  const devPath = path.join(p);

  try {
    const folders = fs
      .readdirSync(devPath)
      .filter((file) => fs.statSync(path.join(devPath, file)).isDirectory())
      .map((folder) => {
        const folderPath = path.join(devPath, folder);
        const packageJsonPath = path.join(folderPath, "package.json");

        const isJS = fs.existsSync(path.join(folderPath, "package.json"));
        const isPython = fs.existsSync(path.join(folderPath, "manage.py"));
        const isFlutter = fs.existsSync(path.join(folderPath, "pubspec.yaml"));

        let scripts = [];
        if (isJS) {
          const packageJson = JSON.parse(
            fs.readFileSync(packageJsonPath, "utf8")
          );
          scripts = packageJson.scripts ? Object.keys(packageJson.scripts) : [];
        }

        return {
          name: folder,
          started: false,
          type: isJS ? "JS" : isPython ? "PY" : isFlutter ? "DART" : "Unknown",
          scripts,
        };
      });

    return folders;
  } catch (error) {
    console.error("Erro ao ler a pasta:", error);
    return [];
  }
}