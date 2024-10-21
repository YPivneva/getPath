/**
 * @jest-environment jsdom
 */

import {getPath} from './getPath';

describe("getPath", () => {
    it("check jsdom", () => {
      const testDiv = document.createElement('div');
      testDiv.className = 'article_aside'
      document.body.appendChild(testDiv);

      expect(getPath).toBeDefined();
    });

    beforeEach(() => {
      document.body.innerHTML = '<button class="button" aria-expanded="true">Im A Button</button>';
    });

    test('getting a selector', () => {
      // Выбираем
      const button = document.querySelector('.button');
      const isContained = document.contains(document.getElementsByClassName('button'));
      
      // Действуем
      getPath(button);

      // Проверяем
      expect(isContained).toBe(true);
    });
});