/**
 * Splits a heading into primary (#101828) and secondary (#667085) segments
 * to match the site-wide editorial two-tone heading style.
 */
export default function SplitHeading({ text, highlightLastWord = false }) {
  if (!text) return null;

  let primary = '';
  let secondary = '';

  const sentenceBreak = text.indexOf('. ');
  if (sentenceBreak !== -1) {
    primary = text.slice(0, sentenceBreak + 1);
    secondary = text.slice(sentenceBreak + 2);
  } else {
    const commaBreak = text.indexOf(', ');
    if (commaBreak !== -1) {
      primary = text.slice(0, commaBreak + 1);
      secondary = text.slice(commaBreak + 2);
    } else {
      const words = text.trim().split(/\s+/);
      if (words.length <= 1) {
        return text;
      }
      const splitIdx = Math.ceil(words.length / 2);
      primary = words.slice(0, splitIdx).join(' ');
      secondary = words.slice(splitIdx).join(' ');
    }
  }

  if (highlightLastWord) {
    const secondaryWords = secondary.trim().split(/\s+/);
    if (secondaryWords.length > 1) {
      const lastWord = secondaryWords.pop();
      return (
        <>
          {primary}{' '}
          <span className="text-[#667085]">
            {secondaryWords.join(' ')} <span className="text-[#101828]">{lastWord}</span>
          </span>
        </>
      );
    }
  }

  return (
    <>
      {primary} <span className="text-[#667085]">{secondary}</span>
    </>
  );
}
