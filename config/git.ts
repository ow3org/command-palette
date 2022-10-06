/**
 * This is the place to define your git hooks.
 * For all available options, please review
 * the type definition.
 */

import type { GitHooks } from 'stacks'

const hooks: GitHooks = {
  'pre-commit': 'lint-staged',
}

/**
 * This is the place where you define your git commit scopes. A scope is a
 * category of commits that share commonalities. Feel free to edit this
 * list to your needs as your scopes may be project-specific.
 */
const scopes = [
  '', 'ci', 'core', 'config', 'deps', 'cli', 'docs', 'dx',
  'example', 'release', 'readme', 'build', 'scripts', 'test',
]

export { hooks, scopes }
