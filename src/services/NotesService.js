// https://medium.com/bb-tutorials-and-thoughts/building-an-react-app-with-azure-static-web-apps-service-4e3e23e9870c
// https://github.com/bbachi/react-azure-static-web-app/blob/master/todo-app/src/services/TodoService.js

const APP_API = process.env.REACT_APP_API;
export async function getNotes(category) {
    console.log(`category :${category}`);
    const response = await fetch(`${APP_API}/note/${category}`);
    return await response.json();
}

export async function deleteNote(id) {
    console.log(`deleting :${id}`);
    const response = await fetch(`${APP_API}/note/${id}`, { method: 'DELETE' });
    return response.status;
}

export async function createNote(data) {
    console.log("createNote", data);
    const response = await fetch(`${APP_API}/note`, {
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
    const response = await fetch(`${APP_API}/note/${id}`, {
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