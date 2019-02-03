
data = [
    {
        id: [],
        title: "Samurai",
        notes: [],
        children: [
            { "title": "Katana", children: [], notes:[] },
            {
                "title": "Helmet", children: [
                    { "title": "battles", children: [], depth: 3, index: 0},
                    {
                        "title": "head injuries", children: [
                            { "title": "ultra", children: [] }
                        ]
                    }
                ]
            }
        ]
    }
]

data["children"]["children"]["children"][index]

render(){
    {this.state.data.map(d => {
        <Topic title={d.title} children={d.children} parent={this.title} />
    })}
}

// Topic
render(){
    {this.props.children.map(c => {
        <Topic title={c.title} children={c.children} parent={this.title} />
    })}
}