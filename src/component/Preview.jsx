import React from "react";
import { marked } from "marked";

marked.setOptions({
    breaks: true
})

class Preview extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            text: props.text
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({text: nextProps.text})
    }

    getHtml() {
        const parseSTR = marked.parse(this.state.text)
        return {__html: parseSTR}
    }

    render() {

        return(<div id={'cnt'}>
            <h3>Preview</h3>
            <div id={'preview'} dangerouslySetInnerHTML={this.getHtml()}></div>
        </div>)}
}
/*

const Previeww = props => {
    const forceRender = useForceRender()
    const [text, setText] = useState(props.text)

    useEffect(_ => {
        console.log('ca  change 2')
        setText(props.text)
    }, [props.text])

    return(<div>
        <h3>Preview</h3>
        <div id={'preview'}><Markdown>{props.text}</Markdown></div>
    </div>)
}
*/
export default Preview