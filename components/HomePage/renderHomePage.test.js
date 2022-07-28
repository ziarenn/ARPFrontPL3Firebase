import { it, expect, beforeEach, desribe, vi } from "vitest";
import fs from "fs";
import path from "path";
import renderHomePage from "./renderHomePage";
import { Window } from "happy-dom"; // jsdom
const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();
const window = new Window();
const document = window.document;
vi.stubGlobal("document", document);
beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocContent);
});
