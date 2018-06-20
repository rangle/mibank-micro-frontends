import { TestWindow } from "@stencil/core/testing";
import { MiNavigation } from "./mi-navigation";

describe("my-component", () => {
  it("should build", () => {
    expect(new MiNavigation()).toBeTruthy();
  });

  describe("rendering", () => {
    let element: HTMLMiNavigationElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MiNavigation],
        html: "<mi-navigation></mi-navigation>"
      });
    });

    it("should work without parameters", () => {
      expect(element.textContent.trim()).toEqual("Hello, World! I'm");
    });
  });
});
