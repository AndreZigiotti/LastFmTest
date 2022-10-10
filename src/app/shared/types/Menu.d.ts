import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

type MenuItem = {
  icon?: IconDefinition
  label: string
  path: string | string[]
}

export type Menu = {
  title?: string
  items: MenuItem[]
}
