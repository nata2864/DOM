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

    // const likeButtonsElements = document.querySelectorAll('.like-button');
    // for (const likeButtonElement of likeButtonsElements) {
    //     likeButtonElement.addEventListener('click', () => {
    //       event.stopPropagation();
    //       const index = likeButtonElement.dataset.index;
    //       if (comments[index].isLiked) {
    //         comments[index].isLiked = false;
    //         comments[index].likes -= 1;
    //       } else {
    //         comments[index].isLiked = true;
    //         comments[index].likes += 1;
    //       };
    //     });
    // };

    // const comment = document.querySelectorAll('.comment');
    // // const nameInputElement = document.getElementById("name-input");
    // // const commentsInputElement = document.getElementById("comments-input");

    // for (const commentElement of comment) {
    //    commentElement.addEventListener('click', () => {
    //      const index = commentElement.dataset.index;
    //       commentsInputElement.value = `${comments[index].name}
    //       ${comments[index].text}`;
    //       renderComments();
    //     });
    //    };
    
    // const buttonElement = document.getElementById('add-button');

    // buttonElement.addEventListener("click", () => {
    //     nameInputElement.classList.remove('error');
    //     commentsInputElement.classList.remove('error');
    
    //     if (nameInputElement.value === "" || commentsInputElement.value === "") {
    //       nameInputElement.classList.add('error');
    //       commentsInputElement.classList.add('error');
    //       return;
    //     };
    
    
    //     buttonElement.disabled = true;
    //     buttonElement.textContent = "Элемент добавлятся...";
        
    // });
};

renderComments();


 


