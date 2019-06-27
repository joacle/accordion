import accordion from './accordion';
import { Get } from './utils/ajax';
import staticData from './data/staticData';

async function init() {
    const userData = await Get('https://jsonplaceholder.typicode.com/users');

    const data = staticData;
    data.push({ title: 'Users', data: JSON.parse(userData).map((user) => {
        return { value: user.name };
    }) });
    
    new accordion(document.getElementById('accordion'), data);
}

init();

export default accordion;