import { VFC, useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { isCheckAcceseToken } from "../../Helper/common";
import { fetchMemos } from "../../lib/memo";

const Memo: VFC = () => {
    const router = useRouter()
    const [memos, setMemos] = useState([]);

    return (
        <></>
    )
}

export default Memo;
