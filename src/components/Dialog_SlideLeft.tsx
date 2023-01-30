//スライドダイアログサンプル

import React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const TransitionLeft = React.forwardRef(function Transition(
	props:TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref:React.Ref<unknown>,
){
	return <Slide direction="left" ref={ref} {...props} />; //ここで表示アクション設定
});

//関数本体
const DialogSlideUp = () => {

	const [open,setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleAccept = () => {
		handleClose();
		console.log('YES');
	};

	const handleCancel = () => {
		handleClose();
		console.log('NO');
	};

	return (
		<div>
			&emsp;<Button variant="outlined" onClick={handleClickOpen}>
				スライドダイアログ ( 右から左へ )
			</Button>
			<Dialog
				open={open}
				TransitionComponent={TransitionLeft}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{"テストタイトル"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						スライドダイアログ表示テスト
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCancel}>NO</Button>
					<Button onClick={handleAccept}>YES</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default DialogSlideUp;