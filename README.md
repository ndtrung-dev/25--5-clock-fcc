# 25--5-clock-fcc

This is a project to fulfiled _Front End Development Libraries_ Course provided by freeCodeCamp.

Goals: Create a random quote generator similar to this: https://clock.freecodecamp.rocks/.

In this project, the tech stack was used ReactJS and SCSS. <br>
Check out the live demo [here](https://ndtrung-dev.github.io/25--5-clock-fcc).

## Requirements:

### Tech stacks:

> Using any mix of HTML, Javascript, CSS, Bootstrap, SASS, React, Redux, and jQuery.<br>
> Andditional tech unlisted are not recommended.

### User story:
>
> 1. I can see an element with <code>id="break-label"</code> that contains a string (e.g. "Break Length").
>
> 1. I can see an element with <code>id="session-label"</code> that contains a string (e.g. "Session Length").
>
> 1. I can see two clickable elements with corresponding IDs: <code>id="break-decrement"</code> and<code>id="session-decrement"</code> .
>
> 1. I can see two clickable elements with corresponding IDs:<code>id="break-increment"</code> and<code>id="session-increment"</code> .
>
> 1. I can see an element with a corresponding<code>id="break-length"</code> , which by default (on load) displays a value of 5.
>
> 1. I can see an element with a corresponding<code>id="session-length"</code> , which by default displays a value of 25.
>
> 1. I can see an element with a corresponding<code>id="timer-label"</code> , that contains a string indicating a session is initialized (e.g. "Session").
>
> 1. I can see an element with corresponding<code>id="time-left"</code> . NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).
>
> 1. I can see a clickable element with a corresponding<code>id="start_stop"</code> .
>
> 1. I can see a clickable element with a corresponding<code>id="reset"</code> .
>
> 1. When I click the element with the id of reset, any running timer should be stopped, the value within<code>id="break-length"</code> should return to 5, the value within<code>id="session-length" </code> should return to 25, and the element with<code>id="time-left"</code> should reset to its default state.
>
> 1. When I click the element with the id of break-decrement, the value within<code>id="break-length" </code> decrements by a value of 1, and I can see the updated value.
>
> 1. When I click the element with the id of break-increment, the value within<code>id="break-length"</code> increments by a value of 1, and I can see the updated value.
>
> 1. When I click the element with the id of session-decrement, the value within<code>id="session-length"</code> decrements by a value of 1, and I can see the updated value.
>
> 1. When I click the element with the id of session-increment, the value within<code>id="session-length"</code> increments by a value of 1, and I can see the updated value.
>
> 1. I should not be able to set a session or break length to <= 0.
>
> 1. I should not be able to set a session or break length to > 60.
>
> 1. When I first click the element with<code>id="start_stop"</code> , the timer should begin running from the value currently displayed in<code>id="session-length"</code> , even if the value has been incremented or decremented from the original value of 25.
>
> 1. If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).
>
> 1. If the timer is running and I click the element with<code>id="start_stop"</code> , the countdown should pause.
>
> 1. If the timer is paused and I click the element with<code>id="start_stop"</code> , the countdown should resume running from the point at which it was paused.
>
> 1. When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.
>
> 1. When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the<code>id="break-length"</code> element.
>
> 1. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun.
>
> 1. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the<code>id="session-length"</code> element.
>
> 1. When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding<code>id="beep"</code> .
>
> 1. The audio element with<code>id="beep"</code> must be 1 second or longer.
>
> 1. The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked.

### Testing tools

<em>FCC Testing CDN</em> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js) is provided by freeCodeCamp

## Result

All checkpoint passed!

<b>Note:</b><br> - The <code>audio</code> retrieved from <code>freecodecamp</code>.

Source code uploaded to [github](https://github.com/ndtrung-dev/25--5-clock-fcc).

[Live demo](https://ndtrung-dev.github.io/25--5-clock-fcc) is uploaded to github using <code>gh-pages</code>. <em>FCC Testing CDN</em> was embedded. Select <code>25 + 5 clock</code> option from dropdown menu to verify the result.
