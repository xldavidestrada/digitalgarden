/* Build Tailwind using PostCSS API to avoid missing CLI binaries on Windows environments */
import fs from 'fs'
import postcss from 'postcss'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

const input = 'src/styles/tailwind.css'
const output = 'public/tailwind.css'

async function build() {
  try {
    const css = await fs.promises.readFile(input, 'utf8')
    const result = await postcss([tailwindcss, autoprefixer]).process(css, { from: input, to: output })
    await fs.promises.mkdir('public', { recursive: true })
    await fs.promises.writeFile(output, result.css)
    console.log(`Wrote ${output}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

build()
