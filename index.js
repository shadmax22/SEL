class ____es {
  constructor(tag = null) {
    this.el = tag?.el ?? _IsElement(tag) ?? document.querySelectorAll(tag);

    this.fragment = null;

    function _IsElement(element) {
      let c = element instanceof Element || element instanceof Document;

      return c ? element : null;
    }
  }
  class(p) {
    this.el.classList.add(p);
    return this;
  }
  attr(p, v = null) {
    if (v == null) {
      return this.el.getAttribute(p);
    } else {
      this.el.setAttribute(p, v);
      return this;
    }
  }
  html(p = null) {
    if (p === null || p === undefined) {
      return this.el.innerHTML;
    } else {
      this.el.innerHTML = p;
      return this;
    }
  }
  each(fun) {
    for (let i = 0; i < this.el.length; i++) {
      fun.call(this.el[i], new ____es(this.el[i]));
    }
  }
  append(p) {
    // if (!this.fragment) {
    //   this.fragment = document.createDocumentFragment();
    //   console.log("fragment created");
    // }

    try {
      this.el.appendChild(p.el || p);
    } catch {}
    return this;
  }

  appends(p) {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < p.length; i++) {
      fragment.appendChild(p[i].el || p[i]);
    }

    this.el.appendChild(fragment);
  }

  appendRaw(p) {
    this.el.innerHTML = this.el.innerHTML + p;
    return this;
  }
  get() {
    //  var o = this.fragment.appendChild(this.el);
    return this.el;
  }

  render() {
    this.fragment && this.el.appendChild(this.fragment);

    this.fragment = null;
    return this;
  }
}
class el extends ____es {
  constructor(tag = null) {
    super(tag);
    this.el = document.createElement(tag);
    return this;
  }
}

const s = (tag) => new ____es(tag);

export { el, s };
