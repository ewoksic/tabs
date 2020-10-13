class Tabs {
  constructor() {
    this.about = document.querySelector(".about");
    this.btns = document.querySelectorAll(".tab-btn");
    this.articles = document.querySelectorAll(".content");
    this.events();
  }
  events() {
    this.about.addEventListener("click", (e) => this.toggleCards(e));
  }
  toggleCards(e) {
    const id = e.target.dataset.id;
    if (id) {
      this.btns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      this.articles.forEach(function (article) {
        article.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  }
}
export default Tabs;
