import type {
  SelectOption,
  SelectOptionAllowTypes
} from '@/components/elements/select/select.types'

export function getOptionsFromEnum<
  T extends Record<string, SelectOptionAllowTypes>
>(enum_: T): SelectOption<SelectOptionAllowTypes>[] {
  return Object.entries(enum_).map(([key, value]) => ({
    value: key,
    label: value as string
  }))
}
