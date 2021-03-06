import React from 'react';
import './markdown-previewer.css';
let  md = require('markdown-it')();


const markedCode = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`

function Result(props){
  return(
    <div className="result">
      <h3>Preview</h3>
      <div dangerouslySetInnerHTML={{ __html: props.result }} id="preview" />
    </div>
  )
}

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: markedCode
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }
  render(){
    const result = (md.render(this.state.input)).toString();
    return(
      <div id='container'>
        <div>
          <textarea id='editor' value={this.state.input} onChange={this.handleChange}/>
        </div>
          <Result result={result} />
      </div> 
    )
  }
}
