import { beforeEach, vi, describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
// import renderHomePage from "./renderHomePage";
import { Window } from "happy-dom"; // jsdom
import { createH2 } from "./renderHomePage.js";
const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();
const window = new Window();
const document = window.document;
vi.stubGlobal("document", document);
beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocContent);
});

describe("renderHomePage.js", () => {
  it("should create an h2 element with text content of Welcome!", () => {
    // Act
    const h2Element = createH2();
    //Assert
    expect(h2Element).not.toBeNull();
    expect(h2Element.textContent).toBe("Welcome!");
  });
  it("should create a paragraph with text content of ");
});
