import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
Returns the parent node of the \`ele\` element:

~~~ javascript
const parent = ele.parentNode;
~~~

## Might be useful

* [Check if an element is a descendant of another](/check-if-an-element-is-a-descendant-of-another)
* [Select the children of an element](/select-the-children-of-an-element)
`}
/>
    );
};