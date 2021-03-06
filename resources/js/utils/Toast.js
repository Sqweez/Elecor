import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.css";
import {TOAST_TYPE} from "../config/consts";

function showToast(message, title = '', type = TOAST_TYPE.SUCCESS, opts = {}) {
    iziToast[type]({
        title, message, duration: 3000, ...opts
    })
}

export default showToast;
