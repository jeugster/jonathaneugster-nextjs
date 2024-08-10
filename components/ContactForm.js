// Contact form
'use client';

export default function FeedbackForm() {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await fetch('/__forms.html', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(formData).toString()
    });
    // Success & error handling should come here
  };

  return (
    <form name="feedback" onSubmit={handleFormSubmit} action="/success">
        <input type="hidden" name="form-name" value="feedback" />
        <input name="name" type="text" placeholder="Name" required />
          <input name="email" type="text" placeholder="Email (optional)" />
          <textarea
              name="message"
              id="yourmessage"
              type="text"
              placeholder="Message"
              className="w-full form-input text-black">
            </textarea>
        <button type="submit">Submit!</button>
    </form>
  );
}