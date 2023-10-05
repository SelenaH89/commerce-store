import json from 'secure-json-parse';

/**
 * Safely parse a JSON string using secure-json-parse.
 *
 * @param {string} stringifiedJson - The JSON string to be parsed.
 * @returns {Object|Array|undefined} - The parsed JSON object or array, or undefined if parsing fails.
 */
export function parseJson(stringifiedJson) {
  if (typeof stringifiedJson !== 'string' || !stringifiedJson.trim())
    return undefined;

  try {
    return json.parse(stringifiedJson, { protoAction: 'remove' });
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return undefined;
  }
}
