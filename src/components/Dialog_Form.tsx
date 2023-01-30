import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
	props:TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref:React.Ref<unknown>,
){
	return <Slide direction="up" ref={ref} {...props} />; //ここで表示アクション設定
});

const DialogForm = () => {

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleAccept = () => {
		handleClose();
		console.log('登録');
	};

	const handleCancel = () => {
		handleClose();
		console.log('キャンセル');
	};

	return (
		<div>
			&emsp;<Button variant="outlined" onClick={handleClickOpen}>
				フォームダイアログ
			</Button>
			<Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
				<DialogTitle>フォームダイアログ</DialogTitle>
				<DialogContent>
					<DialogContentText>
						フォームを含むダイアログのサンプル
					</DialogContentText>
					<TextField autoFocus margin="dense" id="name" label="メールアドレス" type="email" fullWidth variant="standard" />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCancel}>キャンセル</Button>
					<Button onClick={handleAccept}>登録</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default DialogForm;