var Item = React.createClass({
    changeColor: function() {
        this.props.changeColor(this.props.index);
    },
    render: function() {
        return (
            <li style={{background:this.props.item.color}} onClick={this.changeColor}>{this.props.item.text}</li>
        );
    }
});


var List = React.createClass({
    getInitialState: function() {
        return {
            items: [
                {text: "one",   color: ""},
                {text: "two",   color: ""},
                {text: "three", color: ""}
            ]
        };
    },
    changeColor: function(index) {
        this.state.items.map(function(item, i){
            item.color = (i == index && item.color == '') ? 'blue' : '';
        });

        this.setState(this.state);
    },
    render: function() {
        var that = this,
            items = this.state.items.map(function(item, i){
            return <Item item={item} changeColor={that.changeColor} key={i} index={i} />
        });
        return (
            <ul>
                {items}
            </ul>
        );
    }
});


ReactDOM.render(
    <List /> ,
    document.getElementById('app')
);