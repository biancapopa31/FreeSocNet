import {useNavigate} from "react-router";
import {useUserDetails} from "../contexts/UserDetailsContext";
import {useEffect} from "react";

export const DecisionPage = () => {
    const navigate = useNavigate();
    const {accountInitialized} = useUserDetails()

    useEffect(() => {
        if (accountInitialized){
            navigate('/home');
        }
        else{
            navigate('/newAccount');
        }
    }, [accountInitialized]);

    return (
        <p>Decision Page</p>
    );
}