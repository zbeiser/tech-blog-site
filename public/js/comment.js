const commentFormHandler = async (event) => {
  event.preventDefault();

  const blogpost_id = window.location.toLocaleString()
    .charAt(window.location.toLocaleString().length-1);
  const description = document.querySelector('#commentText').value;
  if (description) {
    const response = await fetch('/api/comments/', {
      method: 'POST',
      body: JSON.stringify({ description, blogpost_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace("/blogpost/" + blogpost_id);
    } else {
      alert("Something went wrong!");
    }
  }
};

document
  .querySelector('#commentForm')
  .addEventListener('submit', commentFormHandler);