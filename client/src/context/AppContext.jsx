import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));

    const [credit, setCredit] = useState(false);

    const backendUrl = "https://text-to-image-backend-cydh.onrender.com";

    const navigate = useNavigate();

    const loadCreditData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/user/credits', {headers: {token}});
            if(data.success) {
                setCredit(data.credits);
                setUser(data.user); 
            } 
        } catch(error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const generateImage = async (prompt) => {
        try {
            const {data} = await axios.post(backendUrl + '/api/image/generate-image', {prompt}, {headers: {token}});
            if(data.success) {
                loadCreditData();
                return data.resultImage;
            } else {
                toast.error(data.message);
                loadCreditData();
                if(data.creditBalance === 0) {
                    navigate('/buy');
                }
            }
        } catch(error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const logOut = () => {
        localStorage.removeItem('token');
        setToken('');
        setUser(null);
        toast.success('Logged Out Successfully');
    }

    useEffect(() => {
        if(token) {
            loadCreditData();
        }
    }, [token])

    const value = {
        user, setUser,
        showLogin, setShowLogin,
        backendUrl,
        token, setToken,
        credit, setCredit,
        loadCreditData, logOut,
        generateImage
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
