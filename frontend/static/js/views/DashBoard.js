import AbstractView from "./AbstractView.js";

export default class DashBoard extends AbstractView {
    constructor() {
        super();

        this.setTitle("Dashboard");
    }

    async getHTML() {
        return `
            <h1>Dashboard</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Ad aspernatur cumque debitis explicabo illum iusto possimus quasi rem ut voluptate.</p>
            <p><a href="/posts" data-link>View recent posts</a></p>
        `;
    }
}
