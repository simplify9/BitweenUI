import {PublicClientApplication} from "@azure/msal-browser";
import {apiClient} from "src/client";
import {useAuthApi} from "src/client/components";
import {useAppConfigQuery} from "src/client/apis/generalApi";
import {useEffect} from "react";
import ENV from "src/env";


let msalInstance: PublicClientApplication
const SignInWithMsButton = () => {
    const config = useAppConfigQuery()
    const {login} = useAuthApi();

    useEffect(() => {
        if (config.data?.msalClientId) {
            msalInstance = new PublicClientApplication({
                auth: {
                    clientId: config.data.msalClientId,
                    authority: ENV.MSAL_AUTHORITY_URL
                },

            });
            msalInstance.initialize().then()
        }


    }, [config.data?.msalClientId]);

    const onClickLoginWithMicrosoft = async () => {
        const msRes = await msalInstance.loginPopup({
            redirectUri: config.data?.msalRedirectUri,
            scopes: ["openid", "profile", "User.Read"]
        });
        if (msRes.idToken) {
            let res = await apiClient.login({msToken: msRes.idToken});
            await login({
                accessToken: res.data.jwt,
                refreshToken: res.data.refreshToken,
                accessTokenExpiry: 3
            })
        }
    }

    if (!config.data?.msalClientId || !config.data?.msalRedirectUri)
        return null

    return <div onClick={onClickLoginWithMicrosoft} className={"my-5"}>

        <img src={"/external/ms.svg"} className={"w-full h-[42px]"}/>
    </div>

}
export default SignInWithMsButton