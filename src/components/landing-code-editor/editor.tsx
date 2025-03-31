import './style.css';

export default function Editor() {
    return (
        <div className="code-editor">
            <div className="editor-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="file-name">script.js</span>
            </div>
            <div className="editor-body">
                <span className="keyword">const</span> <span className="variable">developer</span> = {"{"} <br />
                &nbsp;&nbsp;<span className="property">name</span>: <span className="string">"Piyush Bhatt"</span>,<br />
                &nbsp;&nbsp;<span className="property">role</span>: <span className="string">"Full Stack Developer"</span>,<br />
                &nbsp;&nbsp;<span className="property">skills</span>: <span className="array">["Java", "Python", "React", "MongoDB"]</span>,<br />
                &nbsp;&nbsp;<span className="property">assistant</span>: {"{"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">name</span>: <span className="string">"Veronica"</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">role</span>: <span className="string">"AI Guide"</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">sayHello</span>: () =&gt; <span className="string">"How can I assist you today?"</span><br />
                &nbsp;&nbsp;{"}"}<br />
                {"}"};<br /><br />

                <span className="function-call">console.log</span>(<span className="variable">developer</span>.<span className="property">assistant</span>.<span className="function">sayHello</span>());
            </div>
        </div>
    );
}
