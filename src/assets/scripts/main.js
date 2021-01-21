/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  console.log('Hello, UOC!');
  

} )();

const button_hambuerger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

button_hambuerger.addEventListener('click', ()=>{
  menu.classList.toggle('hidden');
})

