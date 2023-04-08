import { comments } from "./data.js";

const buttonElement = document.getElementById('add-button');
const listElement = document.getElementById("list");
const nameInputElement = document.getElementById("name-input");
const commentsInputElement = document.getElementById("comments-input");




const renderComments = () => {
  const commentsHTML = comments.map((comment, index) => {
    return `<li data-index = '${index}' id = "list-comment" class="comment">
        <div class="comment-header">
          <div>  ${comment.name} </div>
          <div> ${comment.date}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${comment.text}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
            <button data-index = '${index}' class="${comment.isLiked ? 'like-button -active-like' : 'like-button'
      }"></button>
          </div>
        </div>
      </li>`;
  }).join('');




  listElement.innerHTML = commentsHTML;


  const likeButtonsElements = document.querySelectorAll('.like-button');


  for (const likeButtonElement of likeButtonsElements) {
    likeButtonElement.addEventListener('click', (event) => {
      event.stopPropagation();


      const index = likeButtonElement.dataset.index;
      if (comments[index].isLiked) {
        comments[index].isLiked = false;
        comments[index].likes -= 1;
      } else {
        comments[index].isLiked = true;
        comments[index].likes += 1;
      }
      renderComments();


    });
  }
  const comment = document.querySelectorAll('.comment');
 
  for (const commentElement of comment) {
    commentElement.addEventListener('click', () => {
      const index = commentElement.dataset.index;
      commentsInputElement.value = `${comments[index].name}
${comments[index].text}`;
renderComments();
    });
  }


};


renderComments ();




  buttonElement.addEventListener("click", () => {


  nameInputElement.classList.remove('error');
  commentsInputElement.classList.remove('error');
 


  if (nameInputElement.value === "" || commentsInputElement.value === "") {
    nameInputElement.classList.add('error');
    commentsInputElement.classList.add('error');
    return;
  }




 
let myDate = new Date();
  let year = myDate.getFullYear().toString().slice(-2);
  let month = (myDate.getMonth() + 1);
  let day = myDate.getDate();




  let hour = myDate.getHours(); // получаем час из нашей даты
  let minute = myDate.getMinutes(); // получаем минуты









  if (minute < 10) { // если минут будет меньше 10,
    minute = "0" + minute; // то перед ними поставим 0
  }
  if (hour < 10) { // если секунд будет меньше 10,
    hour = "0" + hour;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  let fullDate = day + "." + month + "." + year + " " + hour + ":" + minute;








  comments.push({
    name: nameInputElement.value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;"),
    date: fullDate,
    text: commentsInputElement.value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;"),
    likes: 0,
    isLiked: false,
  });




  renderComments();
  nameInputElement.value = '';
  commentsInputElement.value = '';


});


