const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#newPostTitle').value;
  const description = document.querySelector('#newPostDescription').value;
  if (title && description) {
    const response = await fetch('/api/blogposts/', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Something went wrong!");
    }
  }
};

document
  .querySelector('#newPostForm')
  .addEventListener('submit', newPostFormHandler);