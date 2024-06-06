
class promoModel {
    constructor(ID, title, description, note, logo, cssClass) {
        this.ID = ID;
        this.title = title;
        this.description = description;
        this.note = note;
        this.cssClass = cssClass;
    }
}
let promoObj = new promoModel("header", "React js ess", "Come from long time", "Time to get started!", "App-logo");
export { promoObj };


