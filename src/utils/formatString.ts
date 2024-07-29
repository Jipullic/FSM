/**
 * Replaces placeholders in the template string with corresponding values.
 *
 * @param {string} template - The template string with placeholders to be replaced.
 * @param {Record<string, string>} values - An object containing key-value pairs for replacements.
 * @return {string} The string with replaced placeholders.
 *
 * @example
 * const result = formatString('hello ${name}', {name: 'Grisha'});
 * console.log(result); // hello Grisha
 */
export function formatString(template: string, values: Record<string, string>) {
  return template.replace(/\${(.*?)}/g, (_, key) => values[key.trim()] || '')
}
