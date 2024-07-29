type AllowTypes = string | number | symbol

/**
 * Returns a record mapping enum values to their corresponding names based on a provided name map.
 *
 * @template TEnum - The type of the enum object.
 * @param {TEnum} enumObject - The enum object.
 * @param {Record<keyof TEnum, string>} nameMap - The name map used to map enum values to their names.
 * @return {Record<AllowTypes, string>} - The record mapping enum values to their names.
 *
 * @example
 * // Define an enum object
 * enum Colors {
 *   Red = 'red',
 *   Green = 'green',
 *   Blue = 'blue',
 * }
 *
 * // Define a name map for the enum
 * const colorsNames = {
 *   Red: 'Красный',
 *   Green: 'Зеленый',
 *   Blue: 'Синий',
 * }
 *
 * // Get the enum names
 * const enumNames = getEnumNames(Colors, colorsNames)
 * console.log(enumNames) // Output: { Red: 'Красный', Green: 'Зеленый', Blue: 'Синий' }
 */
export function getEnumNames<TEnum extends Record<string, AllowTypes>>(
  enumObject: TEnum,
  nameMap: Record<keyof TEnum, string>
): Record<AllowTypes, string> {
  const enumNames: Partial<Record<AllowTypes, string>> = {}

  Object.entries(enumObject).forEach(([key, value]) => {
    if (typeof value === 'number') {
      enumNames[value] = nameMap[key as keyof TEnum]
    }
  })

  return enumNames as Record<AllowTypes, string>
}
