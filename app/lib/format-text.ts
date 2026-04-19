/**
 * Converts simple markdown-style formatting to HTML:
 *  **text** → <strong>text</strong>  (bold)
 *  *text*  → <em>text</em>          (italic)
 */
export function formatText(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}
