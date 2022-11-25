if (!localStorage.getItem("user")) {
    localStorage.setItem("user",
    JSON.stringify(
    {
        cart: [],
        pids: []
    }
    ))
}