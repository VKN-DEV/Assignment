document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enquiryForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const category = document.getElementById("category").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !contact || !category || !message) {
      alert("PLEASE ENTER THE VALUES!");
      return;
    }

    const w = window.open("", "_blank");
    w.document.write(`
      <html><head><title>Enquiry Result</title></head>
      <body style="font-family:'Times New Roman',serif;padding:30px;">
        <h2>Congratulation...!!</h2>
        <p><b>Name</b> : ${name}</p>
        <p><b>Email</b> : ${email}</p>
        <p><b>Contact Number</b> : ${contact}</p>
        <p><b>Category of Enquiry</b> : ${category}</p>
        <p><b>Message</b> : ${message}</p>
      </body></html>
    `);
  });
});
