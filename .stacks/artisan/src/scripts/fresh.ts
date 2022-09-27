import consola from 'consola'
import { NpmScript } from '../../../src/types'
import { runNpmScript } from './run-npm-script'

export async function reinstallNpmDependencies() {
  consola.info('Reinstalling your npm dependencies...')
  await runNpmScript(NpmScript.Fresh)
  consola.success('Successfully reinstalled your npm dependencies.')
}
