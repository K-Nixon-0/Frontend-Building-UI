import {getState, setState} from './state.js';
import {compileRegex, highlight} from './search.js';
import {vTitle, vPages, vDate, vTag, vAdv} from './validators.js';

const qs = s => document.querySelector(s);
const qsa = s => document.querySelectorAll(s);

function render() {
    const data = getState();
    const re = compileRegex(qs('#search').value);
    const sortVal = qs('#sort').value;

    let sorted = [...data];
    if (sortVal === 'title') sorted.sort((a,b) => a.title.localeCompare(b.title));
    if (sortVal === 'pages') sorted.sort((a,b) => a.pages - b.pages);
    if (sortVal === 'date') sorted.sort((a,b) => new Date(b.date) - new Date(a.date));

    qs('#vaultTable').innerHTML = sorted.map((item) => `
        <tr>
            <td>${highlight(item.title, re)}</td>
            <td>${item.author}</td>
            <td>${item.pages}</td>
            <td>${item.tag}</td>
            <td>${item.date}</td>
            <td><button onclick="window.del('${item.id}')">Del</button></td>
        </tr>
    `).join('');

    const totalRec = data.length;
    const totalPages = data.reduce((sum, item) => sum + Number(item.pages), 0);
    qs('#statTotal').innerText = totalRec;
    qs('#statPages').innerText = totalPages;

    const cap = 5000;
    const liveMsg = qs('#liveMsg');
    if (totalPages > cap) {
        liveMsg.setAttribute('aria-live', 'assertive');
        liveMsg.innerText = `Overage! Exceeded page cap of ${cap} by ${totalPages - cap} pages.`;
    } else {
        liveMsg.setAttribute('aria-live', 'polite');
        liveMsg.innerText = `Within cap. Remaining pages: ${cap - totalPages}`;
    }
}

qs('#vaultForm').addEventListener('submit', e => {
    e.preventDefault();
    const [title, author, pages, tag, date] = Array.from(qsa('#vaultForm input')).map(i => i.value);

    if (!vTitle(title) || !vPages(pages) || !vDate(date) || !vTag(tag) || vAdv(title)) {
        alert('Validation failed! Check regex rules');
        return;
    }

    setState([...getState(), {id: 'v_' + Date.now(), title, author, pages: Number(pages), tag, date, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()}]);
    e.target.reset();
    render();
});

window.del = id => {
    setState(getState().filter(i => i.id !== id));
    render();
};

qs('#search').addEventListener('input', render);
qs('#sort').addEventListener('change', render);

qs('#exportBtn').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(getState(), null, 2)], {type: 'application/json'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'vault.json'; a.click();
});

qs('#importFile').addEventListener('change', e => {
    const reader = new FileReader();
    reader.onload = ev => {
        try {
            const json = JSON.parse(ev.target.result);
            if (Array.isArray(json)) {setState(json); render(); alert('Imported');}
        } catch {alert('Invalid JSON');}
    };
    reader.readAsText(e.target.files[0]);
});

render();