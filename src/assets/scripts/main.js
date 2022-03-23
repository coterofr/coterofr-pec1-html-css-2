/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {

  /* Ver más items */

  function _viewMore(viewMoreClass, itemViewLessClass, viewLessClass) {
    let viewMoreBusinessList = document.querySelectorAll(viewMoreClass);
  
    viewMoreBusinessList.forEach(viewMore => {
      viewMore.addEventListener("click", event => {
        viewMoreBusinessList.forEach(viewHide => {
          viewHide.classList.add("is-hidden");
        });

        let businessList = document.getElementsByClassName(itemViewLessClass);
        Array.from(businessList).forEach(item => {
          item.classList.remove("is-hidden");
        });

        let viewLessList = document.querySelectorAll(viewLessClass);
        viewLessList.forEach(viewLess => {
          viewLess.classList.remove("is-hidden");
        });
      });
    });
  }

  /* Ver menos items */

  function _viewLess(viewLessClass, itemViewLessClass, viewMoreClass) {
    let viewLessBusinessList = document.querySelectorAll(viewLessClass);
  
    viewLessBusinessList.forEach(viewLess => {
      viewLess.addEventListener("click", event => {
        viewLessBusinessList.forEach(viewHide => {
          viewHide.classList.add("is-hidden");
        });

        let businessList = document.getElementsByClassName(itemViewLessClass);
        Array.from(businessList).forEach(item => {
          item.classList.add("is-hidden");
        });

        let viewMoreList = document.querySelectorAll(viewMoreClass);
        viewMoreList.forEach(viewMore => {
          viewMore.classList.remove("is-hidden");
        });
      });
    });
  }

  /* Ver más experiencia */

  _viewMore(".view-more-business", "business-list-item view-less", ".view-less-business");
  
  /* Ver menos experiencia */
  
  _viewLess(".view-less-business", "business-list-item view-less", ".view-more-business");

  /* Ver más educación */

  _viewMore(".view-more-center", "centers", ".view-less-center");

  /* Ver menos educación */

  _viewLess(".view-less-center", "centers", ".view-more-center");

  /* Ver más certificaciones */

  _viewMore(".view-more-cert", "certs", ".view-less-cert");

  /* Ver menos certificaciones */

  _viewLess(".view-less-cert", "certs", ".view-more-cert");

  /* Ver más conocimientos */

  _viewMore(".view-more-knowledge", "knowledge-list-item view-less", ".view-less-knowledge");

  /* Ver menos conocimientos */

  _viewLess(".view-less-knowledge", "knowledge-list-item view-less", ".view-more-knowledge");

  /* Ver más tecnologías */

  _viewMore(".view-more-technology", "technology-list-item view-less", ".view-less-technology");

  /* Ver menos tecnologías */

  _viewLess(".view-less-technology", "technology-list-item view-less", ".view-more-technology");

  /* Ver información de contacto */

  let viewContact = document.getElementById("view-contact");
  
  viewContact.addEventListener("click", event => {
    let contact = document.getElementById("contact");
    contact.classList.remove("is-hidden");
  });

  /* Quitar información de contacto */

  let cancelContact = document.getElementById("cancel-contact");
  
  cancelContact.addEventListener("click", event => {
    let contact = document.getElementById("contact");
    contact.classList.add("is-hidden");
  });

  /* Leer más introducción */

  _viewMore(".read-more-about", "read-less", ".read-less-about");

  /* Leer menos introducción */

  _viewLess(".read-less-about", "read-less", ".read-more-about");
  
} )();
