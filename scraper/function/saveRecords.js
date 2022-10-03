export function saveRecord(doc, date) {
  fs.appendFile("test.txt", JSON.stringify(doc, null, 2), (err) => {
    const length = Object.keys(doc).length;
    if (err) {
      console.error(err);
      return;
    }
    console.log(
      "Successfully written " + length + " records from " + date + " to file."
    );
  });
}
