export function evaluate(code, kind, transactions) {
 const fn = new Function('transaction','transactions','"use strict";\n'+code);
 const fixtures = [transactions[0], {id:99,payee:'Bookshop',category:'Books',amountPence:-975}];
 if(kind==='value') return {pass:Object.is(fn(fixtures[0],transactions),-2500),output:fn(fixtures[0],transactions)};
 if(kind==='property') return {pass:fixtures.every(t=>fn(t,transactions)===t.payee),output:fn(fixtures[0],transactions)};
 if(kind==='array') return {pass:[transactions,[fixtures[1]]].every(ts=>fn(ts[0],ts)===ts[0].payee),output:fn(fixtures[0],transactions)};
 const result=fn(fixtures[0],transactions);
 return {pass:typeof result==='function' && [-1250,0,250000,-1].every(n=>Object.is(result(n),n/100)),output:typeof result==='function'?result(-1250):result};
}
