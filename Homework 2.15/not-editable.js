import { comments } from "./data.js";

const listElement = document.getElementById("list");


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

};

renderComments();


 


