// main blog
const CreateBlogBtn = document.getElementById("CREATE-BLOG");
const visibleBlog = document.getElementById("visiblityBLog");
const Exit = document.getElementById("Exit");
const body = document.querySelector("body")

CreateBlogBtn.addEventListener("click", () => {
  visibleBlog.style.visibility = "visible";
});
Exit.addEventListener("click", (a) => {
  visibleBlog.style.visibility = "hidden";
});

// img
const reader = new FileReader();
const fileInput = document.getElementById("file");
const img = document.getElementById("imgOfBlog");
reader.onload = (e) => {
  img.src = e.target.result;
};
fileInput.addEventListener("change", (e) => {
  const f = e.target.files[0];
  reader.readAsDataURL(f);
});

// Post

// form

const Title = document.getElementById("Title");
const file = document.getElementById("file");
const paragraph = document.getElementById("paragraph");

const Post = document.getElementById("blogs");
const PostBtn = document.getElementById("POST");

PostBtn.addEventListener("click", () => {
  // main div
  const container = document.createElement("div");
  container.classList.add("ContainerOfBlog");
  // title
   
  const H1 = document.createElement("h1")
  H1.innerText = Title.value

  //   inside div
  const divInsideContainer = document.createElement("div");
  divInsideContainer.classList.add("divInsideContainer");

  //   image
  const Img = document.createElement("img");
  Img.classList.add("imgOfBlog");
  Img.setAttribute("src", file);
  Img.setAttribute("alt", "Img description");
  Img.setAttribute("width", "200");
  Img.setAttribute("height", "150");

  //   paragraph

  const para = document.createElement("p");
  para.classList.add("ParaOfBlog");
  para.innerText = paragraph.value;
  //   appends
  container.appendChild(H1)
  divInsideContainer.appendChild(Img);
  divInsideContainer.appendChild(para);
  container.appendChild(divInsideContainer);
  Post.appendChild(container);
  visibleBlog.style.visibility = "hidden";
});
