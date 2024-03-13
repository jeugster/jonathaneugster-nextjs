// Contact form
export default function ContactForm() {
 return (
  <div>
   <form
    name="contact"
    action="/success"
    method="POST"
    className="flex-col"
    netlify
   >
    <input type="hidden" name="contact" value="contact" />
    <p className="py-2">
     <label htmlFor="yourname">
      Name:
      <input
       type="text"
       name="name"
       id="name"
       className="w-full form-input text-black"
      />
     </label>{' '}
     <br />
    </p>
    <p className="py-2">
     <label htmlFor="youremail">
      Email:
      <input
       type="email"
       name="email"
       id="youremail"
       className="w-full form-input text-black"
      />
     </label>{' '}
     <br />
    </p>
    <p className="py-2">
     <label htmlFor="yourmessage">
      Message:
      <textarea
       name="message"
       id="yourmessage"
       className="w-full form-input text-black"
      ></textarea>
     </label>{' '}
     <br />
    </p>
    <p className="mr-auto">
     <button type="submit" className="border p-3 mt-3">
      Send Message
     </button>
    </p>
   </form>
  </div>
 )
}
