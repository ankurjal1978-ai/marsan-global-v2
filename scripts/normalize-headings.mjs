import fs from 'node:fs/promises';
import path from 'node:path';
for (const f of (await fs.readdir('src/app',{recursive:true})).filter(f=>f.endsWith('page.tsx'))){
  const file=path.join('src/app',f);let text=await fs.readFile(file,'utf8');
  text=text.replace(/<(\/?)h4\b/g,'<$1h3');
  let previous=0;
  text=text.replace(/<h([1-6])(\s[^>]*|)>([\s\S]*?)<\/h\1>/g,(match,level,attributes,content)=>{
    const next=Math.min(Number(level),previous+1);previous=next;
    return `<h${next}${attributes}>${content}</h${next}>`;
  });
  await fs.writeFile(file,text);
}
let footer=await fs.readFile('src/components/footer.tsx','utf8');
footer=footer.replace(/<(\/?)h4\b/g,'<$1h2');await fs.writeFile('src/components/footer.tsx',footer);
let css=await fs.readFile('src/app/brand.css','utf8');
css=css.replace(/h4(?=[\s.{:#>])/g,':is(h2,h3,h4)');await fs.writeFile('src/app/brand.css',css);
