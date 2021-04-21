
export async function getNotes() {
    const response = await fetch(`${process.env.REACT_APP_API}/note`);
    return await response.json();
}

export async function deleteNote(id) {
    console.log(`deleting :${id}`);
    const response = await fetch(`${process.env.REACT_APP_API}/note/${id}`, { method: 'DELETE' });
    return response.status;
}

export async function createNote(data) {
    console.log("createNote", data);
    const response = await fetch(`${process.env.REACT_APP_API}/note`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

    if (response.status === 200) {
        return await response.json();
    } else {
        return {};
    }
}

export async function amendNote(id, data) {
    console.log("amendNote", data);
    const response = await fetch(`${process.env.REACT_APP_API}/note/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    if (response.status === 200) {
        return await response.json();
    } else {
        return {};
    }
}