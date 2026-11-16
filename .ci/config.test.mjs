import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir,access} from 'node:fs/promises';
import {resolve} from 'node:path';
const root=resolve(import.meta.dirname,'..');
const json=async name=>JSON.parse(await readFile(resolve(root,name),'utf8'));
async function jsonFiles(dir='') {
 const found=[];
 for(const d of await readdir(resolve(root,dir),{withFileTypes:true})) {
  if(['.git','.github','.ci'].includes(d.name))continue;
  const name=dir?dir+'/'+d.name:d.name;
  if(d.isDirectory())found.push(...await jsonFiles(name));
  else if(d.name.endsWith('.json'))found.push(name);
 }
 return found;
}
test('all published JSON configurations parse',async()=>{
 const names=await jsonFiles();assert.ok(names.length>=5);
 for(const name of names)await json(name);
});
test('each shipped remote MCP example targets the public keyless QHooks endpoint',async()=>{
 let checked=0;
 for(const name of await jsonFiles()) {
  const doc=await json(name);if(!doc.mcpServers||typeof doc.mcpServers!=='object')continue;
  assert.deepEqual(Object.keys(doc.mcpServers),['qhooks'],name);
  const config=doc.mcpServers.qhooks,u=new URL(config.url);
  assert.equal(u.origin,'https://qhooks.com',name);assert.equal(u.pathname,'/mcp',name);
  assert.equal(u.username+u.password,'',name);
  if(name==='examples/cursor-mcp.json')assert.equal(config.type,undefined,name);
  else assert.ok(['http','streamable-http'].includes(config.type),name);
  assert.equal(config.command,undefined,name);assert.equal(config.headers,undefined,name);
  if(config.extensions?.['com.openai'])assert.deepEqual(config.extensions['com.openai'].auth,{type:'none'},name);
  checked++;
 }
 assert.ok(checked>=3);
});
test('OpenAI example has the supported root shape without the rejected schema property',async()=>{
 const doc=await json('examples/openai-mcp.json');assert.deepEqual(Object.keys(doc),['mcpServers']);
 assert.deepEqual(doc.mcpServers.qhooks.extensions['com.openai'].auth,{type:'none'});
});
test('Claude marketplace resolves the local plugin and root MCP configuration',async()=>{
 const market=await json('.claude-plugin/marketplace.json'),plugin=await json('.claude-plugin/plugin.json');
 assert.equal(market.plugins.length,1);assert.equal(market.plugins[0].source,'./');
 assert.equal(market.plugins[0].name,plugin.name);assert.ok(plugin.version);
 assert.equal((await json('.mcp.json')).mcpServers.qhooks.type,'http');
 await access(resolve(root,'skills/qhooks/SKILL.md'));
});
test('plugin asset and server configuration references exist inside the repository',async()=>{
 for(const name of ['plugin.json','.cursor-plugin/plugin.json']) {
  const plugin=await json(name);
  for(const field of ['logo','mcpServers'])if(typeof plugin[field]==='string') {
   const path=resolve(root,plugin[field]);assert.ok(path.startsWith(root+'/'));
   await access(path);
  }
 }
});
