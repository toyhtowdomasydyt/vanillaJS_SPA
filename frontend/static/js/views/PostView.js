import AbstractView from "./AbstractView.js";

export default class Posts extends AbstractView {
    constructor(params) {
        super(params);

        this.setTitle("Posts");
    }

    async getHTML() {
        return `
            <h1>Post #${this.params.id}</h1>
            <p>Post viewing</p>
        `;
    }
}
