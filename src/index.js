import accordion from './accordion';
import { Get } from './utils/ajax';

async function init() {
    const data = await Get('https://jsonplaceholder.typicode.com/users');
    
    new accordion(document.getElementById('accordion'), data);
}

init();

export default accordion;