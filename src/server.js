import http from "http";
import open from "open";
import fs from "fs/promises";

export const interpolation = (html, data) => {
  return html.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, placeholder) => {
    return data[placeholder] || "";
  });
};
export const formatNotes = (notes = []) => {
  return notes
    .map((note) => {
      return `
      <div class="note">
        <p>${note.content}</p>
        <div class="tags">
          ${note.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
    `;
    })
    .join("\n");
};
export const createServer = (notes) => {
  return http.createServer(async (req, res) => {
    const HTML_PATH = new URL("./template.html", import.meta.url);
    const template = await fs.readFile(HTML_PATH, "utf-8");
    const html = interpolation(template, { notes: formatNotes(notes) });

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  });
};

export const startServer = (notes, port) => {
  const server = createServer(notes);
  const address = `http://localhost:${port}`;
  server.listen(port, () => {
    console.log(`Server is running at ${address}`);
    open(address);
  });
};
