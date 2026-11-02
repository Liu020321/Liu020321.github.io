/* Shared screenshot field renderer for all Same Word modes. */
function freezeCaptureFields(doc){
 const originFields=[...document.querySelectorAll('input,textarea')];
 const clonedFields=[...doc.querySelectorAll('input,textarea')];
 clonedFields.forEach((field,i)=>{
  const original=originFields[i]||field;
  const style=doc.defaultView.getComputedStyle(field);
  const value=original.value||'';
  const placeholder=field.getAttribute('placeholder')||'';
  const fake=doc.createElement('div');
  const isPlaceholder=value.length===0;
  fake.textContent=isPlaceholder?placeholder:value;
  const props=['boxSizing','width','minHeight','height','padding','margin','border','borderRadius','backgroundColor','color','fontFamily','fontSize','fontWeight','lineHeight','letterSpacing','textAlign'];
  props.forEach(p=>{fake.style[p]=style[p]});
  fake.style.display='flex';fake.style.alignItems='center';fake.style.minWidth='0';
  fake.style.width='100%';fake.style.backgroundImage='none';fake.style.boxShadow='none';fake.style.textShadow='none';
  fake.style.webkitTextStroke='0';fake.style.webkitTextFillColor=isPlaceholder?(doc.documentElement.dataset.theme==='light'?'#9b90a7':'#9990ac'):style.color;
  fake.style.color=isPlaceholder?(doc.documentElement.dataset.theme==='light'?'#9b90a7':'#9990ac'):style.color;
  fake.style.whiteSpace='pre-wrap';fake.style.overflowWrap='anywhere';fake.style.overflow='hidden';
  fake.setAttribute('aria-hidden','true');
  field.replaceWith(fake);
 });
}
