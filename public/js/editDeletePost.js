const editPostFormHandler = async (event) => {
  event.preventDefault();

  const id = window.location.toLocaleString()
    .charAt(window.location.toLocaleString().length-1);
  const title = document.querySelector('#editPostTitle').value;
  const description = document.querySelector('#editPostDescription').value;
  if (title && description) {
    const response = await fetch(`/api/blogposts/${id}`, {
      method: 'PUT',
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
  .querySelector('#editPostForm')
  .addEventListener('submit', editPostFormHandler);