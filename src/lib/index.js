// place files you want to import through the `$lib` alias in this folder.
import Quote from "./components/Quote.svelte";
import Snackbar from "./components/Snackbar.svelte";
import SnackbarHandler from "./components/SnackbarHandler.svelte";
import { writable } from "svelte/store";

const snackbarHandlerStore = writable({ open: false, content: "" });

const showSnackbar = (/** @type {string} */ content, timeout = 3000) => {
  snackbarHandlerStore.set({ open: true, content });
  setTimeout(hideSnackbar, timeout);
};

const hideSnackbar = () =>
  snackbarHandlerStore.set({ open: false, content: "" });

function copyQuote(/** @type {string} */ quote, /** @type {string} */ author) {
  navigator.clipboard
    .writeText(`${quote}\n  - ${author}`)
    .then(() => showSnackbar("Quote copied!"));
}

export {
  Quote,
  Snackbar,
  SnackbarHandler,
  snackbarHandlerStore,
  showSnackbar,
  hideSnackbar,
  copyQuote,
};
