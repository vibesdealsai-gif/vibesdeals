function renderContent(content: string) {
// HTML content detect karo
const containsHtml = /</?(p|h2|h3|h4|ul|ol|li|strong|em|br|hr|a|blockquote|div)[^>]*>/i.test(
content
);

// Agar content HTML hai to browser/React ko HTML render karne do
if (containsHtml) {
return (
<div
className="
text-gray-700
[&_p]:mb-5
[&_p]:leading-8
[&_h2]:text-2xl
[&_h2]:md:text-3xl
[&_h2]:font-bold
[&_h2]:text-gray-900
[&_h2]:mt-10
[&_h2]:mb-5
[&_h3]:text-xl
[&_h3]:md:text-2xl
[&_h3]:font-bold
[&_h3]:text-gray-900
[&_h3]:mt-8
[&_h3]:mb-4
[&_h4]:font-bold
[&_h4]:text-gray-900
[&_ul]:list-disc
[&_ul]:pl-6
[&_ul]:mb-6
[&_ol]:list-decimal
[&_ol]:pl-6
[&_ol]:mb-6
[&_li]:mb-2
[&_li]:leading-7
[&_strong]:font-bold
[&_strong]:text-gray-900
[&_a]:text-orange-500
[&_a]:underline
[&_hr]:my-8
[&_hr]:border-gray-200
[&_blockquote]:border-l-4
[&_blockquote]:border-orange-400
[&_blockquote]:pl-5
[&_blockquote]:italic
"
dangerouslySetInnerHTML={{ __html: content }}
/>
);
}

// Purane plain-text / Markdown style blog posts ke liye
const lines = content.trim().split('\n');
const elements: React.ReactNode[] = [];

let listItems: string[] = [];
let listType: 'ul' | 'ol' | null = null;

const flushList = () => {
if (listItems.length === 0 || !listType) return;

const items = listItems;

elements.push(
  listType === 'ul' ? (
    <ul
      key={`ul-${elements.length}`}
      className="list-disc pl-6 mb-6 space-y-2"
    >
      {items.map((item, index) => (
        <li key={index} className="leading-7">
          {formatInline(item)}
        </li>
      ))}
    </ul>
  ) : (
    <ol
      key={`ol-${elements.length}`}
      className="list-decimal pl-6 mb-6 space-y-2"
    >
      {items.map((item, index) => (
        <li key={index} className="leading-7">
          {formatInline(item.replace(/^\d+\.\s*/, ''))}
        </li>
      ))}
    </ol>
  )
);

listItems = [];
listType = null;

};

lines.forEach((line, index) => {
const trimmed = line.trim();

if (!trimmed) {
  flushList();
  return;
}

if (trimmed === '---') {
  flushList();

  elements.push(
    <hr
      key={`hr-${index}`}
      className="my-8 border-gray-200"
    />
  );

  return;
}

if (trimmed.startsWith('### ')) {
  flushList();

  elements.push(
    <h3
      key={`h3-${index}`}
      className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4"
    >
      {formatInline(trimmed.replace(/^###\s+/, ''))}
    </h3>
  );

  return;
}

if (trimmed.startsWith('## ')) {
  flushList();

  elements.push(
    <h2
      key={`h2-${index}`}
      className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-5"
    >
      {formatInline(trimmed.replace(/^##\s+/, ''))}
    </h2>
  );

  return;
}

if (trimmed.startsWith('# ')) {
  flushList();

  elements.push(
    <h2
      key={`h1-${index}`}
      className="text-3xl md:text-4xl font-bold text-gray-900 mt-10 mb-5"
    >
      {formatInline(trimmed.replace(/^#\s+/, ''))}
    </h2>
  );

  return;
}

if (trimmed.startsWith('- ')) {
  if (listType !== 'ul') {
    flushList();
    listType = 'ul';
  }

  listItems.push(trimmed.replace(/^-+\s+/, ''));
  return;
}

if (/^\d+\.\s+/.test(trimmed)) {
  if (listType !== 'ol') {
    flushList();
    listType = 'ol';
  }

  listItems.push(trimmed);
  return;
}

flushList();

elements.push(
  <p
    key={`p-${index}`}
    className="mb-5 leading-8 text-gray-700"
  >
    {formatInline(trimmed)}
  </p>
);

});

flushList();

return elements;
}

function formatInline(text: string): React.ReactNode {
const parts = text.split(/(**.*?**)/g);

return parts.map((part, index) => {
if (part.startsWith('') && part.endsWith('')) {
return (
<strong
key={index}
className="font-bold text-gray-900"
>
{part.slice(2, -2)}
</strong>
);
}

return part;

});
}
