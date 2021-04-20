//const api="http://mymongofunctions.azurewebsites.net/api/"
const api = "http://localhost:7071/api"

export async function getNotes() {
    const response = await fetch(`${api}/note`);
    return await response.json();
}

export async function deleteNote(id) {
    console.log(`deleting :${id}`);
    const response = await fetch(`${api}/note/${id}`, { method: 'DELETE' });
    return response.status;
}

export async function createNote(data) {
    console.log("createNote", data);
    const response = await fetch(`${api}/note`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function amendNote(id, data) {
    console.log("amendNote", data);
    const response = await fetch(`${api}/note/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}