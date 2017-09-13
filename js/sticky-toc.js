const contentContainer = document.querySelector('.content__container');
const contentHeadings = document.querySelectorAll('.content__container [id]');
const contentHeadingsArray = [...contentHeadings].filter(heading => !heading.dataset.hide);
const tableOfContents = document.querySelector('.content__sections-list');

const headerOffset = 120;
const windowOffset = window.pageYOffset + headerOffset;

if (contentHeadingsArray && window.innerWidth > 1025) {
  document.addEventListener('scroll', scrollTop);
  document.addEventListener('scroll', scrollSpy);
}

/**
 *
 *
 */
function scrollTop() {
  if (contentContainer) {
    if (headerOffset > contentContainer.getBoundingClientRect().top) {
      if (!tableOfContents.classList.contains('content__sections-list--top')) {
        tableOfContents.classList.add('content__sections-list--top');
      }
    } else {
      tableOfContents.classList.remove('content__sections-list--top');
    }
    if (windowOffset < contentContainer.getBoundingClientRect().top + headerOffset) {
      const activeLink = document.querySelector('a.active');
      if (activeLink) {
        activeLink.classList.remove('active');
      }
    }
  }
}

/**
 *
 *
 */
function scrollSpy() {
  if(contentHeadingsArray) {
    contentHeadingsArray.forEach((el) => {
      const elTopOffset = el.getBoundingClientRect().top;
      if (headerOffset > elTopOffset) {
        const linkSelector = `a[href='#${el.getAttribute('id')}']`;
        const activeLink = document.querySelector(linkSelector);
        if (activeLink) {
          const curActiveLink = document.querySelector('a.active');
          if (curActiveLink) {
            if (curActiveLink.getAttribute('href') !== `#${el.getAttribute('id')}`) {
              curActiveLink.classList.remove('active');
            }
          }
          if (!activeLink.classList.contains('active')) {
            activeLink.classList.add('active');
          }
        }
      }
    });
  }
}