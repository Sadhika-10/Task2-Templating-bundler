import Handlebars from 'handlebars';
import templateSource from './templates/task1.hbs?raw';

const template = Handlebars.compile(templateSource);
const html = template({}); // you can pass data object later if needed

document.getElementById('app').innerHTML = html;
