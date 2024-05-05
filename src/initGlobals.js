import { setGlobal } from "reactn";
import { getCookie } from "./lib/cookies";

const getJsonItem = (key) => {
    const val = window.localStorage.getItem(key);
    if (!val) {
        return null;
    }
    return JSON.parse(val);
};

export async function init() {
    try {
        setGlobal({
            user: getJsonItem("user"),
        });
    } catch (err) {
        console.log(err);
    }
}
