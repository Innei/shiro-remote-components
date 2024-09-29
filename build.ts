import { exec } from 'child_process'
import { readdirSync } from 'fs'
import path from 'path'
import { promisify } from 'util'

const execAsync = promisify(exec)

// 获取 src/components 目录下的所有 .tsx 文件
const componentFiles = readdirSync(
  path.resolve(import.meta.dirname, 'src/components'),
)
  .filter((file) => file.endsWith('.tsx'))
  .map((file) => file.split('.')[0])

async function buildComponent(name: string) {
  console.log(`Building component: ${name}`)
  try {
    const { stdout, stderr } = await execAsync(
      `COMPONENT_NAME=${name} vite build --config vite.build.config.mts`,
    )
    console.log(stdout)
    if (stderr) console.error(stderr)
  } catch (error) {
    console.error(`Error building ${name}:`, error)
  }
}

async function buildAll() {
  await Promise.all(componentFiles.map(buildComponent))
}

buildAll().catch(console.error)
