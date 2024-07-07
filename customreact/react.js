// const { Children } = require("react")

function customRender(reactElement , container){
 
 
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.Children
    // domElement.setAttribute('href' , reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for(const prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}
const reactElement = {
    type: 'reactElement',
    props: {
    href :'https://www.google.com/',
    target: '_blank'
    },
    Children: 'click me to visit google'
}


const maincontainer = document.querySelector('#root')
customRender(reactElement , maincontainer)