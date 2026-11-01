import {test} from 'node:test';
import assert from 'node:assert/strict';
import {lessons,transactions} from '../dist/content.js';
import {evaluate} from '../dist/checks.js';
for(const l of lessons){test(l.title,()=>{if(l.choices){assert.ok(l.answer>=0 && l.answer<l.choices.length);assert.ok(l.explain && l.hint)}else{assert.equal(evaluate(l.solution,l.check,transactions).pass,true);assert.equal(evaluate(l.starter,l.check,transactions).pass,false)}})}
test('hardcoded record answers fail alternative fixtures',()=>{assert.equal(evaluate('return "Corner shop"','property',transactions).pass,false);assert.equal(evaluate('return "Corner shop"','array',transactions).pass,false)});
test('type errors and sign errors are rejected',()=>{assert.equal(evaluate('return "-2500"','value',transactions).pass,false);assert.equal(evaluate('return n => Math.abs(n/100)','function',transactions).pass,false)});
test('different correct functions are accepted',()=>{assert.equal(evaluate('return n => n * 0.01','function',transactions).pass,true)});
