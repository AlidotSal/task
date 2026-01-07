import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import {Sidebar} from '../src/components/Sidebar'

test('renders name', async () => {
  const { getByText, getByRole } = await render(<Sidebar />)

  await expect.element(getByText('Munich Ost')).toBeInTheDocument()
  await getByRole('textbox', { name: 'search '}).fill("Berlin")

  await expect.element(getByText('Munich Ost')).not.toBeInTheDocument()
})