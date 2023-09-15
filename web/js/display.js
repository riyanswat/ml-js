function createRow(container, studentName, samples) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  const rowLabel = document.createElement("div");
  rowLabel.innerHTML = studentName;
  rowLabel.classList.add("rowLabel");
  row.appendChild(rowLabel);

  for (let sample of samples) {
    const { id, label } = sample;
    const img = document.createElement("img");
    img.src = `${constants.IMG_DIR}/${id}.png`;
    img.classList.add("thumb");
    row.appendChild(img);
  }
}
