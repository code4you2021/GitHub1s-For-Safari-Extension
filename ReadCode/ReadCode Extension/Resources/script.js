document.addEventListener("DOMContentLoaded", function(event) {
    init()
});

function insertGitHub1sButton(){
    
    const localURL = window.location.href;
    const url = new URL(localURL);
    const path = url.pathname.split('/').slice(1, 3).join('/');
    const href = `https://github1s.com/${path}`;
    
    const btn = `
      <a class="btn ml-2 d-none d-md-block" style="background: rgb(46, 164, 79); color: #fff;" target="_self" href="${href}" id="github1s_kkk">View Online</a>
      `;
    const insertNode = document.querySelector(".d-none.d-md-flex.ml-2");
//    const insertNode = document.querySelectorAll(".btn.ml-2")
//    const frag = document.createRange().createContextualFragment(btn);
        

      if (insertNode) {
        insertNode.insertAdjacentHTML('beforebegin', btn);
//          insertNode.appendChild(frag.firstChild);
      }
}

function ensureGitHub1sButtonExists() {
  if (!document.getElementById('github1s_kkk')) {
    insertGitHub1sButton();
  }
}

function init() {
    const mutationObserver = new MutationObserver(() => ensureGitHub1sButtonExists());
    mutationObserver.observe(document.body, { childList: true, subtree: true });
//    insertGitHub1sButton()
}
