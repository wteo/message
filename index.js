// When you generate a new secret code, the new hash will immediately be saved in the window location. 
// So, when you refresh the page and try to include a new secret page, the app will just add in a new hash instead of replacing the old one.
const { hash } = window.location;

const message = atob(hash.replace("#", "")); // to remove the pound"#" from hash value/

if (message) {
    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#message-show").classList.remove("hide");

    document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault(); // this is to prevent the page from refreshing.
    
    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#link-form").classList.remove("hide");

    const input = document.querySelector("#message-input");
    const encrypted = btoa(input.value);
    
    const linkInput = document.querySelector("#link-input");
    linkInput.value = `${window.location}#${encrypted}`;
    // window.location - if you type this command in the console of the browser, it'll show you where this app is saved
    linkInput.select(); // .select() automatically selects the link for user
});