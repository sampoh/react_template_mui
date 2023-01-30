//フォームサンプル

import {useState} from 'react';
import {Fragment} from 'react'

import Links from './Links';

import FormTextField from './Form_TextField';
import FormPulldown from './Form_Pulldown';
import FormRadio from './Form_Radio';
import FormCheckbox from './Form_Checkbox';


//関数本体
const Form = () => {

    //テキスト入力用
    const [text,setText] = useState<string>("");

    //プルダウン用
    const [txtSelect,setTxtSelect] = useState<string>("");
	const [selectArr] = useState(['AABBCC','HHIIJJ','XXYYZZ']);
    const selectAdd = selectArr.map(Add => Add);//配列にマップ
    // let selectAdd = ['X','Y','Z'];

    //ラジオボタン用
    const [radio,setRadio] = useState<string>("Male");
    const radioArr = ['Female','Male','Other'];

    //チェックボックス用
    const [check,setCheck] = useState<boolean[]>([true,false,true]);

    return (
        <Fragment>
            {/* リンク */}
            <Links />
            <hr />
            &emsp;<a href="https://mui.com/material-ui/react-text-field/" target='_blank' rel="noreferrer">公式マニュアル</a>
            <hr />
            {/* テキスト入力 */}
            <FormTextField text={text} setText={setText} />
            <hr />
            {/* プルダウン */}
            <FormPulldown txtSelect={txtSelect} setTxtSelect={setTxtSelect} selectAdd={selectAdd}/>
            <hr />
            {/* ラジオボタン */}
            <FormRadio radio={radio} setRadio={setRadio} radioArr={radioArr}/>
            <hr />
            {/* チェックボックス */}
            <FormCheckbox check={check} setCheck={setCheck} />
        </Fragment>
    )
  }
  
  export default Form;