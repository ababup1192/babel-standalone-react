// App Componentの定義
class App extends React.Component {
    // コンストラクタ。propsを親コンストラクタに渡し、stateにcountを設定。
    constructor(props){
        super(props);
        // 必ずオブジェクトにする。代入の形でstateを設定出来るのは、初期化時だけ。
        this.state = {count: this.props.count};
    }

    // クリックされた時に、起こす処理。
    handleClick(){
        // クリックされた時に、stateをカウントアップ。
        // setStateメソッド経由で、stateを更新。
        this.setState({count: this.state.count + 1});
    }

    render() {
        // h1 に設定するtextには、stateのcountを使う。(string interpolation)
        const text = `Hello, ${this.state.count}`;
        // 先に定義した、クリック処理とtextを使ってh1要素を定義。
        return <h1 onClick={() => this.handleClick()}>{text}</h1>;
    }
}

// App Componentのレンダリング。props countの設定(countの初期化)
ReactDOM.render(<App count={0}/>, document.getElementById('output'));