import { VFC, useState } from 'react';
import Head from 'next/head'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import login from "styles/login.module.scss";
import Button from '@material-ui/core/Button';
import { loginAsync } from '../../lib/login';
import Spacer from "../components/util/spacer";

const Login: VFC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const clickLogin = async () => {

        if (!email || !password) {
            setErrorMsg("入力フォームが空白です。")
            return;
        }

        const result = await loginAsync(email, password);
    }

    /**
     *Eメールのチェンジイベント
     * @param e イベント
     */
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setEmail(e.target.value);
    }

    /**
     *パスワードのチェンジイベント
     * @param e イベント
     */
    const onChangePassword = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setPassword(e.target.value);
    }

    return (
        <>
            <Head>
                <title>kazの保管庫</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>

            <div className={login.login}>
                <Card variant="outlined" className={login.loginWrapper}>
                    <CardContent>
                                                                                        {
                        errorMsg && (
                            <div className={login.errorMsgWrapper}>
                                <p className={login.errorMsg}>{errorMsg}</p>
                            </div>
                        )
                        }

                        <form className={login.loginForm} noValidate autoComplete="off">
                            <TextField
                                id="standard-basic"
                                label="メールアドレス"
                                maxRows="1"
                                className={login.loginText}
                                onChange={e => onChangeEmail(e)}
                            />
                            <Spacer margin={20}/>
                            <TextField
                                id="filled-basic"
                                label="パスワード"
                                maxRows="1"
                                className={login.loginText}
                                onChange={e => onChangePassword(e)}
                            />
                        </form>
                        <Spacer margin={20}/>

                        <div className={login.loginButtonWrapper}>
                            <Button variant="contained" color="primary"
                            disableElevation
                            onClick={clickLogin}

                            >
                            ログイン
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Login;
