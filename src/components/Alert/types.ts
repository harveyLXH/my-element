import { NameType } from '../Collapse/types'

interface AlertProps {
  content?: string
  type?: NameType
  effect?: 'light' | 'dark'
  closeable: boolean
}

interface AlertEvents {
  e: (e: 'close') => void
}

interface Instance {
  close: () => void
}
