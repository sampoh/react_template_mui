//ダイアログサンプル

import {Fragment} from 'react'

import Links from './Links';
import DialogSlideUp from './Dialog_SlideUp';
import DialogSlideLeft from './Dialog_SlideLeft';
import DialogForm from './Dialog_Form';
import DialogFullscreen from './Dialog_Fullscreen';


//関数本体
const Dialogs = () => {

	return (
		<Fragment>
			<Links />
            <hr />
            &emsp;<a href="https://mui.com/material-ui/react-dialog/" target='_blank' rel="noreferrer">公式マニュアル</a>
            <hr />
            {/* スライドダイアログ */}
			<DialogSlideUp />
            <hr />
            {/* スライドダイアログ */}
			<DialogSlideLeft />
            <hr />
            {/* フォームダイアログ */}
			<DialogForm />
            <hr />
            {/* フルスクリーンダイアログ */}
			<DialogFullscreen />
        </Fragment>
	);
}

export default Dialogs;