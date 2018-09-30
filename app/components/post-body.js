import RenderMobiledoc from './render-mobiledoc';
import { computed } from '@ember/object';
import * as TagNameUtils from 'ember-mobiledoc-dom-renderer/mobiledoc-dom-renderer/utils/tag-names';

let isValidSectionTagName = TagNameUtils.isValidSectionTagName;
TagNameUtils.isValidSectionTagName = function (tagName, sectionType) {
  if (tagName === 'small') {
    return true;
  }
  return isValidSectionTagName(tagName, sectionType);
};

(function () {
  let header = document.querySelector('header');
  let logo = document.querySelector('#logo img');
  let h5 = document.querySelector('header h5');
  let textLogo = document.querySelector('#text-logo');
  let height = header.clientHeight;

  document.addEventListener('scroll', function () {
    requestAnimationFrame(animateHeader);
  });

  document.addEventListener('wheel', function () {
    requestAnimationFrame(animateHeader);
  });

  function animateHeader() {
    let top = document.scrollingElement.scrollTop;
    let headerHeight = Math.max((height - top), 80);
    header.style.height = headerHeight + 'px';
    h5.style.height = Math.max((height - top - 46), 34) + 'px';
    if (headerHeight === 80) {
      logo.style.opacity = 0;
    } else {
      logo.style.opacity = (height - top - 80) / (height - 80);
    }
    if ((height - top - 80) < 0) {
      textLogo.classList.add('visible');
    } else {
      textLogo.classList.remove('visible');
    }
  }

})();

export default RenderMobiledoc.extend({
  cardNameToComponentName(name) {
    return 'post-cards/' + name;
  },
  sectionElementRenderer: computed(function () {
    return {
      small(tagName, dom) {
        let element = dom.createElement(tagName);
        return element;
      }
    };
  })
})
