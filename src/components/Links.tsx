import {Fragment} from 'react'
import {useLocation} from "react-router-dom";

//<a>および<span>タグ生成関数
//第1引数 : 表示名
//第2引数 : リンク先URL
//第3引数 : 現在のURL
const toggleLink = (name:string,target:string,path:string) => {
    if(target === path){
        return <span>{name}</span>
    }else{
        return <a href={target}>{name}</a>
    } 
}

//メイン処理
const Links = () => {
    const location = useLocation();

    return (
        <Fragment>
            <h3>&emsp;
                {toggleLink('フォーム','/',location.pathname)}&emsp;
                {toggleLink('ダイアログ','/dialog',location.pathname)}&emsp;
                <a href="https://mui.com/material-ui/" target="_blank" rel="noreferrer">多いので詳細は公式サイト参照</a>
            </h3>
        </Fragment>
    )
}

export default Links;