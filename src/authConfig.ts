import {AuthConfig} from "./client/types";
import {SessionStorage} from "./client/repos";


const authConfig:AuthConfig = {
    accessTokenCache: new SessionStorage("access_token"),
    refreshTokenCache: new SessionStorage("refresh_token"),
    accessTokenGenerator:(axios,refreshToken) => {
        return Promise.resolve(null
            //     {
            //     accessToken:"",
            //     refreshToken:"dsf",
            //     accessTokenExpiry:3
            // }
        );
    },
    logOutHandler: () => {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("refresh_token");
        window.location.reload()
    },
    refreshTokenExpiry: null
}

export default authConfig;
