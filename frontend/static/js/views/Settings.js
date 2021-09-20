import AbstractView from "./AbstractView.js";

export default class Settings extends AbstractView {
    constructor(params) {
        super(params);

        this.setTitle("Settings");
    }

    async getHTML() {
        return `
            <h1>${document.title}</h1>
            <p>Settings page</p>
        `;
    }
}
