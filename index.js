const form = document.getElementById("multiform");

console.log(form);

form.addEventListener("submit", async (e, x) => {
  console.log("submitting form");
  e.preventDefault();

  const formData = new FormData(e.target);

  const assets = [
    {
      id: 0,
      name: "John Doe",
    },
    {
      id: 1,
      name: "Jane Doe",
    },
  ];
  console.log(formData);

  const blob = new Blob([JSON.stringify(assets)], {
    type: "application/json",
  });

  formData.append("assets", blob);

  console.log(formData);

  const response = await fetch("http://localhost:8081/v1/product/1", {
    method: "PUT",
    body: formData,
  });
  const json = await response.json();

  console.log(json);
});
