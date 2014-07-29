/*jslint indent: 2 */
/*global $: false, togglbutton: false*/

'use strict';

togglbutton.render('.task_item .content:not(.toggl)', {observe: true}, function (elem) {
  var link, container = $('.text', elem),
    noteElem = $('.note_icon', elem),
    projectElem = $('.project_link');

  link = togglbutton.createTimerLink({
    className: 'todoist',
    description: container.textContent,
    projectName: projectElem && projectElem.textContent
  });

  container.insertBefore(link, noteElem);
});
