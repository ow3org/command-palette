#!/usr/bin/env node
import cac from 'cac'
import { isInitialized } from '../../src/core/helpers'
import { buildCommands, devCommands, exampleCommands, initCommands, makeCommands, testCommands, utilityCommands } from './cli'
import { ExitCode } from './cli/exit-code'
import { generate as generateAppKey } from './scripts/key'

const artisan = cac('artisan')

// setup global error handlers
process.on('uncaughtException', errorHandler)
process.on('unhandledRejection', errorHandler)

async function main() {
  // before running any commands, check if the key:generate
  // command is run or if the project is already initialized
  artisan
    .command('key:generate', 'Generates & sets the application key.')
    .action(async () => {
      await generateAppKey(process.cwd())
    })

  if (!await isInitialized(process.cwd())) {
    await initCommands(artisan)
  }
  else {
    await devCommands(artisan)
    await buildCommands(artisan)
    await utilityCommands(artisan)
    await makeCommands(artisan)
    await exampleCommands(artisan)
    await testCommands(artisan)
  }

  artisan.parse()
}

main()

function errorHandler(error: Error): void {
  let message = error.message || String(error)

  if (process.env.DEBUG || process.env.NODE_ENV === 'development')
    message = error.stack || message

  console.error(message)
  process.exit(ExitCode.FatalError)
}
