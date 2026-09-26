import { sanitizeHtml } from "../lib/html";

export default function RichContent({ html, className = "" }: { html?: string; className?: string }) {
  const safe = sanitizeHtml(html);
  if (!safe) return null;
  return <div className={`tn-prose max-w-none ${className}`.trim()} dangerouslySetInnerHTML={{ __html: safe }} />;
}
